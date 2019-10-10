//Dependencies
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";
import { saveState, loadState } from "./localstorage";

const initialState = loadState() || {};

const middleware = [thunk];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // options like actionSanitizer, stateSanitizer
    })
  : compose;
const enhancer = composeEnhancers(
  applyMiddleware(...middleware)
);
const store = createStore(rootReducer, initialState, enhancer);

store.subscribe(() => {
  saveState(store.getState());
});

export default store;
