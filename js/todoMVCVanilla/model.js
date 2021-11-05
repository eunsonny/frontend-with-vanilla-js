class Item {
  constructor(value) {
    this.id = model.list.length > 0 ? model.list.length + 1 : 1;
    this.content = value;
    this.checked = false;
  }
}

class Model {
  constructor() {
    this.todos = JSON.parse(localStorage.getItem('todos')) || [];
    // [
      // { id: 1, content: '세수하기', checked: false },
      // { id: 2, content: '이 닦기', checked: false },
    // ]
  }

  addItemData(value) {
    let newItem = new Item(value);
    this.todos.push(newItem);
  }

  editItemData(id, updatedText) {
    this.todos = this.todos.map((item) =>
      item.id === id ? { id: item.id, content: updatedText, checked: item.checked } : item
    )
  }

  deleteItemData(id) {
    this.todos = this.todos.filter((item) => item.id !== id);

    // this.onTodoListChanged(this.todos)
    this._commit(this.todos)
  }

  toggleItem(id) {
    this.todos[id].checked = !this.todos[id].checked
    // this.list = this.list.map((item) =>
    //   item.id === id ? { id: item.id, content: item.content, checked: !item.checked } : item
    // )
  }

  bindTodoListChanged(callback) {
    this.onTodoListChanged = callback
  }

  _commit(todos) {
    this.onTodoListChanged(todos);
    localStorage.setItem('todos', JSON.stringify(todos))
  }
}

const model = new Model();

export default model;
