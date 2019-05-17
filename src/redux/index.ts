import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createBrowserHistory } from 'history';
import { routerMiddleware, connectRouter } from 'connected-react-router';
import rootReducer, { State } from './reducers';
import rootSaga from './actions';

export const history = createBrowserHistory();

const reducers = combineReducers<State, any>({
    ...rootReducer,
    router: connectRouter(history),
});

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()

// mount it on the Store
const store = createStore(
    reducers,
    compose(applyMiddleware(sagaMiddleware, routerMiddleware(history)))
);


// then run the saga
sagaMiddleware.run(rootSaga);

export default store;

