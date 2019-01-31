import * as actionTypes from './actionTypes';
import { UserModel } from '../../model/UserModel';

interface State {
    data: any;
    isFetching: boolean;
}

const initialState: State = {
    data: {},
    isFetching: true
};

export const user = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_USER_SUCESS:
            return {
                ...state,
                data: action.data,
                isFetching: false,
            }
        case actionTypes.FETCH_USER_FAILURE:
            return {
                ...state,
                isFetching: false
            }
        case actionTypes.LIKE:
            console.log('action.uuid', action.uuid);
            return {
                ...state,
                data: {
                    ...state.data,
                    [action.uuid]: {
                        ...state.data[action.uuid],
                        like: state.data[action.uuid].like + 1
                    }
                }
            }
        case actionTypes.UNLIKE:
            console.log('action.uuid', action.uuid);
            return {
                ...state,
                data: {
                    ...state.data,
                    [action.uuid]: {
                        ...state.data[action.uuid],
                        unlike: state.data[action.uuid].unlike - 1
                    }
                }
            }
        case actionTypes.TOGGLE_FOLLOW:
            return {
                ...state,
                data: {
                    ...state.data,
                    [action.uuid]: {
                        ...state.data[action.uuid],
                        following: !state.data[action.uuid].following
                    }
                }
            }
        default:
            return state;
    }
}
