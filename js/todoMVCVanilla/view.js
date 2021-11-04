

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
    
    // const deleteButtons = document.getElementsByClassName('delete_button');
    
    // for (let i = 0; i < deleteButtons.length; i++) {
    //   deleteButtons[i].addEventListener('click', controller.deleteItem);
    // }
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

  addItem(item) {
    let newItem = `<li>
    <input type="checkbox" />
    ${item.content}
    <button id="${item.id}" class="delete_button">삭제</button>
  </li>`;
    toDoList.appendChild(newItem);
  }

  deleteItem() {

  }
}

const view = new View();

export default view;