function deleteTodoItem(id) {
  todosArray.splice(id, 1);
  renderList(todosArray);
}