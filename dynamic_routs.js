React Dynamic Routing with Slug (Student Notes)
1. Dynamic Routing kya hota hai

Dynamic routing ka matlab hai:

Ek hi route template use karke different pages load karna.

Example URLs:

/product/iphone-15
/product/samsung-s24
/product/macbook-air

Yaha:
/product/:slug
  :slug = dynamic parameter

Har product ke liye alag slug.
2. Slug kya hota hai

Slug ek URL-friendly text identifier hota hai.

Example:

Product Name	Slug
iPhone 15	iphone-15
Samsung S24	samsung-s24
Macbook Air	macbook-air

URL example:
/product/iphone-15
  Slug ke benefits:

SEO friendly

readable URL

database search easy
  3. Required Library

Dynamic routing ke liye install kare:
npm install react-router-dom
  4. Basic Project Structure
  src
 ├ pages
 │   ├ Product.jsx
 │   └ ProductDetails.jsx
 ├ App.jsx
 └ main.jsx
  5. Product Page (Product.jsx)

Ye page products list show karta hai aur har product ke liye dynamic link banata hai.

Code
  import { Link } from "react-router-dom";

function Product() {

  const products = [
    { id: 1, name: "iPhone 15", slug: "iphone-15" },
    { id: 2, name: "Samsung S24", slug: "samsung-s24" },
    { id: 3, name: "Macbook Air", slug: "macbook-air" }
  ];

  return (
    <div>

      <h1>Products</h1>

      {products.map((item) => (
        <div key={item.id}>

          <h3>{item.name}</h3>

          <Link to={`/product/${item.slug}`}>
            View Details
          </Link>

        </div>
      ))}

    </div>
  );
}

export default Product;
6. Important Concepts
6.1 Product Data
  const products = [
 { id:1, name:"iPhone 15", slug:"iphone-15" }
]
  Ye ek array of objects hai jisme product information store hoti hai.
  6.2 map() method
  products.map()
  Ye method array ke har item ke liye UI create karta hai.

Example:
3 products → 3 UI blocks
  6.3 Link Component
<Link to={`/product/${item.slug}`}>

Ye dynamic URL generate karta hai.

Example output:
/product/iphone-15
/product/samsung-s24
/product/macbook-air
  7. Product Details Page

Ye page URL se slug read karta hai aur correct product show karta hai.

Code
  import { useParams } from "react-router-dom";

function ProductDetails() {

  const { slug } = useParams();

  const products = [
    { name: "iPhone 15", slug: "iphone-15", price: "$999" },
    { name: "Samsung S24", slug: "samsung-s24", price: "$899" },
    { name: "Macbook Air", slug: "macbook-air", price: "$1199" }
  ];

  const product = products.find(p => p.slug === slug);

  return (
    <div>

      <h1>{product.name}</h1>
      <p>Price: {product.price}</p>

    </div>
  );
}

export default ProductDetails;
8. useParams Hook
  const { slug } = useParams();

Example:

URL

/product/iphone-15

Result
  slug = iphone-15
  9. Product Search Logic
products.find(p => p.slug === slug)

Ye array me se matching product find karta hai.

Example:
slug = samsung-s24
  Output:

Samsung S24 product object/
  10. Route Setup (App.jsx)
  import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from "./pages/Product";
import ProductDetails from "./pages/ProductDetails";

function App() {
  return (

    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Product />} />

        <Route path="/product/:slug" element={<ProductDetails />} />

      </Routes>

    </BrowserRouter>

  );
}

export default App;
11. Route Explanation
/product/:slug

/product = main path

:slug = dynamic parameter

Examples:
/product/iphone-15
/product/macbook-air
/product/samsung-s24
  12. Complete Flow
  
    
