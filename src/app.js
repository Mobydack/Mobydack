import ReactDOM from 'react-dom';
import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import Application from 'components/index';
import './style/main.styl';
import reducer from 'reducers/index';

import DB from './lib/DataBase';

const container = document.querySelector('#app');
const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

DB.getPost();

ReactDOM.render(
    <Provider store={store}>
        <Application />
    </Provider>,
    container
);