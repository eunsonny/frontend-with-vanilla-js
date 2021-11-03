const renderList = (list) => {
  const toDoList = document.getElementById("toDoList");
  toDoList.innerHTML = makeItemElement({ content: '테스트' })
}

const makeItemElement = (item) => {
  return `<li>
  <input type="checkbox" />
  ${item.content}
  <button>삭제</button>
</li>`
}

class View {
  constructor() {
    this.toDoList = document.getElementById("toDoList");
  }

  renderList(list) {
    // const toDoList = document.getElementById("toDoList");
    const listItems = list.map((item) => makeItemElement(item));
    
    const listComponent = listItems.reduce((prev, curr) => prev + curr, '');
    toDoList.innerHTML = listComponent;
  }

  makeItemElement(item) {
    return `<li>
  <input type="checkbox" />
  ${item.content}
  <button id="${item.id}" class="delete_button">삭제</button>
</li>`
  }

  getInputValue() {
    const input = document.querySelector('input');
    if (input.value === '') return;
    return input.value;
  }

  deleteItem() {
    
  }
}

const view = new View();

export default view;