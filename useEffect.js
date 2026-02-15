1️⃣ useEffect – Complete Notes
🔹 Simple Definition

useEffect = component render hone ke baad jo extra kaam hota hai usko handle karta hai.
Isko bolte hain side effects.
Side effects kya hote hain?
API call
timer
event listener
document title change
localStorage
🔹 Real Life Example
Socho:
➡ Tum khana banate ho → ye main kaam hai (render)
➡ Gas band karna, plate dhona → extra kaam (side effect)

Ye extra kaam = useEffect
🔹 Basic Syntax
useEffect(() => {
  // side effect work
}, []);

🔹 Dependency Array Samjho
1. []
➡ Sirf 1 baar chalega (mount time)
2. [state]
➡ Jab state change hogi tab chalega
3. No array
➡ Har render par chalega (danger ⚠)
🔹 Cleanup Function (IMPORTANT)
Memory leak rokne ke liye:
useEffect(() => {
  const timer = setInterval(() => {}, 1000);

  return () => clearInterval(timer);
}, []);
🔹 useEffect Kab Use Kare?

Use when:
API fetch karna ho
timer lagana ho
DOM change karna ho
event listener add karna ho
❌ Calculation ke liye useEffect nahi.
  🔹 Fayde
Side effects control
Performance better
Memory leak avoid

Small Projects
🟢 Project 1 – Document Title Counter
Thinking: state change → browser update
Concept:
useEffect(() => {
  document.title = count;
}, [count]);

🟢 Project 2 – API Users List
Thinking: component load → data fetch
useEffect(() => {
  fetch(url).then(...);
}, []);

🟢 Project 3 – Stopwatch Timer
Thinking: continuous background process + cleanup
Concept:
useEffect(() => {
  const id = setInterval(() => setTime(t => t + 1), 1000);
  return () => clearInterval(id);
}, []);

2️⃣ useRef – Complete Notes
🔹 Simple Definition
useRef = value store karta hai bina re-render ke.
  🔹 Real Life Example

Socho:
➡ Tumhare ghar me locker hai
➡ Usme saman rakha → ghar ka design change nahi hua
Locker = useRef
Re-render nahi hota
🔹 Syntax
const ref = useRef(initialValue);
Access:ref.current

🔹 2 Main Use
1. DOM access
inputRef.current.focus();
2. Previous value store
prev.current = count;
🔹 Kab Use Kare?
UseRef use karo jab:
DOM control karna ho
previous value chahiye
re-render avoid karna ho
❌ UI update ke liye useState use hota hai.
🔹 Fayde
Fast performance
No re-render
Direct DOM control

Small Projects
1️⃣ Project – Auto Focus Input (useRef)
🔹 Code
import React, { useEffect, useRef } from "react";

export default function AutoFocusInput() {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h2>Auto Focus Input</h2>
      <input ref={inputRef} placeholder="Type here..." />
    </div>
  );
}
🔹 Ye kya karta hai?

Page load hote hi cursor automatically input box me aa jata hai.
User ko manually click nahi karna padta.
  🔹 Kaunsi problem solve ki?

UX problem solve:

➡ Login / search bar me user ko click karna padta tha
➡ Ab direct typing start ho sakti hai

🔹 Agar useRef na use kare to?
DOM ko directly access nahi kar paoge.
document.querySelector use karna padega → React best practice nahi.
Component-based control khatam ho jata.
  2️⃣ Project – Previous Counter Show
🔹 Code
import React, { useState, useEffect, useRef } from "react";

export default function PreviousCounter() {
  const [count, setCount] = useState(0);
  const prevCountRef = useRef(0);

  useEffect(() => {
    prevCountRef.current = count;
  }, [count]);

  return (
    <div style={{ padding: 20 }}>
      <h2>Previous Counter</h2>
      <p>Current: {count}</p>
      <p>Previous: {prevCountRef.current}</p>

      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}
🔹 Ye kya karta hai?

Screen par dikhega:
Current: 5
Previous: 4
➡ Har click par old value store hoti hai bina extra render ke.
  🔹 Kaunsi problem solve ki?
State history tracking problem solve:
Normal state me sirf current value hoti hai.
Previous value ya comparison mushkil hota hai.
useRef se:
➡ past data store ho gaya
➡ re-render bhi nahi hua
🔹 Agar useRef na ho to?

Extra state banana padega → unnecessary re-render.
Logic complex ho jayega.
Performance slightly slow.
  3️⃣ Project – Click Counter Without Re-render
🔹 Code
import React, { useRef, useState } from "react";

export default function ClickTracker() {
  const clickRef = useRef(0);
  const [show, setShow] = useState(false);

  const handleClick = () => {
    clickRef.current += 1;
    console.log("Total Clicks:", clickRef.current);
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Background Click Tracker</h2>

      <button onClick={handleClick}>Click Me</button>
      <button onClick={() => setShow(true)}>Show Click Count</button>

      {show && <p>Total Clicks: {clickRef.current}</p>}
    </div>
  );
}
🔹 Ye kya karta hai?

Button click count background me store hota rehta hai.

UI tab tak update nahi hoti jab tak Show Click Count na dabao.
🔹 Kaunsi problem solve ki?
Unnecessary re-render problem solve:

Normal useState me:
➡ Har click → component re-render
➡ Performance waste

useRef me:
➡ data store hua bina re-render ke
➡ Fast performance
🔹 Agar useRef na use kare to?
useState use karna padega
Har click par re-render
Large app me lag / slow UI
3
