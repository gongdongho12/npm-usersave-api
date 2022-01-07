import UserAPI from 'api/UserAPI';
import { UserSave, Pageable, PageableData } from "meta";

const basePath: string = "/user/save"

class UserSaveAPI extends UserAPI {

  getUserSaveById = (id: number) => this.getAxiosInstance()
    .get(`${basePath}/${id}`)
    .then((res: any) => {
      const { data }: { data: UserSave } = res;
      console.log("getSaveById data", data);
      return data
    })
  
  getSaveListQuery = (query: string, pageable: Pageable) => this.getAxiosInstance()
    .post(`${basePath}/filter`, null, {
      params: {
        key: query,
        ...pageable
      }
    })
    .then((res: any) => {
      const { data } = res;
      console.log("getSaveListQuery data", data);
      return data;
    });
  
  getSavePageableQuery = (query: string, pageable: Pageable) => this.getAxiosInstance()
    .post(`${basePath}/filter/pageable`, null, {
      params: {
        key: query,
        ...pageable
      }
    })
    .then((res: any) => {
      const { data }: { data: PageableData<UserSave> } = res;
      console.log("getSavePageableQuery data", data);
      return data;
    });
  
  addUserSave = (data: UserSave) => this.getAxiosInstance().post(
    basePath,
    data
  ).then((res: any) => {
      const { data }: { data: UserSave } = res;
      console.log("addUserSave data", data);
      return data;
    });

  editUserSave = (id: number, data: UserSave) => this.getAxiosInstance()
    .put(`${basePath}/${id}`, data)
    .then((res: any) => {
      const { data }: { data: UserSave } = res;
      console.log("editUserSave data", data);
      return data;
    });

  deleteUserSave = (id: number) => this.getAxiosInstance()
    .delete(`${basePath}/${id}`)
    .then((res: any) => {
      const { data }: { data: UserSave } = res;
      console.log("deleteUserSave data", data);
      return data;
    });
}


export default UserSaveAPI