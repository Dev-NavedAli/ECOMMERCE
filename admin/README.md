Making admin panel

step -1--------making a folder name admin in root directory
step2-----------install react-router-dom,axios,react-toastify.
step3-----change fromtend folder port to 5174 and admin port at 5173k

step4-----install tailwind,and make two folders component and pages and in pages folder make three files Add.jsx,List.jsx,Orders.jsx and in component make Navbar.jsx,Sidebar.jsx and mount the navbar,Sidebar.jsx at app.jsx. For react-router-dom go to sideBar.jsx and in "Navlink" tag there is a property name to to="/add" then give the links as per need and our react router dom will work succesfully

step----React router dom use is project me aise hua hai sbse phle main.jsx me jaake reactstrickmode ko htake hme BrowserRouter naam ka tag import kr liya or app ko tie kr diya Browser Router tag me  uske baad sidebar.jsx me gaye or "Navlink to import krke lga diya or usme to property lga di or us to property ka matlab hme jis route pe jaana ho uske baad app.jsx me aaye or "Routes" and "Route" tag ko import kr liya or Route ko Routes ke andar daal diya uske baad Route ke andar do property aati hai "path" and "element" path ka matlab konse path pe or elemnt ka matlab konsa element render hona hota hai "sideBar" me jo to hai vo basically route ke path se same hota hai  

step5----Go to main.jsx and mount the app with "BrowserRouter" for react router dom

step6----suppose agar hume chaihye ki kis link pe click kren to vo hme dikhe kis alag color me jaise hmare add,list and orders me ho ra ha Navlink by Default us link pe active class daal deti hai jis pr click kiya gya ho to simple hume css me jaake .active se class bnaakar border and border color dena hai 