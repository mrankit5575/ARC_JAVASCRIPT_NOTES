JavaScript Array Methods
map() | filter() | reduce()
Important Rule
map, filter, reduce → original array ko change nahi karte

filter() – Condition ke base pe choose karna
🔹 Definition

Jab array me se sirf kuch elements chahiye ho jo condition satisfy kare, tab filter() use hota hai.
  Key Points

Condition true → element select
New array return hota hai
Length same ya kam hoti hai
Searching & filtering me use hota hai

array.filter((item) => {
  return condition;
});

let nums = [1, 2, 3, 4, 5];

let even = nums.filter(n => n % 2 === 0);

console.log(even);
// [2, 4]

🔹 Example 2 – Pass Students
let marks = [33, 80, 45, 90, 20];

let pass = marks.filter(m => m >= 40);

console.log(pass);
// [80, 45, 90]
🔹 Example 3 – Object Filtering (Industry Use)
let products = [
  { name: "Soap", price: 30 },
  { name: "Perfume", price: 500 }
];

let cheapProducts = products.filter(p => p.price < 100);

console.log(cheapProducts);

📦 20 PRODUCTS DATA (JSON TYPE ARRAY)
const products = [
  { id: 1, name: "Mobile", category: "Electronics", price: 12000, rating: 4.5, inStock: true },
  { id: 2, name: "Laptop", category: "Electronics", price: 55000, rating: 4.7, inStock: false },
  { id: 3, name: "Headphones", category: "Electronics", price: 2000, rating: 4.1, inStock: true },
  { id: 4, name: "Smart Watch", category: "Electronics", price: 3000, rating: 3.9, inStock: true },
  { id: 5, name: "TV", category: "Electronics", price: 40000, rating: 4.6, inStock: false },

  { id: 6, name: "T-Shirt", category: "Clothing", price: 500, rating: 4.0, inStock: true },
  { id: 7, name: "Jeans", category: "Clothing", price: 1200, rating: 4.2, inStock: true },
  { id: 8, name: "Jacket", category: "Clothing", price: 2500, rating: 4.5, inStock: false },
  { id: 9, name: "Shirt", category: "Clothing", price: 900, rating: 3.8, inStock: true },
  { id: 10, name: "Sweater", category: "Clothing", price: 1800, rating: 4.1, inStock: true },

  { id: 11, name: "JavaScript Book", category: "Books", price: 700, rating: 4.8, inStock: true },
  { id: 12, name: "Python Book", category: "Books", price: 650, rating: 4.6, inStock: false },
  { id: 13, name: "HTML Book", category: "Books", price: 400, rating: 4.0, inStock: true },
  { id: 14, name: "CSS Book", category: "Books", price: 350, rating: 3.9, inStock: true },
  { id: 15, name: "React Book", category: "Books", price: 800, rating: 4.7, inStock: true },

  { id: 16, name: "Chair", category: "Home", price: 1500, rating: 4.2, inStock: true },
  { id: 17, name: "Table", category: "Home", price: 3000, rating: 4.4, inStock: false },
  { id: 18, name: "Lamp", category: "Home", price: 700, rating: 3.7, inStock: true },
  { id: 19, name: "Curtains", category: "Home", price: 1200, rating: 4.0, inStock: true },
  { id: 20, name: "Sofa", category: "Home", price: 25000, rating: 4.6, inStock: false },
];
✅ STEP 1: Sirf Electronics Products
const electronics = products.filter((item) => {
  return item.category === "Electronics";
});

console.log(electronics);

✅ STEP 2: Sirf Clothing jo In Stock ho
const clothingInStock = products.filter((item) => {
  return item.category === "Clothing" && item.inStock === true;
});

✅ STEP 3: Books jinki price 500 se kam ho
const cheapBooks = products.filter((item) => {
  return item.category === "Books" && item.price < 500;
});

✅ STEP 4: Home category ke products rating 4 se upar
const topHomeProducts = products.filter((item) => {
  return item.category === "Home" && item.rating > 4;
});
✅ STEP 5: Mehange products (price > 10,000)
const expensiveProducts = products.filter((item) => {
  return item.price > 10000;
});

ONE LINE FOR NOTES (Yaad Rakhne Layak)

filter() array ke andar se condition ke basis par data chunta hai aur naya array deta hai

map() – Har item ko change karna
🔹 Definition (Student Friendly)

Jab array ke har element ko modify karke naya array banana ho, tab map() use hota hai
Key Points

New array return karta hai
Array length same rehti hai
Transformation ke liye use hota hai
Mostly UI data formatting me use hota hai

array.map((item, index, array) => {
  return newItem;
});
🔹 Example 1 – Number Transformation
let nums = [1, 2, 3];

let squares = nums.map(n => n * n);

console.log(squares);
// [1, 4, 9]

🔹 Example 2 – String Modify
let names = ["ankit", "rahul"];

let capitalNames = names.map(name => name.toUpperCase());

console.log(capitalNames);
// ["ANKIT", "RAHUL"]
🔹 Example 3 – Object Data (Real World)
let users = [
  { name: "Ankit", age: 20 },
  { name: "Rahul", age: 22 }
];

let userNames = users.map(user => user.name);

console.log(userNames);
// ["Ankit", "Rahul"]
3️⃣ reduce() – Poore array ko ek value banana
Jab array ke saare elements ko combine karke ek final result banana ho, tab reduce() use hota hai.
  Key Points

Output array nahi hota
Single value / object / number
Accumulator concept important
Thoda difficult but powerful
🔹 Syntax
array.reduce((accumulator, current) => {
  return updatedAccumulator;
}, initialValue);

🔹 Example 1 – Sum
let nums = [10, 20, 30];

let sum = nums.reduce((total, n) => total + n, 0);

console.log(sum);
// 60

🔹 Example 2 – Cart Total
let cart = [
  { item: "Pen", price: 10 },
  { item: "Book", price: 50 }
];

let total = cart.reduce((sum, item) => sum + item.price, 0);

console.log(total);
// 60
🔹 Example 3 – Count Items
let fruits = ["apple", "banana", "apple"];

let count = fruits.reduce((obj, fruit) => {
  obj[fruit] = (obj[fruit] || 0) + 1;
  return obj;
}, {});

console.log(count);
