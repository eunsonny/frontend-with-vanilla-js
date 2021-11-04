const makeItemElement = (item) => {
  return `<li>
  <input type="checkbox" />
  ${item.content}
  <button>삭제</button>
</li>`;
};

class View {
  constructor() {
    this.app = this.getElement("#root");

    this.title = this.createElement("h1");
    this.title.textContent = "Todos";

    this.form = this.createElement("form");

    this.input = this.createElement("input");
    this.input.type = "text";
    this.input.placeholder = "add Todo";
    this.input.name = "todo";

    this.submitButton = this.createElement("button");
    this.submitButton.textContent = "추가";

    this.todoList = this.createElement("ul", "to_do_list");

    this.form.append(this.input, this.submitButton);

    this.app.append(this.title, this.form, this.todoList);
  }

  createElement(tag, className) {
    const element = document.createElement(tag);
    if (className) element.className.add(className);

    return element;
  }

  getElement(selector) {
    const element = document.querySelector(selector);

    return element;
  }

  get _todoText() {
    return this.input.value;
  }

  _resetInput() {
    this.input.value;
  }

  renderTodos(todos) {
    while (this.todoList.firstChild) {
      this.todoList.removeChild(this.todoList.firstChild);
    }

    if (todos.length === 0) {
      const p = this.createElement("p");
      p.textContent = "Nothing to do! Add a task?";
      this.todoList.append(p);
    } else {
      todos.foreach((todo) => {
        const li = this.createElement("li");
        li.id = todo.id;

        const checkbox = this.createElement('input');
        checkbox.type = "checkbox";
        checkbox.checked = todo.checked;

        const span = this.createElement('span');
        span.contentEditable = true;
        span.className.add('editable')

        if (todo.checked) {
          const strike = this.createElement('s');
          strike.textContent = todo.text;
          span.append(strike)
        } else {
          span.textContent = todo.content;
        }

        const deleteButton = this.createElement('button', 'delete');
        deleteButton.textContent = '삭제';
        li.append(checkbox, span, deleteButton)

        this.todoList.append(li)
      });
    }
  }
}

const view = new View();

export default view;
