import {combineReducers, configureStore} from "@reduxjs/toolkit";
import { authReducer } from "./slices/auth/authSlice";
import { loadingReducer } from "./slices/loading/loadingSlice";


const rootReducer = combineReducers({
	auth: authReducer,
	loading: loadingReducer,
});

export const store = configureStore({reducer: rootReducer});