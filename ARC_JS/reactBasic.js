REACT BASIC NOTES
1️⃣ React Kya Hai?

React ek JavaScript library hai jo User Interface (UI) banane ke kaam aati hai.

Simple language me:
React se hum website/app ka front part banate hain
(jaise button, text, image, form).

Example apps:
Instagram
YouTube
Facebook
2️⃣ React Project Structure (Basic)

React project me kuch important files hoti hain:
main.jsx → App yahin se start hota hai
App.jsx → Screen pe kya dikhana hai
index.css → Styling ke liye

Flow:
Browser → main.jsx → App.jsx
3️⃣ JSX Kya Hota Hai?
JSX = JavaScript ke andar HTML likhna
function App() {
  return <h1>Hello React</h1>;
}
JSX Rules:
Ek hi parent element hona chahiye
class ki jagah className
Tag properly close hona chahiye

❌ Galat:
<h1>Hello</h1>
<p>World</p>
✅ Sahi:
<div>
  <h1>Hello</h1>
  <p>World</p>
</div>
4️⃣ Component Kya Hota Hai?
  Component = UI ka chhota hissa
Real example:
LEGO blocks 🧱 (chhote parts jod ke badi cheez)

Component Example:
function Header() {
  return <h1>This is Header</h1>;
}
Component Use:
function App() {
  return <Header />;
}
5️⃣ Component Reuse

Ek component ko baar-baar use kar sakte hain.
  function Box() {
  return <div>Box</div>;
}

<Box />
<Box />
<Box />
  6️⃣ HTML + Tailwind in React

React me normal HTML likhte hain aur Tailwind classes lagate hain.
  function Button() {
  return (
    <button className="bg-blue-500 text-white px-4 py-2">
      Click Me
    </button>
  );
}
7️⃣ JavaScript inside JSX {}
JSX me {} ke andar JavaScript likhte hain.
  const name = "Ankit";

<h1>Hello {name}</h1>
<h2>{10 + 20}</h2>
8️⃣ Props Kya Hote Hain?

Props = Component ko data bhejna
Props Pass Karna:
<Card name="Rahul" />
  Props Receive Karna:
function Card(props) {
  return <h1>{props.name}</h1>;
}
Meaning:
name data App se Card component me gaya.
  9️⃣ Props ke sath UI Example
function Student(props) {
  return (
    <div>
      <h2>Name: {props.name}</h2>
      <p>Age: {props.age}</p>
    </div>
  );
}

<Student name="Amit" age={15} />
  🔟 JavaScript Condition in JSX

Condition ke base pe UI dikhana.
  const age = 16;

{age > 18 ? <h1>Adult</h1> : <h1>Kid</h1>}
1️⃣1️⃣ Mini Project – Profile Card
function Profile(props) {
  return (
    <div className="border p-4 rounded">
      <h1>{props.name}</h1>
      <p>Age: {props.age}</p>
    </div>
  );
}

<Profile name="Rohit" age={14} />
  
