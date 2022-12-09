import { Component } from 'react';

class BBBComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      error: null,
      newUser: { addUser: '', addEmail: '' },
    };
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({ users: result });
        },
        (error) => {
          this.setState({ error });
        }
      );
  }
  onAddUser = async (e) => {
    e.preventDefault();
    await fetch('https://jsonplaceholder.typicode.com/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.state.newUser),
    }).then((res) => res.json());
  };
  onDeleteUser = () => {};

  render() {
    const { users, error } = this.state;
    return (
      <div>
        <ul>
          {users.map((item) => {
            return (
              <li key={item.id}>
                Имя: {item.name}, email: {item.email}
              </li>
            );
          })}
        </ul>
        <form>
          <div>
            <input
              type="text"
              onChange={(e) =>
                this.setState({ newUser: { addUser: e.target.value } })
              }
            />
          </div>
          <div>
            <input
              type="text"
              onChange={(e) =>
                this.setState({ newUser: { addEmail: e.target.value } })
              }
            />
          </div>
          <div>
            <button onClick={this.onAddUser}>Отправить</button>
          </div>
          <div>
            <button>удалить</button>
          </div>
        </form>
      </div>
    );
  }
}
export default BBBComponent;
