 
# ⭐ **1. Function Kya Hota Hai? (Basic Idea)**

Function ek **chota program** ya **machine** hota hai jo koi kaam karta hai.

➡️ Hum function ko **banate** hain
➡️ Fir jab chahein **use** kar sakte hain

---

# ⭐ **2. Function Kaise Banate Hain? (Basic Syntax)**

```js
function greet() {
  console.log("Hello Students");
}
```

### ✔ Function ko call karna:

```js
greet();
```

---

# ⭐ **3. Function with Parameters (Inputs lene wala function)**

```js
function add(a, b) {
  console.log(a + b);
}

add(5, 10); // Output: 15
```

---

# ⭐ **4. Function with Return (Output wapas dene wala function)**

```js
function multiply(x, y) {
  return x * y;
}

let ans = multiply(4, 5);
console.log(ans); // 20
```

---

# ⭐ **5. Function ke andar Function (Nested Function)**

```js
function outer() {
  console.log("Outer function chal raha hai");

  function inner() {
    console.log("Inner function chal raha hai");
  }

  inner(); // inner function call
}

outer();
```

---

# ⭐ **6. Array ke saath Function (Functions using arrays)**

### ✔ Array ko function me bhejna

```js
function printArray(arr) {
  arr.forEach(function(item) {
    console.log(item);
  });
}

printArray(["Apple", "Banana", "Mango"]);
```

---

### ✔ Function array ke andar

```js
let tasks = [
  function() { console.log("Task 1"); },
  function() { console.log("Task 2"); }
];

tasks[0]();  
tasks[1]();
```

---

# ⭐ **7. Object ke saath Functions**

### ✔ Object ke andar function

```js
let student = {
  name: "Amit",
  age: 12,
  greet: function() {
    console.log("Hello, मेरा नाम " + this.name + " है");
  }
};

student.greet();
```

---

# ⭐ **8. Function jo Object return kare**

```js
function createStudent(name, age) {
  return {
    name: name,
    age: age
  };
}

let s1 = createStudent("Rahul", 14);
console.log(s1);
```

---

# ⭐ **9. Advanced: Callback Function (Function ko argument ke रूप me dena)**

```js
function process(callback) {
  console.log("Process start");
  callback();
}

process(function() {
  console.log("Callback function chal gaya");
});
```

---

# ⭐ **10. Arrow Functions (Short form functions)**

```js
let add = (a, b) => a + b;
console.log(add(10, 20));
```

---
 
