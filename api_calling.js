📘 React Notes
Topic: useContext API + List Rendering with map() + useEffect API Call
1️⃣ useContext kya hota hai?

Definition:
useContext ek React Hook hai jo global data share karne ke liye use hota hai
👉 bina prop drilling ke.
Prop drilling matlab:
Parent → Child → Grandchild me baar-baar props pass karna.
Kab use karte hain?
Login user data
Theme (dark/light)
Language
API se aaya global data
2️⃣ useContext use karne ke Steps
Step flow:
Context create karo
Provider me value pass karo
useContext se consume karo
Simple Example
1. Context create
import { createContext } from "react";
export const UserContext = createContext();
2. Provider use
import React, { useState } from "react";
import { UserContext } from "./UserContext";
import Child from "./Child";

function App() {
  const [user] = useState("Ankit");

  return (
    <UserContext.Provider value={user}>
      <Child />
    </UserContext.Provider>
  );
}

3. Consume in child
import React, { useContext } from "react";
import { UserContext } from "./UserContext";

function Child() {
  const user = useContext(UserContext);
  return <h2>Hello {user}</h2>;
}

👉 Result: bina props pass kiye data mil gaya.
  3️⃣ map() se List kaise show karte hain?

Definition:
map() array ko loop karke UI elements return karta hai.
Example
const users = ["Ankit", "Rahul", "Priya"];

{
  users.map((name, index) => (
    <p key={index}>{name}</p>
  ));
}

Important Rules
Har item me unique key hona chahiye
map() JSX return karta hai
Dynamic list render karne ke liye use hota hai
4️⃣ useEffect kya hota hai?

Definition:
useEffect ek React Hook hai jo side effects handle karta hai.

Side effects example:
API call
Timer
Event listener
Data fetch
5️⃣ API call ka flow (useEffect)
Component load hota hai
useEffect run hota hai
API call hoti hai
Data useState me store hota hai
map() se list show hoti hai

6️⃣ Full Combined Example
🔥 useContext + useEffect + map()
import React, { useEffect, useState } from "react";

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // API call
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.log(err));
  }, []); // empty dependency = run once

  return (
    <div>
      <h2>User List</h2>

      {users.map((user) => (
        <div key={user.id}>
          <p>{user.name}</p>
          <p>{user.email}</p>
        </div>
      ))}
    </div>

  
  );
}

export default Users;

