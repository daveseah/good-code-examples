/**
 * @class Model
 *
 * Manages the data of the application.
 */
class Model {
  constructor() {
    this.todos = JSON.parse(localStorage.getItem("todos")) || [];
  }

  bindEvents(controller) {
    this.onTodoListChanged = controller.onTodoListChanged;
  }

  addTodo(todo) {
    this.todos = [...this.todos, todo];
    this.update();

    this.onTodoListChanged(this.todos);
  }

  editTodo(id, updatedText) {
    this.todos = this.todos.map(todo =>
      todo.id === id
        ? { id: todo.id, text: updatedText, complete: todo.complete }
        : todo
    );
    this.update();

    this.onTodoListChanged(this.todos);
  }

  deleteTodo(id) {
    this.todos = this.todos.filter(todo => todo.id !== id);
    this.update();

    this.onTodoListChanged(this.todos);
  }

  toggleTodo(id) {
    this.todos = this.todos.map(todo =>
      todo.id === id
        ? { id: todo.id, text: todo.text, complete: !todo.complete }
        : todo
    );
    this.update();

    this.onTodoListChanged(this.todos);
  }

  update() {
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }
}

/**
 * @class View
 *
 * Visual representation of the model.
 */
class View {
  constructor() {
    this.app = this.getElement("#root");
    this.form = this.createElement("form");
    this.input = this.createElement("input");
    this.input.type = "text";
    this.input.placeholder = "Add todo";
    this.input.name = "todo";
    this.submitButton = this.createElement("button");
    this.submitButton.textContent = "Submit";
    this.form.append(this.input, this.submitButton);
    this.title = this.createElement("h1");
    this.title.textContent = "Todos";
    this.todoList = this.createElement("ul", "todo-list");
    this.app.append(this.title, this.form, this.todoList);
  }

  get todoText() {
    return this.input.value;
  }

  resetInput() {
    this.input.value = "";
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

  displayTodos(todos) {
    // Delete all nodes
    while (this.todoList.firstChild) {
      this.todoList.removeChild(this.todoList.firstChild);
    }

    // Show default message
    if (todos.length === 0) {
      const p = this.createElement("p");
      p.textContent = "Nothing to do! Add a task?";
      this.todoList.append(p);
    } else {
      // Create nodes
      todos.forEach(todo => {
        const li = this.createElement("li");
        li.id = todo.id;

        const checkbox = this.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = todo.complete;

        const span = this.createElement("span");
        span.contentEditable = true;
        span.classList.add("editable");

        if (todo.complete) {
          const strike = this.createElement("s");
          strike.textContent = todo.text;
          span.append(strike);
        } else {
          span.textContent = todo.text;
        }

        const deleteButton = this.createElement("button", "delete");
        deleteButton.textContent = "Delete";
        li.append(checkbox, span, deleteButton);

        // Append nodes
        this.todoList.append(li);
      });
    }

    console.log(todos);
  }

  bindEvents(controller) {
    this.form.addEventListener("submit", controller.handleAddTodo);
    this.todoList.addEventListener("click", controller.handleDeleteTodo);
    this.todoList.addEventListener("input", controller.handleEditTodo);
    this.todoList.addEventListener(
      "focusout",
      controller.handleEditTodoComplete
    );
    this.todoList.addEventListener("change", controller.handleToggle);
  }
}

/**
 * @class Controller
 *
 * Links the user and the system.
 */
class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    this.model.bindEvents(this);
    this.view.bindEvents(this);

    this.temporaryEditValue;

    // Display initial todos
    this.onTodoListChanged(this.model.todos);
  }

  onTodoListChanged = todos => {
    this.view.displayTodos(todos);
  };

  handleAddTodo = event => {
    event.preventDefault();

    if (this.view.todoText) {
      const todo = {
        id:
          this.model.todos.length > 0
            ? this.model.todos[this.model.todos.length - 1].id + 1
            : 1,
        text: this.view.todoText,
        complete: false
      };

      this.model.addTodo(todo);
      this.view.resetInput();
    }
  };

  handleEditTodo = event => {
    if (event.target.className === "editable") {
      this.temporaryEditValue = event.target.innerText;
    }
  };

  handleEditTodoComplete = event => {
    if (this.temporaryEditValue) {
      const id = parseInt(event.target.parentElement.id);

      this.model.editTodo(id, this.temporaryEditValue);
      this.temporaryEditValue = "";
    }
  };

  handleDeleteTodo = event => {
    if (event.target.className === "delete") {
      const id = parseInt(event.target.parentElement.id);

      this.model.deleteTodo(id);
    }
  };

  handleToggle = event => {
    if (event.target.type === "checkbox") {
      const id = parseInt(event.target.parentElement.id);

      this.model.toggleTodo(id);
    }
  };
}

const app = new Controller(new Model(), new View());
