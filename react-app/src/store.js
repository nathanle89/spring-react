import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

const initialState = {

};

const middlewares = [thunk];

let enhancers;

if (window.navigator.userAgent.includes("Chrome")) {
    enhancers = compose(
        applyMiddleware(...middlewares),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
} else {
    enhancers = compose(applyMiddleware(...middlewares))
}

let store = createStore(
    rootReducer,
    initialState,
    enhancers
);

export default store;
