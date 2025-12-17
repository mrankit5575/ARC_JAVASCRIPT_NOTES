 📘 JavaScript DOM Notes  
🔹 1. DOM kya hota hai?

DOM = Document Object Model

Jab browser HTML file ko read karta hai, to usko tree structure me convert karta hai
Is tree ko hi DOM bolte hain
JavaScript DOM ki help se:
HTML change kar sakte ho
CSS change kar sakte ho
Events handle kar sakte ho
👉 Simple words me:
DOM = JavaScript ka bridge HTML & CSS ke saath

🔹 2. document kya hota hai?
document ek object hota hai
Ye poori HTML file ko represent karta hai
DOM ka entry point hota hai
console.log(document);
👉 Isse poora HTML page access hota hai

3. HTML Element ko select kaise kare?
✅ a) getElementById()
Sirf id ke liye use hota hai
<h1 id="title">Hello World</h1>
let heading = document.getElementById("title");
console.log(heading);

b) getElementsByClassName()

Class ke elements select karta hai
HTMLCollection return karta hai
let items = document.getElementsByClassName("item");
Access karne ke liye index use karo:
items[0]

✅ c) getElementsByTagName()
Tag name se select karta hai
let paragraphs = document.getElementsByTagName("p");

✅ d) querySelector()
CSS selector use karta hai
Sirf first element return karta hai
document.querySelector("#title");
document.querySelector(".item");
document.querySelector("p");

✅ e) querySelectorAll()

Sab matching elements return karta hai
NodeList deta hai
document.querySelectorAll(".item")
  ;
Content change kaise kare?
✨ innerText
Sirf text change karta hai
heading.innerText = "Hello JavaScript";

innerHTML

HTML ke saath content change karta hai
heading.innerHTML = "<span>Hello DOM</span>";

CSS change kaise kare? (Style)
  heading.style.color = "red";
heading.style.backgroundColor = "yellow";
heading.style.fontSize = "40px";

⚠️ Note:
CSS property me - nahi hota, camelCase use hota hai


🔹 6. Attributes kya hote hain?

HTML ke extra info ko attributes kehte hain
jaise: id, class, src, href

✔️ Get attribute
element.getAttribute("id");

Set attribute
element.setAttribute("class", "newClass");

Click Event Example
<button id="btn">Click Me</button>

let btn = document.getElementById("btn");

btn.addEventListener("click", function () {
  alert("Button Clicked!");
});

Class add / remove kaise kare?
  ➕ Add class
element.classList.add("active");
➖ Remove class
element.classList.remove("active");
🔁 Toggle class
element.classList.toggle("active");

🔹 9. New Element create kaise kare?
  let newDiv = document.createElement("div");
newDiv.innerText = "Hello New Div";

document.body.appendChild(newDiv);

🔹 10. DOM Tree Basic Terms

Parent
Child
Sibling

11. DOM use kyun karte hain?
Dynamic websites banane ke liye
User interaction ke liye
Content bina page reload ke change karne ke liye

✅ DOM Short Summary
DOM HTML ka JavaScript version hai
document se start hota hai
Elements select → change → style → event




Basic JavaScript DOM Project
👉 Project Name: Button Click Counter
🔹 Project kya karega?

Ek button hoga
Button click karne par number increase hoga
DOM, document, event sab use honge

<!DOCTYPE html>
<html>
<head>
  <title>Basic DOM Project</title>
</head>
<body>

  <h1 id="heading">Counter App</h1>

  <p>Count: <span id="count">0</span></p>

  <button id="btn">Click Me</button>

  <script src="script.js"></script>
</body>
</html>
📁 2. JavaScript File (script.js)
// element select kar rahe hain
let button = document.getElementById("btn");
let countText = document.getElementById("count");

// count variable
let count = 0;

// event lagaya
button.addEventListener("click", function () {
  count = count + 1;
  countText.innerText = count;
});

🧠 Step-by-Step Samjho (Important)
✅ document.getElementById()

HTML element ko select karta hai
✅ addEventListener()

Button click hone par kaam karta hai
button.addEventListener("click", function () {
  // code
});

✅ innerText

Text change karta hai DOM ke through🎯 Is Project me kya seekha?

✔ document
✔ DOM element select karna
✔ Event handling
✔ Text change karna
✔ JavaScript logic

countText.innerText = count;

Color Change Button (JavaScript DOM Project)
🔹 Project kya karega?

Ek button hoga
Button click karne par background color change hoga
DOM + document + event use hoga

1. HTML File (index.html)
<!DOCTYPE html>
<html>
<head>
  <title>Color Change Button</title>
</head>
<body>

  <h1>Color Change Project</h1>

  <button id="btn">Change Color</button>

  <script src="script.js"></script>
</body>
</html>

📁 2. JavaScript File (script.js)
// button select kiya
let button = document.getElementById("btn");

// colors ka array
let colors = ["red", "green", "blue", "yellow", "pink", "purple"];

// click event
button.addEventListener("click", function () {

  // random number generate
  let randomIndex = Math.floor(Math.random() * colors.length);

  // background color change
  document.body.style.backgroundColor = colors[randomIndex];
});
🧠 Code Explanation (Hinglish)
✅ document.getElementById()
Button ko select karta hai
let button = document.getElementById("btn");

✅ Array kya hai?
Multiple values store karne ke liye
let colors = ["red", "green", "blue"];
✅ Math.random()
0 aur 1 ke beech random number deta hai
Math.random()

✅ Math.floor()
Decimal ko whole number banata hai
Math.floor(2.9) // 2

✅ style.backgroundColor
Page ka background color change karta hai
document.body.style.backgroundColor = "red";

🔥 Challenge (Try Yourself)

👉 Button ke text ko bhi change karo:
button.innerText = "Color Changed!";


