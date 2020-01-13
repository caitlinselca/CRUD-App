// This file is where we will create our Redux store;
// This file is also where we will pass in middleware/devTools to our Redux store;
// This file is also where we will pass in a reducer function (or reducer functions thanks to combineReducers) to our Redux store;
// This is the file where we will export our Redux store by default so that we can pass it to the Provider component so that our entire component tree is provided with the store;

// IMPORTS;

// combineReducers: it takes in all of your reducer functions and puts the output of those reducer functions as the values for the corresponding keys in your Redux store;
// applyMiddleware: this is a function that takes in any amount of middleware as arguments and then allows your Redux application to use them;
// createStore: this establishes your Redux store that holds your application's state;
// createLogger: it allows you to see in your browser console the action that was just dispatched, the previous state prior to the action being dispatched, and the next state after the action was dispatched;
// thunkMiddleware: because your reducer function ONLY accepts objects, it cannot accept Promises or any other data type/data structure --- so thunkMiddleware will hijack and intercept any action that is dispatched to the Redux store and type check if the value is an object (which the thunkMiddleware will permit to go through to the Redux store) or if it is a function, it will invoke that function, and then dispatch that result to the reducer (ultimately the result is an object);
// thunkMiddleware part II: this allows us to write action creators, make asynchronous calls in that thunk action creator, and give us access to the dispatch method so we can communicate with/to the reducer;
import { combineReducers, applyMiddleware, createStore } from "redux";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

// Reducer Functions;
import students from "./utilities/students";

// Construct our Redux store using all of the imports we just conducted;
// rootReducer: this is the sole reducer function that you will pass to your Redux store when you create the Redux store;
// rootReducer part II: this looks like an object where the keys are the names of your reducer functions and the values are the outputs of those reducer functions;
// rootReducer part III: {nameOfReducerA: valueOfReducerA, nameOfReducerB: valueOfReducerB}
// logger: read the description for createLogger above;
// middleware: is middleware;
// store: first argument is your reducer(s) (keep in mind you can just have one reducer without the combineReducers involved****) and your second argument passed in is your middleware that operates in between actions being dispatched and those actions arriving at the reducer function;
// ****: with combineReducers, you are allowed to have split up reducer functions that manage a certain part of state, and this function combineReducers will go through each key in the combinedReducerObject and invoke each reducer function aka value until all reducer functions are called --- however, if you do not use combineReducers you can simply pass in a single reducer function --- so you can pass in an object of reducer functions with combineReducers, or you can pass in one sole reducer function without combineReducers (make sure you pass in an object to combineReducers);
// export default store: you can only have one default export per file (unless you alias multiple defaults);
const rootReducer = combineReducers({students});
const logger = createLogger({ collapsed: true });
const middleware = composeWithDevTools(applyMiddleware(thunkMiddleware, logger));
const store = createStore(rootReducer, middleware);

// Export our store by default, which will be provided to and injected within our entire application/component tree;
export default store;