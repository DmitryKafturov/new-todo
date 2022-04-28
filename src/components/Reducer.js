import React from "react";

export const reducer = (state, action) => {
    switch (action.type) {
        case 'add':
            let obj = {
                id: Date.now(),
                checked: false,
                value: action.payload,
            }
            return { ...state, todos: [...state.todos, obj] }
        case 'changeState':
            return { ...state, todosState: action.payload }
        case 'checkItem':
            return {
                ...state,
                todos: state.todos.map(post => post.id === action.payload ?
                    { ...post, checked: !post.checked } :
                    { ...post }
                )
            }
        case 'removeItem':
            return {
                ...state,
                todos: state.todos.filter((post) => post.id !== action.payload)
            }
        case 'removeAll':
            return {
                ...state,
                todos: state.todos.filter((post) => !post.id)
            }
        default:
            return state
    }
}

