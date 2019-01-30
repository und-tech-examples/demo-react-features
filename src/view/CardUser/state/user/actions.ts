import { serviceUser } from './services';
import * as actionTypes from './actionTypes';

export const toogleFollow = (uuid: string) => ({
    type: actionTypes.TOGGLE_FOLLOW,
    uuid
});

export const like = (uuid: string) => ({
    type: actionTypes.LIKE,
    uuid
});

export const unlike = (uuid: string) => ({
    type: actionTypes.UNLIKE,
    uuid
});

export const fetchUserSucess = (data) => ({
    type: actionTypes.FETCH_USER_SUCESS,
    data
});

export const fetchUser = () => {
    return async dispatch => {
        try {
            const data = await serviceUser.get();
            console.log('data', data);
            dispatch(fetchUserSucess(data))
        } catch (e) {
            console.log('error');
        }
    }
}
