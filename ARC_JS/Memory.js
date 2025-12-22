📌 Memory kya hoti hai?

Memory wo jagah hoti hai jahan program chalne ke dauran data store hota hai.

JavaScript me mainly 2 types ki memory hoti hai:

1️⃣ Stack Memory
2️⃣ Heap Memory

1️⃣ Stack Memory (Simple & Fast)
👉 Stack Memory me kya store hota hai?

Primitive data types

Number

String

Boolean

null, undefined

Function call ka data

👉 Stack ka rule

Copy banti hai

Ek variable change karne se doosra change nahi hota

✏️ Example (Stack)
let a = 10;
let b = a;

b = 20;

🧠 Samjho

a = 10

b = 10 (copy bani)

👉 b change hua, a same raha

✔ Kyunki Stack me copy hoti hai

🧒 Bachchon ke liye line

Stack = copy wali memory

2️⃣ Heap Memory (Reference wali)
👉 Heap Memory me kya store hota hai?

Non-Primitive data

Object

Array

Function

👉 Heap ka rule

Copy nahi banti

Sirf address (reference) milta hai

✏️ Example (Heap)
let obj1 = { name: "Ali" };
let obj2 = obj1;

obj2.name = "Ahmed";

🧠 Samjho

Heap me ek hi object

obj1 aur obj2 dono same jagah point kar rahe hain

👉 obj2 change → obj1 bhi change 😮

✔ Kyunki Heap me reference hota hai

🧒 Bachchon ke liye line

Heap = address wali memory

📊 Stack vs Heap (Easy Table)
Stack Memory	Heap Memory
Primitive data	Object / Array
Copy banti hai	Reference milta hai
Fast	Thodi slow
Change affect nahi karta	Change affect karta
📦 Array Example (Heap)
let arr1 = [1, 2];
let arr2 = arr1;

arr2.push(3);


👉 arr1 = [1, 2, 3]
👉 arr2 = [1, 2, 3]

✔ Kyunki array Heap memory me hota hai

🎓 3 Golden Lines (Yaad karane ke liye)

Aap class me ye likhwa sakte ho 👇

1️⃣ Number, String → Stack
2️⃣ Array, Object → Heap
3️⃣ Stack = copy | Heap = reference

🧪 Chhota Practice Question (Class ke liye)
Q1:
let x = 5;
let y = x;
y = 8;


❓ x ki value kya hogi?
✔ Answer: 5

Q2:
let a = { age: 10 };
let b = a;
b.age = 20;


❓ a.age kya hoga?
✔ Answer: 20

 
