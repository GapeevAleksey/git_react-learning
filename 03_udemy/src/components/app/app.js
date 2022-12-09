import { Component } from 'react';
import AppFilter from '../app-filter/app-filter';
import AppInfo from '../app-info/app-info';
import EmployeesAddForm from '../employees-add-form/employees-add-form';
import EmployeesList from '../employees-list/employees-list';
import SearchPanel from '../search-panel/search-panel';
import ToDoApp from '../todo-app/todo-app';
import stylesApp from './app.module.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          name: 'Alex Nose',
          salary: 15000,
          increase: false,
          rise: true,
          id: 1,
        },
        {
          name: 'Mike Shinoda',
          salary: 7000,
          increase: true,
          rise: false,
          id: 2,
        },
        {
          name: 'Alice Cooper',
          salary: 200,
          increase: false,
          rise: false,
          id: 3,
        },
      ],
      term: '',
      onSort: 'all',
    };
  }
  deleteItem = (id) => {
    this.setState(({ data }) => {
      return {
        data: data.filter((item) => item.id !== id),
      };
    });
  };
  addEmployee = (name, salary) => {
    const newItem = {
      name,
      salary,
      increase: false,
      rise: false,
      id: Math.floor(Math.random() * 1000),
    };

    this.setState(({ data }) => {
      const newArr = [...data, newItem];
      return {
        data: newArr,
      };
    });
  };

  onToggleProp = (id, prop) => {
    this.setState(({ data }) => {
      const newArr = data.map((employee) => {
        if (employee.id === id) {
          return { ...employee, [prop]: !employee[prop] };
        }
        return employee;
      });
      return {
        data: newArr,
      };
    });
  };

  searchEmployees = (items, term) => {
    if (!term) {
      return items;
    }
    return items.filter((item) => item.name.indexOf(term) > -1);
  };

  onUpdateSearch = (term) => {
    this.setState({ term });
  };

  onSortEmployees = (items, onSort) => {
    switch (onSort) {
      case 'onRise':
        return items.filter((item) => item.rise);
      case 'more1000$':
        return items.filter((item) => item.salary > 1000);
      default:
        return items;
    }
  };
  onUpdateSort = (onSort) => {
    this.setState({ onSort });
  };

  render() {
    console.log(this.state.onSort);
    const { data, term, onSort } = this.state;
    const amountEmployees = this.state.data.length;
    const amountIncreaseEmployees = this.state.data.filter(
      (item) => item.increase
    ).length;
    const visibleData = this.onSortEmployees(
      this.searchEmployees(data, term),
      onSort
    );
    return (
      <div className={stylesApp.app}>
        <AppInfo
          amountEmployees={amountEmployees}
          amountIncreaseEmployees={amountIncreaseEmployees}
        />
        <div className="search-panel">
          <SearchPanel onUpdateSearch={this.onUpdateSearch} />
          <AppFilter onUpdateSort={this.onUpdateSort} />
        </div>
        <EmployeesList
          data={visibleData}
          onDelete={this.deleteItem}
          onToggleProp={this.onToggleProp}
        />
        <EmployeesAddForm onAdd={this.addEmployee} />
        <ToDoApp />
      </div>
    );
  }
}

export default App;
