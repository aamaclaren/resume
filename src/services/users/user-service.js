import UserApi from './user-api';
import User from './user-model';

export default class UserService{

    static async GetUserByEmail(userEmail){
        return new User(await UserApi.GetUserByEmail(userEmail)); 
    };

}