import UserAPI from 'api/UserAPI';
import { UserSave } from "meta";
declare class UserSaveAPI extends UserAPI {
    getSaveListQuery: (query: string) => any;
    addUserSave: (data: UserSave) => any;
    editUserSave: (id: number, data: UserSave) => any;
    deleteUserSave: (id: number) => any;
}
export default UserSaveAPI;
