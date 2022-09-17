let todosArray = []

function handleSubmit(){
  let todos = document.getElementById('todo')
  todosArray.push(todos.value)
  console.log(todosArray)
}