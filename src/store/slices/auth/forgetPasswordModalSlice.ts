import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  task:false,
};

const ForgetPwModalControl = createSlice({
  name: "forgetpw-modal-control",
  initialState,
  reducers: {
    openForgetPwModal: (state) => {
      state.task=true;
    },
    closeForgetPwModal: (state) => {
      state.task=false;
    },
  },
});

export const { openForgetPwModal, closeForgetPwModal } = ForgetPwModalControl.actions;

export default ForgetPwModalControl.reducer;