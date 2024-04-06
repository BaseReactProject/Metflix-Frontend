import axios from "axios";
import {BASE_API_URL} from "../../environment/environment";
import tokenService from "../services/token-service";
import {store} from "../../store/configure-store";

import {handleError} from "../errorHandlers/error-handlers";
import { addRequest, removeRequest } from "../../store/slices/loading/loadingSlice";

const axiosInstance = axios.create({
	baseURL: BASE_API_URL,
	withCredentials:true
});

axiosInstance.interceptors.request.use(config => {
	store.dispatch(addRequest());

	const token = tokenService.getToken();
	config.headers.Authorization = "Bearer " + token;
	return config;
});

axiosInstance.interceptors.response.use(
	response => {
		store.dispatch(removeRequest());
		return response;
	},
	error => {
		handleError(error);
		store.dispatch(removeRequest());
		return error;
	},
);

export default axiosInstance;