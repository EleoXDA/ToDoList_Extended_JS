let showEditContainerCase = 0

let currentEditIndex = 0;
let currenttodoItem = '';

function showEditContainer(index) {
  let editContainer = document.getElementById('edit_container');
  if (showEditContainerCase === 0) {
    editContainer.style.display = 'inline';
    showEditContainerCase = 1;
  }
  else {
    editContainer.style.display = 'none';
    showEditContainerCase = 0;
  }
  currentEditIndex = index;
  todosArray[index] = document.getElementById('todo').value;
}