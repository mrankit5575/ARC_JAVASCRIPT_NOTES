  📝 FOR LOOP —  
⭐ For Loop kya hota hai?

Jab hume pehle se pata ho ki kaam kitni baar repeat karna hai, tab hum for loop use karte hain.

For loop computer ko bolta hai:
➡️ “Ye kaam itni baar repeat karo!”

📌 For Loop ka Basic Structure (JavaScript)
for (initialization; condition; increment/decrement) {
    // repeat hone wala code
}

Ye 3 parts kya karte hain?

Initialization – start value set karta hai
(Example: let i = 0;)

Condition – jab tak ye true hai, loop chalega
(Example: i < 5)

Increment/Decrement – har round ke baad value badhta/ghatta hai
(Example: i++)

Example 1: 
"Hello" 5 baar print karna
for (let i = 0; i < 5; i++) {
    console.log("Hello");
}

Example 2: 
1 se 10 tak numbers print karna
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

Example 3:
 Even Numbers print karna (2, 4, 6, 8...)
for (let i = 2; i <= 20; i += 2) {
    console.log(i);
}

Example 4:
 Number reverse print (10 se 1)
 for (let i = 10; i >= 1; i--) {
    console.log(i);
}

For Loop with Array
Array ke andar multiple values hoti hain, unhe loop se read karte hain.

Example 3: Array ke sare elements print karna
let fruits = ["Apple", "Banana", "Mango", "Orange"];

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

Example 4: Array ke numbers ka sum nikalna
let nums = [10, 20, 30, 40];
let sum = 0;

for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
}

console.log("Total =", sum);


For Loop with Object
Object key–value pair hota hai. Use print karne ke 2 ways:

👉 Example 5: for...in loop se object print karna

let student = {
    name: "Aman",
    age: 12,
    class: 7
};

for (let key in student) {
    console.log(key, ":", student[key]);
}

Nested For Loop (Loop ke andar Loop)

Yeh multiple rows/columns, tables, patterns ke liye use hota hai.

👉 Example 6: Nested loop se table pattern print
for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        console.log("i =", i, ", j =", j);
    }
}
👉 Example 7: Multiplication table (2 ka pahada)

for (let i = 1; i <= 10; i++) {
    console.log("2 x", i, "=", 2 * i);
}


5️⃣ BREAK and CONTINUE  
🔴 break

Loop ko turant band kar deta hai.

👉 Example 8: Number mile toh loop ruk jao
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        break; // loop yahin ruk jayega
    }
    console.log(i);
}

🟡 continue

Current iteration skip hoti hai, loop aage continue hota hai.

👉 Example 9: 5 ko skip karna

for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        continue; // 5 skip hoga
    }
    console.log(i);
}



7️⃣ Common Errors
❌ Condition galat → infinite loop ho jayega
❌ Array index limit cross karna
❌ Semicolon loop ke baad lagana:


FOR LOOP SUMMARY (TEXT FORMAT)

For loop use hota hai jab hume pehle se pata ho ki kaam kitni baar repeat karna hai.

Basic Structure:
for (start; condition; update) {
// repeat hone wala code
}

Important Uses:

Counting (1–10)

Array ke elements print karna

Object ke keys/values print karna (for...in)

Nested loops se table / pattern banana

break se loop rukta hai

continue se iteration skip hoti hai

Basic Example:
for (let i = 1; i <= 5; i++) {
console.log(i);
}

Array Example:
let fruits = ["Apple", "Banana", "Mango"];
for (let i = 0; i < fruits.length; i++) {
console.log(fruits[i]);
}

Object Example:
let student = {name: "Aman", age: 12};
for (let key in student) {
console.log(key, student[key]);
}

Nested Loop Example:
for (let i = 1; i <= 3; i++) {
for (let j = 1; j <= 3; j++) {
console.log(i, j);
}
}

Break Example:
for (let i = 1; i <= 10; i++) {
if (i === 5) break;
console.log(i);
}

Continue Example:
for (let i = 1; i <= 10; i++) {
if (i === 5) continue;
console.log(i);
}

Final Note:
For loop = Repeat this work X times (simple, fast, easy).
