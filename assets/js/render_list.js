function renderList(array){
  let listElement = `<ul class="list-group">`;

  array.forEach(element => {
    listElement += `<li class="list-group-item">${element}</li>`;
  });
  listElement += `</ul>`;

  let todosContainer = document.getElementById('todos');
  todosContainer.innerHTML = listElement;

  console.log(listElement);
}
