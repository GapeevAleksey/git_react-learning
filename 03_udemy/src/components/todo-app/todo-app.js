import { Component } from 'react';
import './todo-app.css';
import ToDoList from './todo-list/todo-list';
import ToDoAddForm from './todo-add-form/todo-add-form';
import ToDoFilter from './todo-filter/todo-filter';

class ToDoApp extends Component {
  constructor() {
    super();
    this.state = {
      data: [
        { toDoText: 'Купить батон', id: 1, impotant: true, selected: true },
        { toDoText: 'Купить сыр', id: 2, impotant: false, selected: false },
        { toDoText: 'Купить арбуз', id: 3, impotant: false, selected: false },
      ],
      filter: false,
    };
  }
  onToggleProp = (id, selected) => {
    const newData = this.state.data.map((item) => {
      if (item.id === id) {
        item.selected = !selected;
      }
      return item;
    });

    this.setState(() => {
      return { data: newData };
    });
  };

  onDeleteItem = (id) => {
    console.log(`Удалить ${id}?!`);
    const newData = this.state.data.filter((item) => {
      return item.id !== id;
    });
    this.setState({ data: newData });
  };

  onAddItem = (newItem) => {
    const newData = [...this.state.data, newItem];
    this.setState({ data: newData });
  };
  onFilter = () => {
    this.setState(() => {
      return { filter: !this.state.filter };
    });
  };

  filterData = (filter) => {
    if (filter) {
      const filtered = this.state.data.filter((item) => item.impotant);
      return filtered;
    }
    return this.state.data;
  };

  render() {
    const visibleData = this.filterData(this.state.filter);
    console.log(visibleData);
    return (
      <div className="todo-app">
        <ToDoList
          data={visibleData}
          onDeleteItem={this.onDeleteItem}
          onToggleProp={this.onToggleProp}
        />
        <ToDoFilter onFilter={this.onFilter} />
        <ToDoAddForm onAddItem={this.onAddItem} />
      </div>
    );
  }
}

// class ToDoApp extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       premia: 1000,
//       position: '',
//     };
//   }
//   get stateInfo() {
//     return JSON.stringify(this.state);
//   }
//   premiaUp = () => {
//     this.setState({
//       premia: this.state.premia + 1000,
//     });
//   };
//   commitInput = (e) => {
//     this.setState({ position: e.target.value });
//   };
//   render() {
//     const { name, salary } = this.props.data[0];
//     const { position, premia } = this.state;
//     console.log(this.stateInfo);
//     return (
//       <div className="test-component">
//         <button onClick={this.premiaUp}>+++</button>
//         <h1>
//           Вас зовут {name}. Ваша зарплата {salary}. Премия: {premia}. Должность {position}
//         </h1>
//         <form>
//           <span>Введите должность</span>
//           <input type="text" onChange={this.commitInput} />
//         </form>
//       </div>
//     );
//   }
// }

export default ToDoApp;
