🔥 splice() kya karta hai?
splice() method array ke andar se:
Element remove kar sakta hai
Element add kar sakta hai
Element replace kar sakta hai
Aur sabse important baat:
✔ splice() original array ko change karta hai

example 
let arr = [10, 20, 30, 40, 50];

arr.splice(1, 2); // index 1 se 2 elements remove
console.log(arr);

2️⃣ Add elements using splice()
let arr = [10, 20, 30];

arr.splice(1, 0, 15, 18); 
// index 1 par kuch delete nahi, sirf add kar diya

console.log(arr);
//out put 
[10, 15, 18, 20, 30]

Replace elements using splice()
let arr = [100, 200, 300];

arr.splice(1, 1, 250); // index 1 par 1 item delete, aur 250 add

console.log(arr);

Remove all elements from a given index
let arr = [1, 2, 3, 4, 5];
arr.splice(2); 
console.log(arr);
//out put 
[1, 2]

📌 Array sort() Method – 
✔ sort() method array ke elements ko sort (arrange) karta hai.

Default sorting alphabetical (A → Z) hoti hai — chahe value string ho ya number.
array.sort();
Default sorting (Alphabetical sorting)
let fruits = ["banana", "apple", "mango"];
fruits.sort();
console.log(fruits);

//out put 
["apple", "banana", "mango"]


Numbers me problem (alphabetically sort karta hai)
let numbers = [10, 5, 2];
numbers.sort();
console.log(numbers);

Output: [10, 2, 5] ❌

🧠 Kyun?

JavaScript numbers ko string ki tarah compare karta hai

Isliye "10" alphabetically "2" se pehle aata hai.

2️⃣ Proper Sort with Compare Function
✔ Ascending Order (Small → Big)
let numbers = [10, 5, 2, 100];
numbers.sort((a, b) => a - b);
console.log(numbers);

//output
[2, 5, 10, 100]

Descending Order (Big → Small)
let numbers = [10, 5, 2, 100];
numbers.sort((a, b) => b - a);
console.log(numbers);

Output:[100, 10, 5, 2]


Sorting Strings Descending:
let names = ["Zara", "Aman", "Riya"];
names.sort().reverse();
console.log(names);

Output:["Zara", "Riya", "Aman"]

📌 Array concat() Method – Notes
✔ concat() array ko merge  ke liye use hota hai।

example 
let a = [1, 2];
let b = [3, 4];

let result = a.concat(b);

console.log(result);

output //[1, 2, 3, 4]

Multiple Arrays Add karna

let a = [10, 20];
let b = [30, 40];
let c = [50, 60];

let result = a.concat(b, c);

console.log(result);

//out put //[10, 20, 30, 40, 50, 60]


Array + Value add karna
let numbers = [1, 2, 3];

let result = numbers.concat(4, 5);

console.log(result);

//out put [1, 2, 3, 4, 5]

Array + Nested Array
let arr = [1, 2];
let nested = [[3, 4]];

let result = arr.concat(nested);

console.log(result);
Output:[1, 2, [3, 4]]
