import axios from "axios";
import createAuthRefreshInterceptor from "axios-auth-refresh";
import { apiMeta } from "meta";
import { Promise } from 'es6-promise';
const { localConfig, devConfig, prodConfig } = apiMeta;

class UserAPI {
	private axiosInstance: any;

	public getAxiosInstance() {
    return this.axiosInstance;
  }

	constructor(type: string) {
    let config;
    switch (type) {
      case 'dev':
        config = devConfig
      case 'local':
        config = localConfig
        break;
      case 'prod':
      default:
        config = prodConfig
        break;
    }
		this.axiosInstance = axios.create(config);
		this.axiosInstance.interceptors.request.use((request: any) => {
			try {
				const token: string | null = getAccessToken();
				if (token) {
					request.headers["Authorization"] = `Bearer ${token}`;
				}
			} catch (e) {}
			return request;
    });
    
    const getAccessToken = () => localStorage.getItem("jwt");

		const refreshAuthLogic = (failedRequest: any) => {
			localStorage.removeItem("jwt");
			return Promise.resolve();
		};

		createAuthRefreshInterceptor(this.axiosInstance, refreshAuthLogic, {
			statusCodes: [401, 500],
			retryInstance: this.axiosInstance,
		});
	}
}

export default UserAPI