1-install react-router-dom and go to main.jsx and change the strict mode tag to BrowserRouter and extract it from react-router-dom

2-make folders like components,contxt,pages and delete app.css and install tailwind

3-go pages folder and make 9 files home,about,cart,collection,conatact,login,orders,placeOrder and product.jsx 

4-make a file component folder name #Navbar.jsx and import the file into app.jsx and import {Route and Routes} from react-router-dom

5- make a tag <Routes> and give all 9 like this <Route path='/' element={} /> like this

#doubt = if u wanted to know how the dropdown button display filters and hide in big displays using tailwind goto collection.jsx 

#BACKEND

package using-------npm i cors dotenv express jsonwebtoken mongoose ejs nodemon razorpay stripe validator cloudinary bcrypt,multer ,multer-storage-cloudinary,cloudinary


How to integrate backend authenitcation api with frontend
make a state variable in Shopcontext.jsx export it using value. go to login.jsx import token,setToken,navigate,backendUrl from useContext(shopContext) and then make three state variable for name,email and password or hum uske baad jo inputs hai login.jsx me unme ye lga denge jaise jo name vaala input hai usme onChange={(e)=>setName(e.target.value)} isse jo bhi hmari value hogi jo input me user daalega vo hamre name vaale state variable me save jo jaayegi aise hi teeno me kr lenge uske baad submit handler me try catch block lgaka with the help of "Axios" hm araam se backend ki kisi bhi api pe reuest bhej skte hai