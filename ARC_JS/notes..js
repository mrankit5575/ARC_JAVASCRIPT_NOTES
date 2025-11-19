// | Value | Type         | Truthy/Falsy |
// | ----- | ------------ | ------------ |
// | `"0"` | String       | ✔ Truthy     |
// | `0`   | Number       | ❌ Falsy      |
// | `""`  | Empty string | ❌ Falsy      |
// | `" "` | Space string | ✔ Truthy     |

// | Concept              | Hoisting                                                                                  | TDZ (Temporal Dead Zone)                                                                                        |
// | -------------------- | ----------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
// | Meaning              | JavaScript variables aur functions ko code run hone se pehle memory me upar le jaati hai. | Wo time jisme variable memory me hota to hai, lekin tab tak use nahi kar sakte jab tak value assign na ho jaye. |
// | Applies to           | `var`, `let`, `const`, functions                                                          | Sirf `let` aur `const`                                                                                          |
// | Access before Value? | `var` → allowed (but gives `undefined`)                                                   | ❌ Not allowed (error aata hai)                                                                                  |
// | Error?               | No error with `var`                                                                       | `ReferenceError` aata hai                                                                                       |

// Short Trick Remember Karne ke Liye:

// 👉 Primitive = chhoti cheezein (single value)
// 👉 Non-Primitive = bade containers (multiple values)

// Short Trick to Remember:

// 👉 == checks only value.
// 👉 === checks value + type.

// NaN ka matlab Not a Number hota hai,
// lekin JavaScript fir bhi ise number type mein count karta hai kyunki yeh basically ek invalid number result hai.


// check number is odd or even 
// let number = 7;

// if (number % 2 === 0) {
//   console.log(number + " is Even");
// } else {
//   console.log(number + " is Odd");
// }
