import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Modal } from "../types/modal";

const initialState: Modal = {
  isVisible: false,
  action: "",
};
const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openCreateModal(state) {
      state.isVisible = true;
      state.action = "create";
    },
    openEditModal(state, action: PayloadAction<{ id: number; title: string }>) {
      state.isVisible = true;
      state.action = "edit";
      state.editTodoId = action.payload.id;
      state.editTodoTitle = action.payload.title;
    },
    closeModal(state) {
      state.isVisible = false;
      state.action = "";
      state.editTodoId = null;
      state.editTodoTitle = "";
    },
  },
});

export const { openCreateModal, openEditModal, closeModal } =
  modalSlice.actions;

export default modalSlice.reducer;
