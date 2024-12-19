Making admin panel

step -1--------making a folder name admin in root directory
step2-----------install react-router-dom,axios,react-toastify.
step3-----change fromtend folder port to 5174 and admin port at 5173k

step4-----install tailwind,and make two folders component and pages and in pages folder make three files Add.jsx,List.jsx,Orders.jsx and in component make Navbar.jsx,Sidebar.jsx and mount the navbar,Sidebar.jsx at app.jsx. For react-router-dom go to sideBar.jsx and in "Navlink" tag there is a property name to to="/add" then give the links as per need and our react router dom will work succesfully.

step----React router dom use is project me aise hua hai sbse phle main.jsx me jaake reactstrickmode ko htake hme BrowserRouter naam ka tag import kr liya or app ko tie kr diya Browser Router tag me  uske baad sidebar.jsx me gaye or "Navlink to import krke lga diya or usme to property lga di or us to property ka matlab hme jis route pe jaana ho uske baad app.jsx me aaye or "Routes" and "Route" tag ko import kr liya or Route ko Routes ke andar daal diya uske baad Route ke andar do property aati hai "path" and "element" path ka matlab konse path pe or elemnt ka matlab konsa element render hona hota hai "sideBar" me jo to hai vo basically route ke path se same hota hai . 

step5----Go to main.jsx and mount the app with "BrowserRouter" for react router dom

step6----suppose agar hume chaihye ki kis link pe click kren to vo hme dikhe kis alag color me jaise hmare add,list and orders me ho ra ha Navlink by Default us link pe active class daal deti hai jis pr click kiya gya ho to simple hume css me jaake .active se class bnaakar border and border color dena hai 


step7--------"How to connect backend api to admin panel" 
isme hm root pe .env bna lenge jisme apne backend ka url daal denge fir us env variable ko app.jsx me "export const
 backendUrl = import.meta.env.VITE_BACKEND_URL" export kr denge taaki kisi bhi file me esaily accesible rhe hmara ".envvariable" fir uske baad login.jsx me jaake by using axios hum "const response = await axios.post(backendUrl+'/api/user/admin',{email,password})" ye bhej denge lekin email pass whi hona chaihye jo hmne backend directory me .env ke andar daala tha aise hmare admin ka login.jsx se backend connect ho jaayega.

step-8------how to display the selected image by admin to upload
go to Add.jsx and if  src={!image1?assets.upload_area:URL.createObjectURL(image1)} agar image na ho to deafult rahe upload pe agar image rahe to us image ko display kara do 

 # HOW TO DEVLOP FUNCTIONALITY WHEN THE USER CLICK TO COD OR RAZORPAY IT GO TO ITS PAGES IIN BACKEND
create a file in controllers name orderController.js and create a schema of placeorder name  orderModel.js in model folder,and make orderRoute.js in routes folder and  make five function in orderController.js  placeOrder, placeOrderStripe, placeOrderRazorpay, allOrders, userOrder, updateStatus and export all of them and go to orderRoute.js and import all functions mentioned above and and make routing  like orderRouter.post('/list',adminAuth,allOrders) and export orderRouter() then go to server.js and import orderRouter from the orderRoute.js and  write this app.use('/api/order',orderRouter ) uske baad apne controllers function me code krne ke baad  hum frontend pe jaake placeOrder.jsx vaali file me jaauyenge or usme ek state Variable bna lenge or inputs pe onChange lga denge or state variable ka setter function call krke data state variable me le lenge onSubmitHandler function or OnChangeHandler ki help se


# HOW TO CHANGE THE ORDER STATUS USING ADMIN PANEL

contorller.js me jaake updateStatus me jaake me jaake  orderId or status nikaal liya req.body se uske baad ordelMOdel me findByIdnAndUpdate lga ke usme orderId se find kiya and status ko update  paas kr diya fir Order.jsx me statusHandler naam ka function bna liya or usme do para le liye orderId and event le liye uske baad axios se post request bhej denge url pe or usme orderId for backend ke liye pass krenge or status me event.target.value le lenge or select tag me onChange={(event)=> statusHandler(event,order._id)} value={order.status}  ye daaal denge isse db me order ka status update ho jaayega 



# PAYMENT INTEGRATION USING STRIPE

step1-----make a stripe account and copy stripesecret key and save it to our .env file name <b> STRIPE_SECRET_KEY </b>
step2--- import the stripe from stripe pkj 