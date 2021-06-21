import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import rootReducer from '../redux/reducers';
import { Provider } from 'react-redux';
import { saveState, loadState } from '../services/persistServices';
import App from './App';

const persistedState = loadState();
const store = createStore(rootReducer, persistedState);

store.subscribe(() => {
    saveState(store.getState());
});

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
      <Provider store={store}>
           <App />
      </Provider>, div)
  ReactDOM.unmountComponentAtNode(div)
})
