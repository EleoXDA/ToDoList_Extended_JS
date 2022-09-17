let todosArray = []

function handleSubmit(){
  let todos = document.getElementById('todo');
  if(itemUniqueness(todosArray, todos.value)) {
    todosArray.push(todos.value.trim())
    renderList(todosArray)
    todos.value = ''
  } else {
    alert('Item already exists');
  }
}