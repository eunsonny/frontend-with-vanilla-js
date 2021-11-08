class Item {
  constructor(value) {
    this.id = model.todos.length > 0 ? model.todos.length + 1 : 1;
    this.content = value;
    this.checked = false;
  }
}

class Model {
  constructor() {
    this.todos = JSON.parse(localStorage.getItem('todos')) || [];
  }

  addItemData(value) {
    let newItem = new Item(value);
    this.todos.push(newItem);

    // this.onTodoListChanged(this.todos)
    this._commit(this.todos)
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
    // this.todos[id].checked = !this.todos[id].checked;
    this.todos = this.todos.map((todo) => 
      todo.id === id ? { id: todo.id, content: todo.content, checked: !todo.checked} : todo,
    )
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
