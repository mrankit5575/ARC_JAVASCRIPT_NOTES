🔹 useState Hook kya hai?

useState = React ka ek Hook hai
jo functional component ke andar data ko store aur update karne ke liye use hota hai.

Simple line:

👉 useState component ko yaad rakhne ki power deta hai.
  🔹 Hook kya hota hai? (basic samajh)

Hook = special function
jo React ke extra features use karne deta hai
functional component ke andar.

Jaise:

state use karna
lifecycle handle karna
side effects chalana
In sab ke liye Hooks use hote hain.
  
  🔹 useState ka syntax
const [state, setState] = useState(initialValue);

Isko tod ke samjho:
state → current value
setState → value change karne wala function
initialValue → starting value


🔹 useState ka simple example
import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>
    </div>
  );
}

Yaha kya ho raha hai?

Starting count = 0
Button click → setCount(count + 1)
React component ko dubara render karta hai
Screen par new number show hota hai
👉 Isko bolte hain state update → re-render

🔹 useState ke Benefits (sabse important)
1️⃣ Data yaad rakhta hai

Component band ho ke dobara render ho
fir bhi value lose nahi hoti.

2️⃣ UI automatic update hoti hai

Jab state change hoti hai →
React screen ko khud update karta hai.

👉 Manual DOM change nahi karna padta

🔹 Props kya hote hain?

Props = data bhejne ka tarika
👉 Parent component → Child component ko data bhejta hai.

Simple line:

Props = parcel jo ek component dusre ko deta hai.
  Basic flow samjho

Parent component data bhejta hai
Child component data receive karta hai
Child sirf use karta hai, change nahi kar sakta
🔹 Simple Example (Step-by-Step)
import React from "react";
import Child from "./Child";

function Parent() {
  return (
    <div>
      <h1>Parent Component</h1>

      <Child name="Ankit" age={20} />
    </div>
  );
}

export default Parent;

Yaha kya ho raha hai?

Parent 2 props bhej raha hai:
name = "Ankit"
age = 20
2️⃣ Child Component
import React from "react";

function Child(props) {
  return (
    <div>
      <h2>Hello {props.name}</h2>
      <p>Age: {props.age}</p>
    </div>
  );
}

export default Child;
Output screen par:
Hello Ankit
Age: 20
👉 Matlab data successfully parent se child tak pahunch gaya.
  🔹 Easy real-life example for kids
🎁 Props = gift box

Mummy ne gift diya → Parent

Tumne gift liya → Child

Tum gift use kar sakte ho,
lekin andar ki cheez change nahi kar sakte.

👉 Same React me hota hai.
  🔹 Important rules of Props

Props read-only hote hain

Child component direct change nahi kar sakta

Data flow upar se niche hota hai
(Parent → Child)
isko bolte hain one-way data flow.
  One-line revision

Props = ek component se dusre component me data bhejne ka simple tarika.
