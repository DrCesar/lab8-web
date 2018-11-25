import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';

import Calculator from './components/calculator';
import rootReducer from './reducers';
import './index.css';

const div = document.createElement('div');
div.setAttribute('id', 'root');
div.setAttribute('class', 'body');
document.body.append(div);

const store = createStore(rootReducer);

render(
  <Provider store={store}>
    <Calculator />
  </Provider>, document.getElementById('root'),
);
