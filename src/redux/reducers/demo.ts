import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IDemo, ITodo } from './../../interface/demo'

const initialState: IDemo = {
  todos: [],
  loading: false
}

const demoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    setLoading(state, action: PayloadAction<boolean>) {
      return {
        ...state,
        loading: action.payload
      }
    },
    setTodos(state, action: PayloadAction<ITodo[]>) {
      return {
        ...state,
        todos: action.payload
      }
    }
  }
});

export const { setTodos, setLoading } = demoSlice.actions;

export default demoSlice.reducer;
