📘 JavaScript: Synchronous vs Asynchronous (Easy Notes)
1️⃣ Synchronous kya hota hai?

Code line by line execute hota hai
Jab tak ek kaam complete nahi hota, next kaam start nahi hota
Blocking behavior hota hai
Example (Synchronous)
console.log("A");
console.log("B");
console.log("C");

Output
A
B
C

2️⃣ Asynchronous kya hota hai?
Code wait nahi karta
Time-taking kaam (API, timer, DB, file) background mein chala jata hai
Baaki code execute hota rehta hai
Non-blocking behavior
Example (Asynchronous)
setTimeout(() => {
  console.log("A");
}, 1000);

console.log("B");
Output
B
A
3️⃣ async function kya hota hai?
async function hamesha Promise return karta hai
Lekin async likhne se code automatically asynchronous nahi hota

Example
async function hello() {
  console.log("Hello");
}

hello();
➡️ Output turant aata hai
➡️ Behavior synchronous jaisa hota hai
➡️ Return type: Promise
4️⃣ Important Rule (Exam / Interview)

Async function hone se code asynchronous nahi hota.
Code tab asynchronous hota hai jab execution kisi async operation ke wait mein event loop ko control de.
  5️⃣ await kya karta hai?
await Promise ke complete hone ka wait karta hai
Tab tak function ka execution pause hota hai
Control event loop ko mil jata hai
6️⃣ Case 1: async + NO await → Synchronous behavior
async function test() {
  console.log("A");
}

console.log("Start");
test();
console.log("End");
Output
Start
A
End
✔️ Synchronous execution
❌ Real async nahi
  7️⃣ Case 2: await but real async nahi
async function test() {
  await 10;
  console.log("A");
}

console.log("Start");
test();
console.log("End");
Output
Start
End
A
📝 Reason:
await 10 === await Promise.resolve(10)
➡️ Microtask queue use hoti hai
➡️ Thoda async behavior
8️⃣ Case 3: Real asynchronous operation (BEST example)
async function test() {
  await new Promise(resolve => setTimeout(resolve, 1000));
  console.log("A");
}

console.log("Start");
test();
console.log("End");
Output
Start
End
A
✔️ Truly asynchronous
✔️ Event loop involved
✔️ Non-blocking
9️⃣ await return kyun galat hai?

await → expression ke liye hota hai
return → statement hota hai
Dono ko saath likhna JavaScript grammar ke khilaf hai

❌ Invalid:
await return value;
✔️ Valid:
await something;
return value;


1. Fetch kya hota hai?
  fetch ek Web API hai jo JavaScript ko server se data lene ya bhejne deta hai using HTTP.
  👉 Simple words:

fetch = browser ka function jo API call karta hai

Example:
Website → Server → Data
Frontend → Backend → JSON

2. Fetch ka real-life example
Socho:
Aap restaurant mein order dete ho
Kitchen se khana aata hai

👉 Waise hi:
Browser request bhejta hai
Server response deta hai
Ye kaam fetch karta hai.
  3. Fetch ka syntax (Basic)
fetch(URL)
Example URL (free public API):
https://jsonplaceholder.typicode.com/users
4. Fetch kya return karta hai? (MOST IMPORTANT)
const result = fetch("https://jsonplaceholder.typicode.com/users");
console.log(result);
Output:
Promise { <pending> }
  📌 Conclusion for students:

Fetch hamesha Promise return karta hai
5. Fetch ka complete flow
fetch(URL)
   ↓
Promise resolve
   ↓
Response object
   ↓
response.json()
   ↓
Actual data (JS object)
👉 Fetch 2 baar Promise deta hai:

fetch()

response.json()
6. Fetch without async/await (sirf samjhane ke liye)
  fetch("https://jsonplaceholder.typicode.com/users")
  .then(response => response.json())
  .then(data => {
    console.log(data);
  });
  📌 Problem:

Multiple .then()
Beginners ke liye confusing
7. Fetch with async / await (BEST & RECOMMENDED)
async function getUsers() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  console.log(data);
}

getUsers();
Line by line explanation (Class mein bolne ke liye):

fetch() → server ko request

await → Promise ka wait
response → server ka jawab
response.json() → data read
await → final data
8. async / await ka fetch se kya relation hai?
Concept	Meaning
fetch	API call karta hai
Promise	async result deta hai
async	function ko Promise-returning banata hai
await	Promise ka result nikalta hai

👉 async/await fetch ka replacement nahi hai
👉 Sirf fetch ko easy bana deta hai
9. Important Interview + Class Point

❌ Galat soch:

fetch error throw karega 404 pe

✅ Sahi baat:

fetch sirf network error pe fail hota hai

404 / 500 pe manually check karna hota hai
10. Proper Error Handling Example
async function getUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    if (!response.ok) {
      throw new Error("HTTP Error " + response.status);
    }

    const data = await response.json();
    console.log(data);

  } catch (error) {
    console.log("Error:", error.message);
  }
}

  
