function deleteToDoItem(id) {
  todosArray.splice(id, 1);
  renderList(todosArray);
}