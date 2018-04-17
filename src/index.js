import "./style.css";
import { createStore, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';

const reducer = (state = { counter: 0 }, action) => {
    switch (action.type) {
        case 'INC':
            return {...state, counter: state.counter + action.value };
            break;
        case 'DEC':
            return {...state, counter: state.counter - action.value };
            break;
    }
    return state;
}

const middleware = applyMiddleware(logger);
const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    middleware);

store.dispatch({ type: 'INC', value: 3 });
store.dispatch({ type: 'DEC', value: 5 });
store.dispatch({ type: 'DEC', value: 2 });
store.dispatch({ type: 'INC', value: 1 });
store.dispatch({ type: 'INC', value: 4 });