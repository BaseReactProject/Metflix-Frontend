import { configureStore } from "@reduxjs/toolkit";
import contentModalReducer from "./slices/contentDetailContainerControlSlice";

const store = configureStore({
  reducer: {
    contentControl: contentModalReducer,
  },
});

export default store;