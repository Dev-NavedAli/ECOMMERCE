import React, { useState } from 'react'
import { assets } from '../assets/assets.js'
import axios from "axios"
import { backendUrl } from '../App.jsx'
import { toast } from 'react-toastify'

const Add = ({ token }) => {

  const [image1, setImage1] = useState(false)
  const [image2, setImage2] = useState(false)
  const [image3, setImage3] = useState(false)
  const [image4, setImage4] = useState(false)

  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')
  const [category, setCategory] = useState('Men')
  const [subCategory, setSubCategory] = useState('Topwear')
  const [bestseller, setBestseller] = useState(false)
  const [sizes, setSizes] = useState([])


  const onSubmitHamdler = async (e) => {
    e.preventDefault()

    try {
      const formData = new FormData()

      formData.append("name", name)
      formData.append("description", description)
      formData.append("price", price)
      formData.append("category", category)
      formData.append("subCategory", subCategory)
      formData.append("bestseller", bestseller)
      formData.append("sizes", JSON.stringify(sizes))

      image1 && formData.append("image1", image1)    //yha image 1 && isiliye likha hai bcuz agar humne siirf ek image daali to error na aaye
      image2 && formData.append("image2", image2)
      image3 && formData.append("image3", image3)
      image4 && formData.append("image4", image4)

      const response = await axios.post(backendUrl + "/api/product/add", formData, { headers: { token } })
      if (response.data.success) {
        toast.success(response.data.message)
        setName('')
        setDescription('')
        setImage1(false)
        setImage2(false)
        setImage3(false)
        setImage4(false)
        setPrice('')
      }else{
        toast.error(response.data.message)
      }

    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }

  }

  return (
    <div>
      <form className='flex flex-col w-full items-start gap-3' onSubmit={onSubmitHamdler}>
        <div>
          <p className='mb-2'>Upload Image</p>
          <div className='flex gap-2'>
            <label htmlFor="image1">
              <img src={!image1 ? assets.upload_area : URL.createObjectURL(image1)} alt="" className='w-20' />
              <input type="file" onChange={(e) => setImage1(e.target.files[0])} id="image1" hidden />
            </label>
            <label htmlFor="image2">
              <img src={!image2 ? assets.upload_area : URL.createObjectURL(image2)} alt="" className='w-20' />
              <input type="file" onChange={(e) => setImage2(e.target.files[0])} id="image2" hidden />
            </label>
            <label htmlFor="image3">
              <img src={!image3 ? assets.upload_area : URL.createObjectURL(image3)} alt="" className='w-20' />
              <input type="file" onChange={(e) => setImage3(e.target.files[0])} id="image3" hidden />
            </label>
            <label htmlFor="image4">
              <img src={!image4 ? assets.upload_area : URL.createObjectURL(image4)} alt="" className='w-20' />
              <input type="file" onChange={(e) => setImage4(e.target.files[0])} id="image4" hidden />
            </label>
          </div>
        </div>

        <div className='w-full'>
          <p className='mb-2'>Product Name</p>
          <input onChange={(e) => setName(e.target.value)} value={name} className='w-full max-w-[500px] px-3 py-2' type="text" placeholder='Type Here' required />
        </div>
        <div className='w-full'>
          <p className='mb-2'>Product Description</p>
          <textarea onChange={(e) => setDescription(e.target.value)} value={description} className='w-full max-w-[500px] px-3 py-2' type="text" placeholder='Write Content Here' required />
        </div>

        <div className='flex flex-col sm:flex-row gap-2 w-full sm:gap-8'>

          <div>
            <p className='mb-2'>Product Category</p>
            <select onChange={(e) => setCategory(e.target.value)} value={category} className='w-full px-3 py-2'>
              <option value="Men">Men</option>
              <option value="Women">Women</option>
              <option value="Kids">Kids</option>
            </select>
          </div>

          <div>
            <p className='mb-2'>Sub Category</p>
            <select onChange={(e) => setSubCategory(e.target.value)} value={subCategory} className='w-full px-3 py-2'>
              <option value="Topwear">Top Wear</option>
              <option value="Bottomwear">Bottom Wear</option>
              <option value="Winterwear">Winter Wear</option>
            </select>
          </div>

          <div>
            <p className='mb-2'> Product Price</p>
            <input onChange={(e) => setPrice(e.target.value)} value={price} className='w-full px-3  py-2 sm:w-[120px]' type="Number" placeholder='25' />
          </div>

        </div>

        <div>
          <p className='mb-2'>Product Sizes</p>
          <div className='flex gap-3'>
            <div onClick={() => setSizes(prev => prev.includes("S") ? prev.filter(item => item !== "S") : [...prev, "S"])}>
              <p className={`${sizes.includes("S") ? "bg-pink-200" : "bg-slate-200"} px-4 py1 cursor-pointer`}>S</p>
            </div>
            <div onClick={() => setSizes(prev => prev.includes("M") ? prev.filter(item => item !== "M") : [...prev, "M"])}>
              <p className={`${sizes.includes("M") ? "bg-pink-200" : "bg-slate-200"} px-4 py1 cursor-pointer`}>M</p>
            </div>
            <div onClick={() => setSizes(prev => prev.includes("L") ? prev.filter(item => item !== "L") : [...prev, "L"])}>
              <p className={`${sizes.includes("L") ? "bg-pink-200" : "bg-slate-200"} px-4 py1 cursor-pointer`}>L</p>
            </div>
            <div onClick={() => setSizes(prev => prev.includes("XL") ? prev.filter(item => item !== "XL") : [...prev, "XL"])}>
              <p className={`${sizes.includes("XL") ? "bg-pink-200" : "bg-slate-200"} px-4 py1 cursor-pointer`}>XL</p>
            </div>
            <div onClick={() => setSizes(prev => prev.includes("XXL") ? prev.filter(item => item !== "XXL") : [...prev, "XXL"])}>
              <p className={`${sizes.includes("XXL") ? "bg-pink-200" : "bg-slate-200"} px-4 py1 cursor-pointer`}>XXL</p>
            </div>
          </div>
        </div>
        <div className='flex gap-2 mt-2 '>
          <input onChange={() => setBestseller((prev) => !prev)} checked={bestseller} type="checkbox" id='bestseller' />
          <label className='cursor-pointer ' htmlFor="bestseller">Add to Best Seller</label>
        </div>

        <button type='submit' className='w-28 py-3  mt-4 bg-black text-white active:bg-gray-800' >ADD</button>
      </form>

    </div>
  )
}

export default Add
