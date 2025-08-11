import { createSlice } from "@reduxjs/toolkit";


const initialState = []
const todoSlice = createSlice({
    name: "Todos",
    initialState : [],
    reducers: {
        Addtodo: (state, action) => {
            state.push({ text: action.payload, completed: false })
        },
        Remove: (state, action) => {
            const index = state.findIndex((todo) => todo.id === action.payload);
            if (index !== -1) {
                state.splice(index, 1);
            }
        },
        Updatetodo: (state, action) =>{
            const { id ,text} = action.payload;
            const index = state.findIndex((todo) => todo.id === id);
            if (index !== -1) {
              state[index].text = Text;
            }
        }
    },
});

export default todoSlice.reducer
export const { Addtodo , Remove ,Updatetodo} = todoSlice.actions;