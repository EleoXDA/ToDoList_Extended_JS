let todosArray = []

function handleSubmit(){
  let todos = document.getElementById('todo')
  todosArray.push(todos.value)
  renderList(todosArray)
}