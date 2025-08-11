import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: "Todos",
    initialState : [],
    reducers: {
        Addtodo: (state, action) => {
            state.push({ id: Date.now(), text: action.payload })
        },
        Remove: (state, action) => {
            const index = state.findIndex((todo) => todo.id === action.payload);
            if (index !== -1) {
                state.splice(index, 1);
            }
        },
       Updatetodo: (state, action) =>{
    const { id, text } = action.payload;
    const index = state.findIndex((todo) => todo.id === id);
    if (index !== -1) {
      state[index].text = text;
    }
}

    },
});

export const { Addtodo , Remove ,Updatetodo} = todoSlice.actions;
export default todoSlice.reducer;
