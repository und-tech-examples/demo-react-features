import { UserListModel } from '../../model/UserModel';
import { UserServiceModel } from '../../model/UserServiceModel';

export const hydrateUserList = (data: UserServiceModel): UserListModel => {
    let newData = {} as UserListModel;
    data.results.forEach(data => {
        newData[data.login.uuid] = {
            uuid: data.login.uuid,
            name: data.name.first,
            email: data.email,
            phone: data.phone,
            picture: data.picture.large,
            following: false,
            like: 0,
            unlike: 0
        }
    });
    return newData;
}