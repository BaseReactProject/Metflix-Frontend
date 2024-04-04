import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  task:false,
};

const ContentModalControl = createSlice({
  name: "content-modal-control",
  initialState,
  reducers: {
    openModal: (state) => {
      state.task=true;
    },
    closeModal: (state) => {
      state.task=false;
    },
  },
});

export const { openModal, closeModal } = ContentModalControl.actions;

export default ContentModalControl.reducer;