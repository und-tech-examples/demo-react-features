import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { user } from '../view/CardUser/state/user/reducer';
import thunk from 'redux-thunk';
const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
    const store = createStore(
        combineReducers({
            user
        }),
        composeEnhancers(
            applyMiddleware(
                thunk,
            ),
        )
    );
    return store;
}
