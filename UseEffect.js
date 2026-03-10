






JavaScript to React API Flow (Hinglish Notes)
1️⃣ Promise (JavaScript)
Promise kya hota hai

Promise ek object hota hai jo future me data return karega ya error dega।

Simple words:
👉 “Abhi data nahi mila, thodi der baad milega”

Promise ke 3 states

Pending → request chal rahi hai

Resolved (Fulfilled) → data mil gaya

Rejected → error aa gaya

Example
let promise = new Promise((resolve, reject) => {
  let success = true;

  if(success){
    resolve("Data mil gaya");
  } else {
    reject("Error aa gaya");
  }
});

promise
.then((res)=>console.log(res))
.catch((err)=>console.log(err));

Real Example (API)

Jab hum API call karte hai to server ko time lagta hai, isliye Promise use hota hai।
2️⃣ Async / Await

Async/Await Promise ko simple syntax me likhne ka tarika hai।

Example
async function getData(){
  let response = await fetch("https://jsonplaceholder.typicode.com/posts");
  let data = await response.json();
  console.log(data);
}

getData();

Samjho

async → function ko asynchronous banata hai

await → jab tak data na aaye wait karta hai

3️⃣ Fetch API

Fetch ek built-in JavaScript function hai jo API se data lane ke liye use hota hai।

Example
fetch("https://jsonplaceholder.typicode.com/posts")
.then((res)=>res.json())
.then((data)=>console.log(data));
Async Await version
async function fetchData(){
  let res = await fetch("https://jsonplaceholder.typicode.com/posts");
  let data = await res.json();
  console.log(data);
}

4️⃣ Axios

Axios ek HTTP library hai jo API request karne ke liye use hoti hai।

Axios install
npm install axios
Example
import axios from "axios";

async function getData(){
  let res = await axios.get("https://jsonplaceholder.typicode.com/posts");
  console.log(res.data);
}


| Fetch         | Axios       |
| ------------- | ----------- |
| Built-in      | Library     |
| Thoda complex | Easy syntax |
| Manual JSON   | Direct data |


  5️⃣ React useState

useState React me data store karne ke liye hook hai।

Example
import { useState } from "react";

function App(){

  const [data,setData] = useState([]);

  return (
    <div>
      {data}
    </div>
  );
}

Samjho

data → state variable

setData → state update function

6️⃣ React useEffect

useEffect React me side effects ke liye use hota hai।

Example:

API call

DOM change

timer

Syntax

useEffect(()=>{
  // code
},[])

7️⃣ React me API Call (Complete Flow)

Ab Promise + Async + Fetch + useState + useEffect sab connect hoga।

Example
import { useState,useEffect } from "react";

function App(){

  const [posts,setPosts] = useState([]);

  useEffect(()=>{

    async function getData(){
      let res = await fetch("https://jsonplaceholder.typicode.com/posts");
      let data = await res.json();
      setPosts(data);
    }

    getData();

  },[]);

  return (
    <div>
      {posts.map((post)=>(
        <p key={post.id}>{post.title}</p>
      ))}
    </div>
  );
}

export default App;
8️⃣ Axios Version (React)
import { useState,useEffect } from "react";
import axios from "axios";

function App(){

  const [posts,setPosts] = useState([]);

  useEffect(()=>{

    async function getData(){
      let res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setPosts(res.data);
    }

    getData();

  },[]);

  return (
    <div>
      {posts.map((post)=>(
        <p key={post.id}>{post.title}</p>
      ))}
    </div>
  );
}


