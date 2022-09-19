function updateTodoItem() {
  let updatetodoElement = document.getElementById('update_todo');
  todosArray[currentEditIndex] = updatetodoElement.value;
  renderList(todosArray);
}