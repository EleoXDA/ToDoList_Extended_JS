function renderList(array){
  let listElement = `<ul class="list-group">`;

  array.forEach((element, index) => {
    listElement += `<li class="list-group-item d-flex justify-content-between">
    <span>${element}</span>
    <div>
    <button class="btn btn-success btn-sm">Edit</button>
    <button class="btn btn-danger btn-sm" onclick="deleteToDoItem('${index}')">Delete</button>
    </div>
    </li>`;
  });
  listElement += `</ul>`;

  let todosContainer = document.getElementById('todo_list');
  todosContainer.innerHTML = listElement;
}
