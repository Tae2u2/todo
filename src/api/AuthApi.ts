import axiosApi from "./AxiosApi";
import { AuthState } from "../types/AuthTypes";

const AuthApi = {
  login: async ({ email, password }: AuthState) => {
    const { data } = await axiosApi.post("/users/login", {
        email,
        password,
    });
    return data;
  },
  signup: async ({ email, password }: AuthState) => {
    const { data } = await axiosApi.post("/users/create", { 
        email,
        password,
    });
    return data;
  },
};

export default AuthApi;