PROMISE vs ASYNC / AWAIT

🔹 PART 1: PROMISE EXAMPLES (then / catch)
const result = new Promise((resolve, reject) => {
    let marks = 60;

    if (marks >= 35) {
        resolve("Student Pass");
    } else {
        reject("Student Fail");
    }
});

result
  .then(res => console.log(res))
  .catch(err => console.log(err));

Promise with setTimeout (Delay)
const ticketBooking = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Ticket Booked Successfully");
    }, 2000);
});

ticketBooking.then(data => console.log(data));
✅ Example 3: Internet Check

const checkInternet = new Promise((resolve, reject) => {
    let internet = true;

    if (internet) {
        resolve("Internet Connected");
    } else {
        reject("No Internet");
    }
});

checkInternet
  .then(msg => console.log(msg))
  .catch(err => console.log(err));

✅ Example 4: Promise Chaining
const orderFood = new Promise(resolve => {
    resolve("Order Placed");
});

orderFood
  .then(res => {
      console.log(res);
      return "Food Cooking";
  })
  .then(res => {
      console.log(res);
      return "Food Delivered";
  })
  .then(res => console.log(res));
✅ Example 5: Reject in Promise
const payment = new Promise((resolve, reject) => {
    let balance = 200;

    if (balance >= 500) {
        resolve("Payment Successful");
    } else {
        reject("Insufficient Balance");
    }
});

payment.catch(err => console.log(err));

ASYNC / AWAIT
1️⃣ Async / Await KYA HAI?

Async / Await JavaScript ka modern tareeqa hai Promise ko use karne ka.

👉 Jab hume kisi kaam ka result future me mile
👉 Aur hum chahte hain code simple aur readable ho
👉 Tab hum async / await use karte hain.

📌 Async / Await = Promise ka easy version
2️⃣ Async Keyword KYA KARTA HAI?

async function hamesha Promise return karta hai

Chahe hum normal value return kare

Example:
async function greet() {
    return "Good Morning";
}

greet().then(res => console.log(res));
📌 Explain to students:

“Async function jo bhi return karega, woh Promise ban jaata hai.”
3️⃣ Await Keyword KYA KARTA HAI?

await ka matlab: ruk jao

Jab tak Promise ka result na aa jaye

⚠️ await sirf async function ke andar hi kaam karta hai
4️⃣ Promise bina Await (Problem)  
console.log("Start");

const data = fetchData();

console.log(data);
console.log("End");
❌ Output:
  Start
Promise { <pending> }
End
👉 Problem: Data abhi aaya hi nahi
function fetchData() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Server Data");
        }, 2000);
    });
}

async function getData() {
    console.log("Start");

    const data = await fetchData();
    console.log(data);

    console.log("End");
}

getData();function placeOrder() {
    return Promise.resolve("Order Placed");
}

function cookFood() {
    return Promise.resolve("Food Cooked");
}

function deliverFood() {
    return Promise.resolve("Food Delivered");
}

async function foodProcess() {
    console.log(await placeOrder());
    console.log(await cookFood());
    console.log(await deliverFood());
}

foodProcess();

Explain:

“Ek kaam complete hone ke baad hi next kaam hota hai.”
7️⃣ Error Handling: try / catch
Without Error Handling (Wrong Way)
await getResult(); // error aayega

With try / catch (Correct Way)
function examResult() {
    return new Promise((resolve, reject) => {
        let marks = 30;

        if (marks >= 35) {
            resolve("Pass");
        } else {
            reject("Fail");
        }
    });
}

async function checkResult() {
    try {
        const result = await examResult();
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

checkResult();

Teaching Line:

“try me success, catch me error.”
function step1() {
    return Promise.resolve("Step 1 Done");
}

function step2() {
    return Promise.resolve("Step 2 Done");
}

function step3() {
    return Promise.resolve("Step 3 Done");
}

async function process() {
    console.log(await step1());
    console.log(await step2());
    console.log(await step3());
}

process();

9️⃣ Async / Await with API-Style Function
function getUser() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("User Data Loaded");
        }, 1500);
    });
}

async function loadUser() {
    const user = await getUser();
    console.log(user);
}

loadUser();


✅ Output:
Start
Server Data
End

Teaching Line:
Difference Between Promise and Async / Await (Points)
🔹 1️⃣ Syntax

Promise: .then() aur .catch() use hota hai

Async / Await: async, await, try / catch use hota hai

🔹 2️⃣ Readability

Promise: Code thoda complex aur lengthy hota hai

Async / Await: Code simple aur readable hota hai
🔹 3️⃣ Error Handling

Promise: .catch() se error handle hota hai

Async / Await: try / catch se error handle hota hai

🔹 4️⃣ Code Structure

Promise: Chaining ki wajah se nesting ho sakti hai

Async / Await: Code synchronous jaisa dikhta hai

🔹 5️⃣ Learning Level

Promise: Beginners ke liye thoda hard

Async / Await: Beginners ke liye easy
🔹 6️⃣ Execution Flow

Promise: Asynchronous flow samajhna mushkil

Async / Await: Step-by-step flow clear hota hai

🔹 7️⃣ Usage Style

Promise: Old / traditional style

Async / Await: Modern JavaScript style

🔹 8️⃣ Return Value

Promise: Direct Promise return karta hai

Async / Await: Async function automatically Promise return karta hai
🔹 9️⃣ Debugging

Promise: Debug karna thoda tough

Async / Await: Debug karna easy

🔹 🔟 Internally

Promise: Base concept

Async / Await: Promise ke upar bana hua

🧠 Class Line (One Sentence)

“Async / Await Promise ka hi modern aur easy version hai.”
“Await Promise ko complete hone tak wait karwata hai.”
6️⃣ Real Life Example: Online Order

