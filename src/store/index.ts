import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { userReducer } from '../view/userList';
import thunk from 'redux-thunk';
const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
    const store = createStore(
        combineReducers({
            user: userReducer
        }),
        composeEnhancers(
            applyMiddleware(
                thunk,
            ),
        )
    );
    return store;
}
