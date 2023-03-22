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
      state.targetTodoId = action.payload.id;
      state.targetTodoTitle = action.payload.title;
    },
    opentDeleteModal(
      state,
      action: PayloadAction<{ id: number; title: string }>
    ) {
      state.isVisible = true;
      state.action = "delete";
      state.targetTodoId = action.payload.id;
      state.targetTodoTitle = action.payload.title;
    },
    closeModal(state) {
      state.isVisible = false;
      state.action = "";
      state.targetTodoId = null;
      state.targetTodoTitle = "";
    },
  },
});

export const { openCreateModal, openEditModal, opentDeleteModal, closeModal } =
  modalSlice.actions;

export default modalSlice.reducer;
