// create an empty array to store the todos
let todosArray = []

function handleSubmit(){
  // get the value of the input field
  let todos = document.getElementById('todo');
  // check whether item is unique
  if(itemUniqueness(todosArray, todos.value)) {
    // add the value to the array
    todosArray.push(todos.value.trim())
    // Update the UI
  renderList(todosArray)
    // clear the input field
    todos.value = ''
  } else {
    // display error message
    alert('Item already exists');
  }
}