import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Todo, TodoFilter, TodosState } from "../types/todo";

const initialState: TodosState = {
  list: [],
  filteredList: [],
  filter: { searchValue: "", searchOption: "all" },
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    createTodo(state, action: PayloadAction<Todo>) {
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
    setTodosFilter(state, action: PayloadAction<TodoFilter>) {
      state.filter = action.payload;
    },
    filterTodos(state) {
      const { list, filter } = state;

      if (filter.searchOption === "all" && filter.searchValue === "") {
        state.filteredList = list;
        return;
      }

      if (filter.searchOption === "all" && filter.searchValue !== "") {
        state.filteredList = list.filter(
          (item) => item.title.toLowerCase().indexOf(filter.searchValue) > -1
        );
        return;
      }

      state.filteredList = list.filter((item) => {
        if (item.title.toLowerCase().indexOf(filter.searchValue) > -1 || filter.searchValue === '') {
          if (item.completed && filter.searchOption === "completed") {
            
            return item;
          }

          if (!item.completed && filter.searchOption === "not completed") {
            return item;
          }
        }
      });
    },
  },
});

export const {
  createTodo,
  toggleTodo,
  editTodo,
  deleteTodo,
  setTodosFilter,
  filterTodos,
} = todoSlice.actions;

export default todoSlice.reducer;
