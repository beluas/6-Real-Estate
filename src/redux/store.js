import { createStore, applyMiddleware } from "redux";

import { rootReducer } from "./rootReducer";
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";
import { fetchSaga } from "./sagas";

export const generateStore = () => {
	const sagaMiddleware = createSagaMiddleware();
	const middlewares = [logger, sagaMiddleware];
	const store = createStore(rootReducer, applyMiddleware(...middlewares));

	sagaMiddleware.run(fetchSaga);

	return store;
};
