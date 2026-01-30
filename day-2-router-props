REACT ROUTER DOM + PROPS PASSING
🔴 PART 1: React Router DOM
✅ STEP 1: React Router DOM kyun chahiye?

Socho ek website:
Home page
About page
Contact page
❓ Problem:
React me page reload nahi hota
toh alag-alag pages kaise banayein?

👉 Solution:
  
React Router DOM
👉 Simple line:
React Router DOM = URL ke hisaab se component dikhana
✅ STEP 2: React Router DOM install karo
Terminal kholo aur likho:
npm install react-router-dom
👉 Matlab:

Ab React app URL samajhne laga
✅ STEP 3: Pages banao (components)
src ke andar ek folder banao → pages
src/
 ┣ pages/
 ┃ ┣ Home.jsx
 ┃ ┣ About.jsx

 Home.jsx
const Home = () => {
  return <h1>Home Page</h1>
}

export default Home
About.jsx
const About = () => {
  return <h1>About Page</h1>
}

export default About
👉 Ye bhi normal components hi hain
✅ STEP 4: Routing setup (App.jsx)
Ab React ko batao:
“Is URL pe kaunsa page dikhana hai”
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
Samjho simple:

/ → Home dikhe

/about → About dikhe

👉 Page reload nahi hota
✅ STEP 5: Navbar banao (navigate karne ke liye)
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </div>
  )
}

export default Navbar

👉 Link = <a> tag ka React version
👉 Reload ❌
✅ STEP 6: Navbar ko App.jsx me lagao
<BrowserRouter>
  <Navbar />
  <Routes>
    ...
  </Routes>
</BrowserRouter>

🎉 Ab:

URL change hoga
Page change hoga
Reload nahi hoga
🟢 PART 2: PROPS PASSING (EASY)
✅ STEP 7: Props kya hoti hai?

Simple language:

Props = data jo ek component se doosre ko bheja jata hai
Real life:
Maa → baccha → tiffin
Tiffin = props 😄
✅ STEP 8: Child component banao
Card.jsx
const Card = (props) => {
  return <h2>My name is {props.name}</h2>
}

export default Card
✅ STEP 9: Props bhejo (Parent se)
<Card name="Ankit" />
<Card name="Rahul" />
👉 Output:

My name is Ankit

My name is Rahul
✅ STEP 10: Easy way (destructuring)
const Card = ({ name }) => {
  return <h2>My name is {name}</h2>
}

👉 Same kaam, code clean
✅ STEP 11: Multiple props bhejo
<Card name="Ankit" age={22} />

  const Card = ({ name, age }) => {
  return <p>{name} is {age} years old</p>
}

🚨 IMPORTANT RULE (Yaad rakho)

❌ Child component props change nahi kar sakta
✔ Props sirf read-only hoti hain

👉 Data flow:
Parent ➝ Child

🔥 STEP 12: Router + Props together
<Route path="/about" element={<About name="Ankit" />} />

const About = ({ name }) => {
  return <h1>About {name}</h1>
}

✅ FINAL SUMMARY (1 line each)

React Router DOM → pages banane ke liye

Route → URL + Component

Link → navigation without reload

Props → data pass karne ke liye

Parent → Child only


