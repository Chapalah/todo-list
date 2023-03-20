import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ITodo, TodosState } from "../types/todo";

const initialState: TodosState = {
  list: [],
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    createTodo(state, action: PayloadAction<ITodo>) {
      state.list = [action.payload, ...state.list];
    },
    toggleTodo(state, action: PayloadAction<number>) {
      const targetTodo = state.list.find((todo) => todo.id === action.payload);

      if (targetTodo) targetTodo.completed = !targetTodo.completed;
    },
    editTodo(state, action: PayloadAction<{ id: number; title: string }>) {
      const targetTodo = state.list.find(
        (todo) => todo.id === action.payload.id
      );

      if (targetTodo) targetTodo.title = action.payload.title;
    },
    deleteTodo(state, action: PayloadAction<number>) {
      state.list = state.list.filter((item) => item.id !== action.payload);
    },
  },
});

export const { createTodo, toggleTodo, editTodo, deleteTodo } =
  todoSlice.actions;

export default todoSlice.reducer;
