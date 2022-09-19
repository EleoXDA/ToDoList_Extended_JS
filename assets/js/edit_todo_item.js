function editTodoItem() {
  let editTodoItem = document.getElementById('edit_todo');
  todosArray[currentEditIndex] = editTodoItem.value;
  renderList(todosArray);
}