import { Component } from 'react';

class InfoPanel extends Component {
  state = {
    countOfLikes: 0,
    currentDate: '',
  };

  render() {
    return (
      <div>
        <h2>Hello!</h2>
        {this.props.render(this.state.countOfLikes, this.state.currentDate)}
        <button
          onClick={() =>
            this.setState((prevState) => ({
              countOfLikes: prevState.countOfLikes + 1,
            }))
          }
        >
          Like
        </button>
        <button
          onClick={() =>
            this.setState({
              currentDate: `${new Date().getMinutes()}:${new Date().getSeconds()}`,
            })
          }
        >
          Get current date
        </button>
      </div>
    );
  }
}

export default InfoPanel;
