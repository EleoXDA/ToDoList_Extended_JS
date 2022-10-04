function renderList(array){
  // get the list element
  let listElement = `<ul class="list-group">`;
  // loop through the array
  array.forEach((element, index) => {
    // create a list item for each element
    listElement += `<li class="list-group-item d-flex justify-content-between">
    <span>${element}</span>
    <div>
    <button class="btn btn-warning btn-sm" onclick="showEditContainer('${index}')">Edit</button>
    <button class="btn btn-danger btn-sm" onclick="deleteTodoItem('${index}')">Delete</button>
    </div>
    </li>`;
  });
  // close the list element
  listElement += `</ul>`;
  // display the list element
  let todosContainer = document.getElementById('todo_list');
  // display the content
  todosContainer.innerHTML = listElement;
}
