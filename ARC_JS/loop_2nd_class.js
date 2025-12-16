most of the time you dealing with 

// ["", "", ""]
// [{}, {}, {}]


2️⃣ WHILE LOOP
👉 Kya hota hai?

while loop tab use hota hai jab kitni baar loop chalega ye clear na ho
Bas ek condition true honi chahiye

🔹 Syntax:
while (condition) {
  // code
}

let i = 1;

while (i <= 5) {
  console.log(i);
  i++;
}

Output:
1 2 3 4 5

WHILE LOOP WITH ARRAY  '
let fruits = ["Apple", "Banana", "Mango"];
let i = 0;

while (i < fruits.length) {
  console.log(fruits[i]);
  i++;
}

Output: Apple
Banana
Mango

Numbers array ka sum nikalna
let numbers = [10, 20, 30, 40];
let i = 0;
let sum = 0;

while (i < numbers.length) {
  sum = sum + numbers[i];
  i++;
}

console.log("Sum =", sum);
Reverse order me array print karna
let arr = [5, 10, 15, 20];
let i = arr.length - 1;

while (i >= 0) {
  console.log(arr[i]);
  i--;
}


Important Point:

❗ Agar condition false ho → loop ek baar bhi nahi chalega

🔹 Real-Life Example:
 
👉 Shopping list ke items ek-ek karke dekhna
👉 Jab tak list khatam na ho
👉 Jab tak petrol hai gaadi chalti rahe

🔹 Kab use kare?

✔ Jab end pata na ho
✔ Condition-based loops

🔹 3️⃣ DO-WHILE LOOP
👉 Kya hota hai?

do-while loop kam se kam ek baar zaroor chalega, chahe condition false ho

🔹 Syntax:
do {
  // code
} while (condition);

Example:
let i = 6;

do {
  console.log(i);
  i++;
} while (i <= 5);

Output:
6

🔹 Kyun?

👉 Pehle code chala, baad me condition check hui

🔹 Real-Life Example:

👉 ATM me ek baar PIN enter karna hi padega

🔹 Kab use kare?

✔ At least one execution chahiye

🔹 4️⃣ FOR-IN LOOP
👉 Kya hota hai?

for-in loop ka use OBJECT ke keys (properties) ke liye hota hai

🔹 Syntax:
for (initialization; condition; increment/decrement) {
   // code
}

Example:
for (let i = 1; i <= 5; i++) {
  console.log(i);
}

🔹 5️⃣ FOR-OF LOOP
👉 Kya hota hai?

for-of loop array ya string ki values directly deta hai

🔹 Syntax:
for (let value of iterable) {
  // code
}

Example (Array):
let colors = ["Red", "Green", "Blue"];

for (let color of colors) {
  console.log(color);
}

Example (String):
let name = "RAM";

for (let ch of name) {
  console.log(ch);
}

🔹 Real-Life Example:

👉 Fruits ki tokri me har fruit dekhna

🔹 Kab use kare?

✔ Arrays
✔ Strings
✔ Clean & simple loops

 ✨ SHORT TRICK (Yaad Rakhne ke Liye)

 for → count pata
while → condition pata
do-while → ek baar pakka
for-in → object
for-of → values

 🔹 Map kya hota hai?

Map JavaScript ka built-in object hai jo data ko key–value pair me store karta hai.

👉 Har key unique hoti hai
👉 Same key dobara add karne par value overwrite ho jaati hai
🔹 Map create kaise karte hain?
const map = new Map();
Values add karna (set)
map.set('IN', 'India');
map.set('USA', 'United States');
map.set('FR', 'France');

❗ Duplicate key allowed nahi:
map.set('IN', 'India'); // overwrite karega

🔹 Value get karna (get)
Key exist karti hai ya nahi (has)
map.has('USA'); // true

    Key delete karna (delete)
    map.delete('FR');
Total entries (size)
map.size;

Sab clear karna (clear)
map.clear();

Loop lagana Map pe
for-of loop
for (let [key, value] of map) {
  console.log(key, value);
}

forEach
map.forEach((value, key) => {
  console.log(key, value);
});

Map kyun use karte hain?

✔ Fast data access
✔ Large data ke liye better
✔ Order maintain karta hai
✔ Keys any type ki ho sakti hain (number, object, array)

Object                     | Map
--------------------------- | ---------------------------
Simple key–value data       | Advanced key–value data
Keys mostly string          | Keys can be any type
Order guarantee nahi        | Insertion order maintain
Size direct nahi milta      | map.size se size milta
Small data ke liye better   | Large & dynamic data ke liye
Direct iterable nahi        | Direct iterable (for-of)

🧠 One-Line Yaad Rakhne ka Trick
Object → simple data
Map    → powerful data

