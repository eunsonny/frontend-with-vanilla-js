class View {
  constructor() {
    this.app = this.getElement("#root");

    this.title = this.createElement("h1");
    this.title.textContent = "TODO LIST";

    this.form = this.createElement("form");

    this.input = this.createElement("input");
    this.input.type = "text";
    this.input.placeholder = "Add new todo";
    this.input.name = "todo";
    this.input.id = "add_input"

    this.submitButton = this.createElement("button");
    this.submitButton.textContent = "Add";
    this.submitButton.className = 'submit_button'

    this.todoList = this.createElement("ul", "to_do_list");

    this.form.append(this.input, this.submitButton);

    this.app.append(this.title, this.form, this.todoList);

    this._temporaryTodoText
    this._initLocalListeners()
  }

  _initLocalListeners() {
    this.todoList.addEventListener('input', event => {
      if (event.target.className === 'editable') {
        this._temporaryTodoText = event.target.innerText
      }
    })
  }

  bindEditTodo(handler) {
    this.todoList.addEventListener('focusout', event => {
      if (this._temporaryTodoText) {
        const id = parseInt(event.target.parentElement.id)

        handler(id, this._temporaryTodoText)
        this._temporaryTodoText = '';
      }
    })
  }

  createElement(tag, className) {
    const element = document.createElement(tag);
    if (className) element.classList.add(className);

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
    this.input.value = '';
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
      todos.forEach((todo) => {
        const li = this.createElement("li");
        li.id = todo.id;
        
        const checkbox = this.createElement('input');
        checkbox.type = "checkbox";
        checkbox.id = `item${todo.id}`;
        checkbox.checked = todo.checked;
        
        const label = this.createElement('label');
        label.htmlFor = `item${todo.id}`;

        const span = this.createElement('span');
        span.className = 'todo_content'
        span.contentEditable = true;
        span.classList.add('editable')

        if (todo.checked) {
          const strike = this.createElement('s');
          strike.textContent = todo.content;
          span.append(strike)
        } else {
          span.textContent = todo.content;
        }

        const deleteButton = this.createElement('button', 'delete_button');
        deleteButton.textContent = '삭제';
        deleteButton.classList.add('visible')
        li.append(checkbox, label, span, deleteButton)

        this.todoList.append(li)
      });
    }
  }

  bindAddTodo = (handler) => {
    this.form.addEventListener('submit', event => {
      event.preventDefault();

      if (this._todoText) {
        handler(this._todoText);
        this._resetInput()
      }
    })
  }

  bindDeleteTodo = (handler) => {
    this.todoList.addEventListener('click', event => {
      if (event.target.classList[0] === 'delete_button') {
        const id = parseInt(event.target.parentElement.id)
        handler(id)
      }
    })
  }

  bindToggleTodo = (handler) => {
    this.todoList.addEventListener('change', event => {
      if (event.target.type === 'checkbox') {
        const id = parseInt(event.target.parentElement.id)

        handler(id)
      }
    })
  }

}

const view = new View();

export default view;
