JavaScript Promise – Notes
1. JavaScript me Problem Kya Hai?

JavaScript by default synchronous hoti hai, yani code line by line execute hota hai.
Lekin kuch kaam time lete hain, jaise:

Server se data lana
API call
Timer (setTimeout)
File read

Is situation ko handle karne ke liye Promise use hota hai.
  2. Promise Kya Hota Hai?
Definition:

Promise ek JavaScript object hai jo future me hone wale kaam ka result batata hai.
Result ya to success (resolve) hota hai ya failure (reject).

Simple words me:
Abhi result nahi mila
Baad me milega
Ya to pass hoga ya fail
3. Promise ke States

Promise ke 3 states hote hain:

Pending
→ Kaam chal raha hai

Fulfilled (Resolved)
→ Kaam successfully complete ho gaya

Rejected
→ Kaam fail ho gaya

Example:
Pending → Exam diya
Fulfilled → Pass
Rejected → Fail

4. Promise ka Syntax
let promise = new Promise((resolve, reject) => {
  // asynchronous code
});
Explanation:

resolve() → success ko show karta hai
reject() → error ko show karta hai
Promise constructor ke andar function hota hai
5. Simple Promise Example (Resolve Case)
let promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Data mil gaya");
  }, 2000);
});
Explanation:

:-  setTimeOut kyu kiya yaha per  :-                                            
Real applications mein kuch kaam time lete hain, jaise:
🌐 Server se data lana
📁 File read karna
🔗 API call karna
💳 Payment process
Agar JavaScript in sab ke liye wait kare:
App freeze ho jayega
  User experience kharab ho jayega

2 second baad result aayega
Promise fulfilled ho jayega
6. Promise ko Use Karna – .then()
promise.then((result) => {
  console.log(result);
});
Explanation:

.then() tab execute hota hai
jab promise resolve hota hai
7. Reject Case (Error Example)
let promise = new Promise((resolve, reject) => {
  let internet = false;

  if (internet) {
    resolve("Internet connected");
  } else {
    reject("Internet nahi hai");
  }
});
8. Error Handle Karna – .catch()
promise
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
Explanation:

.then() → success ke liye

.catch() → error ke liye
9. Promise Flow Diagram
Promise
   |
   |--- resolve ---> then()
   |
   |--- reject ----> catch()

  12. Practice Example
let promise = new Promise((resolve, reject) => {
  let marks = 45;

  if (marks >= 35) {
    resolve("Student Pass");
  } else {
    reject("Student Fail");
  }
});

promise
  .then(result => console.log(result))
  .catch(error => console.log(error));

JavaScript Code Example
let foodOrder = new Promise((resolve, reject) => {
  let restaurantOpen = true;

  setTimeout(() => {
    if (restaurantOpen) {
      resolve("Food delivered successfully");
    } else {
      reject("Order cancelled");
    }
  }, 3000);
});

foodOrder
  .then(result => console.log(result))
  .catch(error => console.log(error));
Explain to students:

Order diya → Pending

3 second baad result

resolve = food delivered

reject = order cancelled
