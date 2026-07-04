//on console the data is visible 
function alltodos(){
    fetch("https://jsonplaceholder.typicode.com/todos")
    .then((todo) => todo.json())
    .then((val) => {
        console.log(val);
    }).catch((err) => {
        console.log(err);
    })
}

async function todos(){
  let todos = await fetch("https://jsonplaceholder.typicode.com/todos");
  todos = await todos.json();
  console.log(todos)
}
todos()

