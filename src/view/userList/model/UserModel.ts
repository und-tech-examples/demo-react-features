
export interface UserModel {
    name: string;
    email: string;
    phone: string;
    picture: string;
    following: boolean;
    like: number;
    unlike: number;
    uuid: string;
}

export interface UserListModel {
    [key: string]: UserModel;
}