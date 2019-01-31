import * as React from 'react';
import { UserListFeature } from '../view/userList';
import { HeaderFeature } from '../view/header';

export const App = () => (
    <div>
        <HeaderFeature />
        <UserListFeature />
    </div>
);