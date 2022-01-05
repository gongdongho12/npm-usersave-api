import UserAPI from 'api/UserAPI';
import { Account } from "meta";

class UserSaveAPI extends UserAPI {
  login = (email: string, password: string) => this.getAxiosInstance()
  .post("/auth/sign-in", {
    id: email,
    password,
  })
  .then((res: any) => {
    const { data } = res;
    console.log("login data", data);
    return data;
  });

getAccount = () => this.getAxiosInstance().get("/user").then((res: any) => {
  const { data } = res;
  console.log("account data", data);
  return data;
});

register = (account: Account) => this.getAxiosInstance()
  .put("/auth/signup", account)
  .then((res: any) => {
    const { data } = res;
    console.log("register data", data);
    return data;
  });
}

export default UserSaveAPI