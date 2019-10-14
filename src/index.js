import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist'
import { PersistGate } from 'redux-persist/lib/integration/react';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import imagesReducer from './reducers/imagesReducer';
import loginReducer from './reducers/loginReducer';
import * as serviceWorker from './serviceWorker';

const rootReducer = combineReducers({
  imagesReducer,
  loginReducer
})

 // Middleware: Redux Persist Config
 const persistConfig = {
   key: 'root',
   storage
 };

export const persistedReducer = persistReducer(persistConfig, rootReducer)
export const store = createStore(persistedReducer, applyMiddleware(thunk))
export const persistor = persistStore(store);

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
