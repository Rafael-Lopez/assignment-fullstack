import thunk from 'redux-thunk';
import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';

import bookReducer from "./reducers/book";

const rootReducer = combineReducers({
    bookList: bookReducer
});

const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(thunk)
));

export default store;