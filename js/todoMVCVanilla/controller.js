import model from './model.js';
import view from './view.js';

class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    this.onTodoListChanged(this.model.todos);

    this.view.bindAddTodo(this.handleAddTodo);
    this.view.bindDeleteTodo(this.handleDeleteTodo);
    this.view.bindToggleTodo(this.handleToggleTodo);

    this.model.bindTodoListChanged(this.onTodoListChanged)
  }

  onTodoListChanged = (todos) => {
    this.view.renderTodos(todos);
  }

  handleAddTodo = (todoText) => {
    this.model.addItemData(todoText);
  }

  handleEditTodo = (id, todoText) => {
    this.model.editItemData(id, todoText);
  }

  handleDeleteTodo = (id) => {
    this.model.deleteItemData(id);
  }

  handleToggleTodo = (id) => {
    this.model.toggleItem(id);
  }
}

const controller = new Controller(model, view);

export default controller;