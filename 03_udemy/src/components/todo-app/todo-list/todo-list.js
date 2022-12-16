import { Component } from 'react';
import ToDoListItem from './todo-list-item/todo-list-item';

class ToDoList extends Component {
  render() {
    return (
      <ul>
        <ToDoListItem
          data={this.props.data}
          onDeleteItem={this.props.onDeleteItem}
          onToggleProp={this.props.onToggleProp}
        />
      </ul>
    );
  }
}
export default ToDoList;
