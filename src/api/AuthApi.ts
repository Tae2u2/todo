import axiosApi from "./AxiosApi";
import { AuthState } from "../types/AuthTypes";

const AuthApi = {
  login: async ({ email, password }: AuthState) => {
    const { status } = await axiosApi.post("/users/login", {
        email,
        password,
    });
    return status;
  },
  signup: async ({ email, password }: AuthState) => {
    const { status } = await axiosApi.post("/users/create", { 
        email,
        password,
    });
    return status;
  },
};

export default AuthApi;