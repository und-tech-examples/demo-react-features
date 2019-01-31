import axios from 'axios';
import { UserListModel } from '../../model/UserModel';
import { hydrateUserList } from './hydrators';

export const serviceUser = {
    async get(): Promise<UserListModel> {
        try {
            const { data } = await axios.get('https://randomuser.me/api/?results=6');
            return hydrateUserList(data);
        } catch (e) {
            throw Error();
        }
    }
}