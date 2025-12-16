 forEach() Method –  
🔹 forEach() kya hota hai?

forEach() array ka method hota hai

Ye array ke har element par ek function chalata hai

Matlab: ek-ek value pe kaam karta hai
array.forEach(function(value, index) {
  // code
});

Simple Example
let nums = [1, 2, 3];

nums.forEach(num => {
  console.log(num);
});

forEach() ka use kab hota hai?

Jab array ke sab elements par kaam karna ho

Jab simple aur clean loop chahiye

Jab return value nahi chahiye
mportant Points

Sirf array ke saath kaam karta hai

New array return nahi karta

break aur continue use nahi kar sakte

Mostly display, calculation, update ke liye use hota hai

Real Life Example

Shopping cart ka total nikalna

Students list print karna

API data process karna
Normal Function                | forEach() Function
-------------------------------|-------------------------------
General function hota hai      | Array ka method hota hai
Khud call karna padta hai      | Automatically call hota hai
Har jagah use hota hai         | Sirf array ke liye use hota hai
Value return kar sakta hai     | Return value ka use nahi hota
Logic banane ke liye use       | Loop/iteration ke liye use
 

 MORE Example
 let fruits = ["Apple", "Banana", "Mango"];

fruits.forEach((fruit, index) => {
  console.log(index + " : " + fruit);
});

Example 3: Sum nikalna
let marks = [40, 50, 60];
let total = 0;

marks.forEach(m => {
  total = total + m;
});

console.log("Total =", total);

Array values update karna
let prices = [100, 200, 300];

prices.forEach((price, index) => {
  prices[index] = price + 50;
});

console.log(prices);

: Names ko uppercase banana
let names = ["ram", "shyam", "mohan"];

names.forEach((name, index) => {
  names[index] = name.toUpperCase();
});

console.log(names);

Example 8: Real-life shopping cart
let cart = [
  { item: "Book", price: 200 },
  { item: "Pen", price: 50 }
];

let total = 0;

cart.forEach(c => {
  total += c.price;
});

console.log("Total Bill =", total);

