 <!DOCTYPE html>
<html>
<head>
  <title>Todo App</title>
  <link rel="stylesheet" href="/todo.css">
</head>
<body>

  <div class="card">
    <h2>📝 Todo App</h2>

    <div class="input-box">
      <input type="text" id="todoInput" placeholder="Write your task...">
      <button onclick="addTodo()">Add</button>
    </div>

    <ul id="todoList"></ul>
  </div>

  <script src="todo.js"></script>
</body>
</html>


script.js //file hai yaha se 

 // 🔹 pehle select
let input = document.getElementById("todoInput");
let list = document.getElementById("todoList");

// 🔹 phir function
function addTodo() {

  if (input.value == "") {
    alert("Write something");
    return;
  }

  let li = document.createElement("li");
  li.innerText = input.value;

  let btn = document.createElement("button");
  btn.innerText = "Delete";

  btn.onclick = function () {
    li.remove();
  };

  li.appendChild(btn);
  list.appendChild(li);

  input.value = "";
}
