import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ModalType, ModalActionType } from "../types/modal";

const initialState: ModalType = {
  isVisible: false,
  action: "",
};
const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal(state, action: PayloadAction<ModalActionType>) {
      state.isVisible = true;
      state.action = action.payload;
    },
    closeModal(state) {
      state.isVisible = false;
      state.action = "";
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;

export default modalSlice.reducer;
