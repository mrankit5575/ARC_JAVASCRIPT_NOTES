⭐ 1. Anonymous Functions (Naam ke bina function)

let hello = function() {
  console.log("Hello!");
};
hello();
✔ Ye mostly callbacks me use hota hai.

  ⭐ 2. Default Parameters
Agar user value na de toh hum default value de sakte hain.
  function greet(name = "Student") {
  console.log("Hello " + name);
}

greet();          // Hello Student
greet("Amit");    // Hello Amit

3. Rest Parameters (...args)
Jab hume nahi pata kitni values aayengi.
  function sum(...nums) {
  let total = 0;
  nums.forEach(n => total += n);
  console.log(total);
}

sum(5, 10, 20, 30); // 65

Higher Order Functions (Function jo function par kaam kare)
function higher(func) {
  console.log("Higher function");
  func();
}

higher(() => console.log("Lower function"));
✔ Yeh modern JS ka important concept hai.


Immediately Invoked Function (IIFE)
Function jo turant execute ho jaye.
  (function() {
  console.log("IIFE chal gaya");
})();

Function Hoisting
Function ko declare karne se pehle bhi call kar sakte hain.
  test();

function test() {
  console.log("Hoisting Example");
}
