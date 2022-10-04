function editTodoItem() {
  // Get the todo item's id
  let editTodoItem = document.getElementById('edit_todo');
  // Get the todo item's text
  todosArray[currentEditIndex] = editTodoItem.value;
  // Update the UI
  renderList(todosArray);
}