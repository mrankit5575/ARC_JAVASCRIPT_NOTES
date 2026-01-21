📘 ASYNC / AWAIT – COMPLETE NOTES
1️⃣ async / await kya hota hai? (Base Concept)

👉 async / await Promise ka hi clean syntax hai
👉 Ye async code ko sync jaisa readable bana deta hai
👉 Internally Promise + Event Loop hi use hota hai

⚠️ Important:

async/await JavaScript ko synchronous nahi banata

Sirf likhne aur samajhne me easy banata hai
2️⃣ async function – Rules (Must Know)
Rule 1️⃣: async function hamesha Promise return karta hai
async function test() {
  return "Hello";
}
Actually return hota hai:
Promise.resolve("Hello")
Isiliye ye valid hai:
test().then(res => console.log(res));
Rule 2️⃣: await sirf Promise ke saath use hota hai
const data = await fetchData(); // ✅
❌ Galat:
const x = await 10; // technically wrap ho jata hai, but avoid
Rule 3️⃣: await sirf async function ke andar hota hai
❌ Error:
const data = await fetchData();
✅ Correct:
async function getData() {
  const data = await fetchData();
}
3️⃣ await actually karta kya hai?

👉 await bolta hai:

“Is Promise ka result aane tak, isi function ko pause kar do”

⚠️ Important:

Sirf function pause hota hai

Pure JS thread block nahi hota

4️⃣ Basic Example (Foundation)
Promise way (tumhe aata hai)
function getUser() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve("User data");
    }, 1000);
  });
}

getUser().then(data => console.log(data));
async / await way (same kaam, clean)
async function getUser() {
  return "User data";
}

const data = await getUser();
console.log(data);
✔️ Clean
✔️ Readable
✔️ Same result

5️⃣ Error handling in async / await (VERY IMPORTANT)
try / catch = .then / .catch ka replacement
async function login() {
  try {
    const user = await loginUser();
    console.log("Login success", user);
  } catch (error) {
    console.log("Login failed", error);
  }
}
👉 Interview line:

async/await me error handling try/catch se hoti hai
6️⃣ Real World Example – API Call
Example: Fetch users
async function getUsers() {
  try {
    const res = await fetch("/api/users");
    const users = await res.json();
    console.log(users);
  } catch (err) {
    console.log("API error", err);
  }
}
📌 Yahan:

fetch() → Promise

res.json() → Promise

await → sequential flow
7️⃣ Sequential vs Parallel await (ADVANCED + INTERVIEW)
❌ Sequential (slow)
const user = await getUser();
const orders = await getOrders();
👉 Pehle user complete
👉 Phir orders start
✅ Parallel (fast – recommended)
const [user, orders] = await Promise.all([
  getUser(),
  getOrders()
]);
👉 Dono kaam ek saath start
👉 Performance better

📌 Interview tip:

Parallel await = Promise.all ke saath
8️⃣ Real E-commerce Flow Example (Interview Gold)
async function placeOrderFlow() {
  try {
    const order = await createOrder();
    const payment = await makePayment(order);
    const invoice = await generateInvoice(payment);

    return invoice;
  } catch (err) {
    throw new Error("Order failed");
  }
}
👉 Ye code story jaisa readable hai
👉 Promise chaining ka clean version

FETCH API – COMPLETE NOTES
1️⃣ fetch kya hota hai? (Simple Definition)

👉 fetch ek JavaScript built-in function hai
👉 Ye server / API se data lane ya bhejne ke kaam aata hai
👉 Ye HTTP request karta hai (GET, POST, PUT, DELETE)

Simple words me:

fetch = client (browser / frontend) se server ko request bhejna

2️⃣ fetch ka real use kaha hota hai?
Frontend → Backend API call
React / Next / JS me data load
Login, signup, orders, users, payments

Third-party APIs (Google, Stripe, etc.)
3️⃣ fetch internally kaise kaam karta hai?
fetch ka flow (VERY IMPORTANT):

Browser se request bhejta hai
Server process karta hai
Server response bhejta hai
fetch Promise return karta hai
Response ko JSON me convert karna padta hai

👉 fetch khud data nahi deta, Promise deta hai
4️⃣ Basic fetch syntax
fetch(url, options)
url → API endpoint

options → method, headers, body etc. (optional)
 Example: Users laana
fetch("/api/users")
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.log(err));
Explanation:

fetch() → Promise return karta hai

res → raw response

res.json() → response ko usable JSON banata hai

.then() → success

.catch() → error
 
