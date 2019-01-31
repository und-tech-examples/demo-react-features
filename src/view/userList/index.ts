import { UserListContainer } from './components/UserList';
import * as selectUser from './state/user/selectors';
import { user } from './state/user/reducer'

export {
    UserListContainer as UserListFeature,
    selectUser,
    user as userReducer
}