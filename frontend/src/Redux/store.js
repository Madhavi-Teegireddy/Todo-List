import {legacy_createStore, combineReducers, applyMiddleware} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import todoReducer from "./reducer";



    const reducer = combineReducers({
        todos: todoReducer
    }) 

    const middleware = [thunk];

    const store = legacy_createStore(
        reducer,
        composeWithDevTools(applyMiddleware(...middleware))
    )

    export default store;
