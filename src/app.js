import ReactDOM from 'react-dom';
import React from 'react';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';

import Application from 'components/index';
import './style/main';
import reducers from 'reducers/combineReducers';
import rootSaga from './sagas/rootSaga';

const sagaMiddleware = createSagaMiddleware();
const container = document.querySelector('#app');
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(rootSaga);

ReactDOM.render(
	<Provider store={store}>
		<Application />
	</Provider>,
	container
);