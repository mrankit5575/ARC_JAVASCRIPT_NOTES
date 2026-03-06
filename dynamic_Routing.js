1️⃣ Routing in React (Brief Notes)
Routing kya hota hai?
Routing ka matlab hota hai different URLs ko different components ya pages se connect karna.
Example website URLs:

/          → Home Page
/about     → About Page
/contact   → Contact Page
/services  → Services Page

Traditional websites me page reload hota hai, lekin React me Single Page Application (SPA) hoti hai jisme page reload nahi hota.
React me routing handle karne ke liye library use hoti hai:
react-router-dom
Install command:
npm install react-router-dom

2️⃣ React Router DOM Basic Components
| Component     | Use                                            |
| ------------- | ---------------------------------------------- |
| BrowserRouter | Routing enable karta hai                       |
| Routes        | Routes ko group karta hai                      |
| Route         | Specific URL ko component se connect karta hai |
| Link          | Navigation ke liye use hota hai                |

  Basic Example
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Home"
import About from "./About"

function App(){
 return(

 <BrowserRouter>
   <Routes>
<Route path="/" element={<Home/>} />
<Route path="/about" element={<About/>} />
 </Routes>
</BrowserRouter>

 )
}
Navigation Example
import { Link } from "react-router-dom"

function Navbar(){

return(

<div>
<Link to="/">Home</Link>
<Link to="/about">About</Link>

</div>
)
}
Important:

❌ <a> tag page reload karta hai
✅ <Link> page reload nahi karta


3️⃣ Dynamic Routing (Full Explanation)
Dynamic Routing kya hota hai?

Dynamic routing ka matlab hai URL me dynamic value pass karna.

Example:/product/1
/product/2
/product/3
4️⃣ Dynamic Route Syntax

Dynamic route banane ke liye colon (:) use hota hai.
/product/:id
Example:
<Route path="/product/:id" element={<ProductDetail/>}/>
5️⃣ URL Parameter Access (useParams)
React Router hook use hota hai:
useParams()
Example:
import { useParams } from "react-router-dom"

function Product(){

const { id } = useParams()

return(

<h1>Product ID : {id}</h1>

)

}
Agar user open kare:
/product/5
Output:
Product ID : 5
6️⃣ Example with data.js
data.js
export const products = [

{
id:1,
name:"Laptop",
price:50000
},

{
id:2,
name:"Mobile",
price:20000
},

{
id:3,
name:"Tablet",
price:30000
}

]

Product List
import { Link } from "react-router-dom"
import { products } from "./data"

function ProductList(){

return(

<div>

{products.map(product =>(

<div key={product.id}>

<h3>{product.name}</h3>

<Link to={`/product/${product.id}`}>
View Details
</Link>

</div>

))}

</div>

)

}
Product Detail Page
import { useParams } from "react-router-dom"
import { products } from "./data"

function ProductDetail(){

const { id } = useParams()

const product = products.find(
p => p.id === Number(id)
)

if(!product){
return <h2>Product Not Found</h2>
}

return(

<div>

<h1>{product.name}</h1>

<p>Price: {product.price}</p>

</div>

)

}

7️⃣ Dynamic Routing with API
Example API:
https://jsonplaceholder.typicode.com/posts
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

function Posts(){

const [posts,setPosts] = useState([])

useEffect(()=>{

fetch("https://jsonplaceholder.typicode.com/posts")
.then(res => res.json())
.then(data => setPosts(data))

},[])

return(

<div>

{posts.slice(0,10).map(post =>(

<div key={post.id}>

<h3>{post.title}</h3>

<Link to={`/post/${post.id}`}>
Read More
</Link>

</div>

))}

</div>

)

}
Post Detail
import { useParams } from "react-router-dom"
import { useEffect,useState } from "react"

function PostDetail(){

const { id } = useParams()

const [post,setPost] = useState(null)

useEffect(()=>{

fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
.then(res=>res.json())
.then(data=>setPost(data))

},[id])

if(!post){
return <p>Loading...</p>
}

return(

<div>

<h1>{post.title}</h1>

<p>{post.body}</p>

</div>

)

}
8️⃣ Dynamic Routing Edge Cases
1️⃣ Wrong ID

Example:

/product/100



Product exist nahi karega.

Solution:

if(!product){
return <h1>Product Not Found</h1>
}
2️⃣ Invalid URL

Example:

/abcd

Fix using 404 route.

<Route path="*" element={<NotFound/>}/>
3️⃣ ID String hota hai

useParams() string return karta hai.

"1"

Isliye convert karte hai:

Number(id)
4️⃣ API Slow ho

Use loading state.

Loading...
5️⃣ Direct URL open

Example:

mysite.com/product/2

Ensure route defined ho.

9️⃣ Important Router Hooks
Hook	Use
useParams	URL parameter
useNavigate	redirect
useLocation	current path
useSearchParams	query params

Example:

const navigate = useNavigate()

navigate("/login")
🔟 Folder Structure Example
src

components
 Navbar.jsx

pages
 Home.jsx
 About.jsx
 ProductList.jsx
 ProductDetail.jsx

data
 data.js

App.jsx
main.jsx
✅ Ye notes React Router + Dynamic Routing ko student ko explain karne ke liye perfect structured format me hai.
If you want, I can also make Advanced Routing Notes for your class:
Nested Routing
Protected Routes (Authentication)
Query Parameters
Lazy Loading Routes
Real Project Example (Ecommerce routing)
which MERN students ko industry level samjhane ke liye useful hoga.

