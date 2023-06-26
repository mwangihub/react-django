import { http } from "./HTTP";

const refreshToken = (object) => http().post("api/auth-token/refresh/", object);
const loginApi = (email, password) => http().post("api/auth-token/", { email, password });
const logoutApi = () => http().get("api/logout/");

export const Api = {
	refreshToken,
	loginApi,
	logoutApi
}