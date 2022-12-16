import { Component } from 'react';
import './todo-add-form.css';

class ToDoAddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addToDoText: '',
      impotant: false,
    };
  }
  render() {
    const { onAddItem } = this.props;
    const addNewItem = {
      toDoText: this.state.addToDoText,
      id: Math.floor(Math.random() * 1000),
      impotant: this.state.impotant,
      selected: false,
    };
    return (
      <form class="form-inline todo-add-form">
        <div>
        <label class="my-1 mr-2" for="todoText">Новая задача</label>
          <input
            class="form-control"
            id='todoText'
            type="text"
            placeholder="Введите задачу..."
            value={this.state.addToDoText}
            onChange={(e) => {
              this.setState({ addToDoText: e.target.value });
            }}
          />
        </div>
        <div class="custom-control custom-checkbox my-1 mr-sm-2">
          <input
            class="form-check-input"
            id="impotant"
            type="checkbox"
            checked={this.state.impotant}
            onChange={(e) => {
              this.setState({ impotant: e.target.checked });
              console.dir(e.target);
            }}
          />
          <label class="form-check-label" for="impotant">
            Важное
          </label>
        </div>
        <div>
          <button
            type="submit"
            class="btn btn-primary my-1"
            onClick={(e) => {
              e.preventDefault();
              onAddItem(addNewItem);
              this.setState({ addToDoText: '', impotant: false });
            }}
          >
            Добавить
          </button>
        </div>
      </form>
    );
  }
}
export default ToDoAddForm;
