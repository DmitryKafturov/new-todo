import React from "react";

export const reducer = (state, action) => {
    switch (action.type) {
        case 'add':
            let obj = {
                id: Date.now(),
                checked: false,
                value: action.payload,
            }
            return [...state, obj]


        case 'check':
            return state.map(post => post.id === action.payload ? { ...post, checked: !post.checked } : { ...post })



        case 'remove':
            return state.filter((post) => post.id !== action.payload)
        default:
            return state

    }

}

