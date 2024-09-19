import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import chatbotReducer from './store/reducers/chatbotReducer';
import { thunk } from 'redux-thunk';

const rootReducer = combineReducers({
  chatbot: chatbotReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
