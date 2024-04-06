import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  task:false,
};

const SecurityModalControl = createSlice({
  name: "security-modal-control",
  initialState,
  reducers: {
    openSecurityModal: (state) => {
      state.task=true;
    },
    closeSecurityModal: (state) => {
      state.task=false;
    },
  },
});

export const { openSecurityModal, closeSecurityModal } = SecurityModalControl.actions;

export default SecurityModalControl.reducer;