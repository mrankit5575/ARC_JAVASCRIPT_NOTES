1️⃣ Virtual DOM kya hota hai?

Virtual DOM = Real DOM ki ek lightweight copy (memory me).

Matlab:
Browser ka original HTML structure → Real DOM
React ka memory me bana hua fast copy → Virtual DOM
React direct Real DOM ko change nahi karta,
pehle Virtual DOM me change karta hai.
2️⃣ Problem kya thi Real DOM me?
Normal JavaScript me:
Agar ek chhota sa text change hua
→ pura DOM re-render ho sakta hai
→ slow performance

Example:
Counter app me sirf number change ho raha hai,
lekin browser ko pura UI check karna padta hai.
👉 Ye slow hai.
3️⃣ React ka solution → Virtual DOM
React kya karta hai:
Step-by-step working
Initial UI render
React Virtual DOM banata hai
Phir Real DOM me show karta hai
State change hoti hai
React naya Virtual DOM banata hai
Diffing process
Old Virtual DOM vs New Virtual DOM compare karta hai
Minimal update
Sirf jo part change hua hai wahi Real DOM me update hota hai
👉 Isliye React fast hai.
  karo ⚡ → fast


📘 1️⃣ Props kya hote hain? (React)

Props = Parent component se child component ko data bhejne ka tareeka.
8Simple line yaad kar lo:
Props are read-only data passed from parent to child component.
Matlab:
Parent → data bhejta hai
Child → sirf use karta hai
Child props ko change nahi kar sakta

🔹 Basic Example
Parent component
function App() {
  return <User name="Ankit" age={22} />;
}

Child component
function User(props) {
  return (
    <h1>
    
      My name is {props.name} and age is {props.age}
    </h1>
  );
}

👉 Yahan name aur age = props.
  📘 2️⃣ Props kyu use karte hain?
  
✔ Reusable components
Ek hi component ko alag-alag data ke saath use kar sakte ho.
✔ Dynamic UI
Data change → UI change.
✔ Clean architecture
Parent control karta hai data flow.
📘 3️⃣ Props ke important rules
Rule 1 → Props read-only hote hain
Child component props change nahi kar sakta.
  ❌ Galat:
props.name = "Rahul";
Rule 2 → One-way data flow
Data upar se neeche jata hai.
    Parent → Child → Grandchild
Reverse direct nahi ja sakta
(wo callback function se hota hai — next topic).
  📘 4️⃣ Props destructuring (important)
function User({ name, age }) {
  return <h1>{name} - {age}</h1>;
}
👉 Interview me ye style zyada use hota hai.
  📘 5️⃣ Prop Drilling kya hota hai?
🔴 Problem samjho
Structure:
App → Parent → Child → GrandChild
Data chahiye GrandChild ko,
lekin bhejna pad raha hai:

App → Parent
Parent → Child
Child → GrandChild
👉 Isko bolte hain:
Prop Drilling = unnecessary multiple levels par props pass karna
  🔴 Isme problem kya hai?

Code messy ho jata hai
Har component me extra props
Maintenance difficult
Large app me confusion
📘 6️⃣ Prop Drilling ka solution

✅ Solution = useContext Hook

useContext allow karta hai:
Data ko direct kisi bhi component me access karna
bina beech ke components me props pass kiye.
  Matlab:
Global data → direct GrandChild me use
👉 Isliye useContext ko bolte hain prop drilling ka solution.
  📘 7️⃣ Short interview answers (yaad kar lo)
Q1: What are props in React?

Answer:
Props are read-only data passed from parent to child components to make UI dynamic and reusable.
  Q2: What is prop drilling?
  Answer:
Prop drilling is the process of passing props through multiple nested components just to reach a deeply nested child component.
  Q3: How to solve prop drilling?

Answer:
By using the useContext hook or state management libraries like Redux.
