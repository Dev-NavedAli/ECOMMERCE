import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

import axios from "axios"

export const ShopContext = createContext();

const ShopContextProvider = (props) => {

    const currency = '$';
    const delivery_fee = 10;
    const backendUrl = import.meta.env.VITE_BACKEND_URL
    const [search, setSearch] = useState('');
    const [showSearch, setShowSearch] = useState(false)
    const navigate = useNavigate()
    const [products, setProducts] = useState([])
    const [token, setToken] = useState('')
    //---------------------------- Add to Cart functionality-------------------------------------

    const [cartItem, setCartItem] = useState({});

    const addToCart = async (itemId, size) => {

        if (!size) {
            toast.error('Select Product Size')
            return;
        }

        let cartData = structuredClone(cartItem);

        if (cartData[itemId]) {
            if (cartData[itemId][size]) {
                cartData[itemId][size] += 1
            }
            else {
                cartData[itemId][size] = 1;
            }
        }
        else {
            cartData[itemId] = {};
            cartData[itemId][size] = 1;
        }
        setCartItem(cartData)

        if (token) {
            try {
                await axios.post(`${backendUrl}/api/cart/add`, { itemId, size }, { headers: { token } }) //agar hum logged in hue to hmara product database me bhi add ho jaayega
            } catch (error) {
                console.log(error.message)
                toast.error(error.message)
            }
        }
    }

    const getCartCount = () => {
        let totalCount = 0
        for (const items in cartItem) {
            for (const item in cartItem[items]) {
                try {
                    if (cartItem[items][item] > 0) {
                        totalCount += cartItem[items][item]
                    }
                } catch (error) {

                }
            }
        }
        return totalCount;
    }
    const updateQuantity = async (itemId, size, quantity) => {
        let cartData = structuredClone(cartItem);
        cartData[itemId][size] = quantity;
        setCartItem(cartData)
        if (token) {     //neche isi ka ek function hai getUserCart name se
            try {
                await axios.post(`${backendUrl}/api/cart/update`, { itemId, size, quantity }, { headers: { token } })
            } catch (error) {
                console.log(error.message)
                toast.error(error.message)
            }
        }
    }

    const getCartAmount = () => {
        let totalAmount = 0;
        for (const items in cartItem) {
            let itemInfo = products.find((product) => product._id === items);
            for (const item in cartItem[items]) {
                try {
                    if (cartItem[items][item] > 0) {
                        totalAmount += itemInfo.price * cartItem[items][item]
                    }
                } catch (error) {

                }
            }
        }
        return totalAmount
    }
    const getProductData = async () => {
        try {
            const response = await axios.get(backendUrl + "/api/product/list")
            if (response.data.success) {
                setProducts(response.data.products)
            } else {
                toast.error(response.data.message)
            }

        } catch (error) {
            console.log(error)
            toast.error(error.message)

        }

    }

    const getUserCart = async(token)=>{
        try {
            const response = await axios.post(`${backendUrl}/api/cart/get`,{},{headers:{token}})
            if(response.data.success){
                setCartItem(response.data.cartData)  //yha se db se cart data update hoga state variable me
            }
        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }
    }

    useEffect(() => {
        getProductData()
    }, [])

    useEffect(()=>{
        if(!token && localStorage.getItem('token')){     //refresh krne pr token chla jaata hai state variable se. 
          //isiliye hm token ko localstorage me save kr denge or mauka or dobara state variable me store kr denge
          setToken(localStorage.getItem('token'))
          getUserCart(localStorage.getItem('token'))
        }
      },[])

    const value = {
        products, currency, delivery_fee,
        search, setSearch, showSearch, setShowSearch,
        cartItem, addToCart, getCartCount, updateQuantity, getCartAmount, navigate, backendUrl, setToken,token, setCartItem

    }
    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}
export default ShopContextProvider;