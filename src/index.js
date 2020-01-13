import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// Additional imports for Redux store;
import { Provider } from "react-redux";
import store from "./store"; // if the file you are importing is the `index.js` of a directory, you can just use the directory name because the index.js is implied;

// Provider: This is a component that we wrap around our entire component tree so that every connected component (they have to be explicitly connected within their own files) has access to the Redux store;
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider >,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
