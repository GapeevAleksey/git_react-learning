import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import reducer from './components/counter/reducer';
// import reducer from './components/posts/reducer';
import { legacy_createStore as createStore, bindActionCreators } from 'redux';
import './index.css';
import App from './components/App';

const container = document.getElementById('root');
const root = createRoot(container);

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      {console.log(store.getState())}
      <App />
    </Provider>
  </React.StrictMode>
);
