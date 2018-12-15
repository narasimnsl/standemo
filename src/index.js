import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore, applyMiddleware,compose} from 'redux';
import rootReducer from './store/reducers/json_reducer'
import {Provider} from 'react-redux'
import createSagaMiddleware from 'redux-saga'
import {watchLoadJson} from './store/sagas/main_saga'



const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer,composeEnhancers(applyMiddleware(sagaMiddleware)));
sagaMiddleware.run(watchLoadJson);



ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
