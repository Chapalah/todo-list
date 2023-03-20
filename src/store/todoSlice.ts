import { createSlice, PayloadAction, createAsyncThunk, AnyAction } from '@reduxjs/toolkit';

type Todo = {
  userId: number,
  id: number;
  title: string;
  completed: boolean;
}

type TodosState = {
  list: Todo[];
  loading: boolean;
}

const initialState: TodosState = {
  list: [],
  loading: false,
}

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {},
  extraReducers: (builder) => {

  }
    
})

export default todoSlice.reducer;