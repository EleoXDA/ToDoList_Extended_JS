let showEditContainerCase = 0

let currentEditIndex = 0;
let currentTodoItem = '';
// function to show the edit container
function showEditContainer(index) {
  // get the edit container
  let editContainer = document.getElementById('edit_container');
  if (showEditContainerCase === 0) {
    editContainer.style.display = 'inline';
    showEditContainerCase = 1;
  }
  else {
    editContainer.style.display = 'none';
    showEditContainerCase = 0;
  }
  currentEditIndex = index
  currentTodoItem = todosArray[index];
  editContainer.value = todosArray[index];
}