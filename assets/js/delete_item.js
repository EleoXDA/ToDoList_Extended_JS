function deleteTodoItem(id) {
  // Delete the item from the database
  todosArray.splice(id, 1);
  // Update the UI
  renderList(todosArray);
}