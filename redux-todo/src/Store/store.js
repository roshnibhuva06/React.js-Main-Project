import { configureStore } from '@reduxjs/toolkit'
import TodoReducer from "../Features/todoSlice.js"

const store = configureStore({
    reducer: {
        Todos: TodoReducer,
    }
})

export default store