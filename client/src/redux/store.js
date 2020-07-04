import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import reducer from "./reducers";
import { watchTest } from "./sagas/saga";

// Create Saga
const sagaMiddleware = createSagaMiddleware();

// Connect Saga
const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware)),
);

// Run Saga
sagaMiddleware.run(watchTest);

export default store;
