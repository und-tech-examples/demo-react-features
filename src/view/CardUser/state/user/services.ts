import axios from 'axios';
import { UserModel } from '../../model/UserModel';
import { hydrateUser } from './hydrators';

export const serviceUser = {
    async get(): Promise<Array<UserModel>> {
        try {
            const { data } = await axios.get('https://randomuser.me/api/?results=6');
            return hydrateUser(data);
        } catch (e) {
            throw Error();
        }
    }
}