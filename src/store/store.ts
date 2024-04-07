import { combineReducers, configureStore } from "@reduxjs/toolkit";
import contentModalReducer from "./slices/contentDetailContainerControlSlice";
import { authReducer } from "./slices/auth/authSlice";
import { loadingReducer } from "./slices/loading/loadingSlice";
import securityModalReducer from "./slices/auth/securityModalSlice";
import forgetPwModalReducer from "./slices/auth/forgetPasswordModalSlice";

const rootReducer = combineReducers({
	auth: authReducer,
	loading: loadingReducer,
  contentControl: contentModalReducer,
  securityModalControl:securityModalReducer,
  forgetPwModalControl:forgetPwModalReducer
});

export const store = configureStore({reducer: rootReducer});