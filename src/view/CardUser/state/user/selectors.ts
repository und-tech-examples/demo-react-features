import { compose } from "redux";

export const getName = state => state.user.data.name;
export const getEmail = state => state.user.data.email;
export const getPhone = state => state.user.data.phone;
export const getPicture = state => state.user.data.picture;
export const getIsFetching = state => state.user.isFetching;
export const getLike = state => state.user.data.like;
export const getUnlike = state => state.user.data.unlike;
export const getFollowing = state => state.user.data.following;
export const getData = state => state.user.data;
export const getUser = state => index => state.user.data[index];
export const getTotalFollowing = state => {
    return Object.keys(state.user.data).filter((key) => {
        return state.user.data[key].following
    }).length
}