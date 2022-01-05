import UserAPI from 'api/UserAPI';
import { Account } from "meta";
declare class UserSaveAPI extends UserAPI {
    login: (email: string, password: string) => any;
    getAccount: () => any;
    register: (account: Account) => any;
}
export default UserSaveAPI;
