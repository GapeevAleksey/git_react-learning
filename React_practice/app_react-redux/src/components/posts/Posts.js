import { useState } from 'react';
import { connect } from 'react-redux';
import * as actions from './actions';

const Posts = ({
  postMessage,
  idMessage,
  addPostMessage,
  removePostMessage,
}) => {
  const [inputText, setInputText] = useState('');
  return (
    <div className="container position-relative">
      <div
        className="card position-absolute top-100 start-50 translate-middle-x mt-5"
        style={{ width: '400px' }}
      >
        <div className="card-body">
          <ul className="list-group list-group-flush">
            {!postMessage.length ? (
              <h6 className="card-subtitle mt-2 mb-2  text-muted">
                Нет сообщений!
              </h6>
            ) : (
              postMessage.map((message) => (
                <li key={message} className="list-group-item">
                  {message}
                </li>
              ))
            )}
          </ul>

          <form>
            <div className="input-group mb-3">
              <input
                onChange={(e) => {
                  setInputText(e.currentTarget.value);
                }}
                value={inputText}
                type="text"
                className="form-control"
                placeholder="Введите текст..."
                aria-label="Recipient's username"
                aria-describedby="button-addon2"
              />
              <button
                onClick={(e) => {
                  e.preventDefault();
                  if (inputText) {
                    addPostMessage(inputText);
                    setInputText('');
                  }
                }}
                className="btn btn-outline-secondary"
                type="submit"
                id="button-addon2"
              >
                Button
              </button>
            </div>
          </form>
          <button
            onClick={() => {
              removePostMessage();
            }}
            type="button"
            className="btn btn-danger"
          >
            Очистить сообщения
          </button>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { postMessage: state.message, idMessage: state.id };
};

const mapDispatchToProps = {
  addPostMessage: actions.addMessage,
  removePostMessage: actions.removeMessage,
};

export const ContainerPosts = connect(
  mapStateToProps,
  mapDispatchToProps
)(Posts);
