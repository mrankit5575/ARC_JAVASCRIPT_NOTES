Text Changer – Simple DOM Project
<!DOCTYPE html>
<html>
<head>
  <title>Text Changer</title>
</head>
<body>

  <h2 id="text">Hello Students</h2>

  <button id="btn">Change Text</button>

  <script>
    let text = document.getElementById("text");
    let button = document.getElementById("btn");

    button.addEventListener("click", function () {
      text.innerText = "Welcome to JavaScript DOM!";
    });
  </script>

</body>
</html>


Welcome Name App (Very Simple)
<!DOCTYPE html>
<html>
<head>
  <title>Welcome App</title>
</head>
<body>

  <h2>Enter Your Name</h2>

  <input type="text" id="name" placeholder="Type your name">

  <br><br>

  <button id="btn">Submit</button>

  <h3 id="output"></h3>

  <script>
    let input = document.getElementById("name");
    let button = document.getElementById("btn");
    let output = document.getElementById("output");

    button.addEventListener("click", function () {
      output.innerText = "Welcome " + input.value;
    });
  </script>

</body>
</html>




🧩 Project: Product Card with Add & Remove
 <!DOCTYPE html>
<html>
<head>
  <title>Product Card</title>
  <style>
    body {
      background-color: black;
      color: white;
      font-family: Arial;
    }

    .card {
      width: 220px;
      border: 2px solid white;
      padding: 10px;
      text-align: center;
    }

    button {
      padding: 6px 10px;
      margin: 5px;
      cursor: pointer;
    }

    .add {
      background-color: green;
      color: white;
    }

    .remove {
      background-color: red;
      color: white;
    }
  </style>
</head>
<body>

  <h1>🛒 My Shop</h1>
  <h2>Cart Items: <span id="cartCount">0</span></h2>

  <div class="card">
    <h3>T-Shirt</h3>
    <p>Price: ₹499</p>

    <button id="addBtn" class="add">Add</button>
    <button id="removeBtn" class="remove">Remove</button>
  </div>

  <script src="script.js"></script>
</body>
</html>

 let addBtn = document.getElementById("addBtn");
let removeBtn = document.getElementById("removeBtn");
let cartCount = document.getElementById("cartCount");

let count = 0;
 
addBtn.addEventListener("click"  , function(){
    count++ ; 
    cartCount.innerHTML = count ; 
})
removeBtn.addEventListener("click" , function(){
    if (count > 0) {
        count--;
        cartCount.innerHTML = count
        
    }
})

Show / Hide Password Project 

 <!DOCTYPE html>
<html>
<head>
  <title>Show Hide Password</title>
</head>
<body>

  <h2>Password Example</h2>

  <input type="password" id="pass">

  <button id="btn">Show</button>

  <script src="script.js"></script>
</body>
</html>

script.js file 
 let password = document.getElementById("pass");
let button = document.getElementById("btn");

button.addEventListener('click' , function(){
    if (password.type === 'password') {
        password.type = 'text' ; 
        button.innerHTML = 'Hide'
        
    } else {
        password.type = 'password'
        button.innerHTML = 'show'
    }

});

Logic kya laga isme  ; 


AGAR password ka type "password" hai
    TO password ko "text" bana do
    AUR button ka text "Hide" kar do
WARNA
    password ko "password" bana do
    AUR button ka text "Show" kar do

 Song & Image Changer (Beginner Friendly Project)
<!DOCTYPE html>
<html>
<head>
  <title>Song Changer</title>
</head>
<body style="text-align:center;">

  <h2 id="songName">Song 1</h2>

  <img id="img" src="song1.jpg" width="200">

  <br><br>

  <audio id="audio" src="song1.mp3" controls></audio>

  <br><br>

  <button id="btn">Change Song</button>

  <script src="script.js"></script>
</body>
</html>

script .js file 
let btn = document.getElementById("btn");
let audio = document.getElementById("audio");
let img = document.getElementById("img");
let songName = document.getElementById("songName");

let count = 0;

btn.addEventListener("click", function () {

  if (count === 0) {
    audio.src = "song2.mp3";
    img.src = "song2.jpg";
    songName.innerText = "Song 2";
    count = 1;
  } else {
    audio.src = "song1.mp3";
    img.src = "song1.jpg";
    songName.innerText = "Song 1";
    count = 0;
  }

  audio.play();
});



