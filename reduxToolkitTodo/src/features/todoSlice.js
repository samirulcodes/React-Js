// nanoid-> generate unique id
import { createSlice, nanoid } from "@reduxjs/toolkit";



// created this as a object as there can multiple things can came
const initialState={
    todos: [{id: 1, text: "Hello world"}]
}

// reducer- is a functionality
// slice- almost bigger version  of reducer
export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => { // we have always access of two things here
            const todo = {
                id: nanoid(), 
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload )
        },
    }
})

// steps reducers
export const {addTodo, removeTodo} = todoSlice.actions

export default todoSlice.reducer