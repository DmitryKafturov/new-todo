import React, { useState, useContext } from "react";
import { Context } from "./Context";

const BasicInput = () => {
    const [userInput, setUserInput] = useState('')
    const { addPost } = useContext(Context)

    const change = (e) => {
        setUserInput(e.target.value)
    }
    const keyDown = (e) => {
        if (e.key === 'Enter') {
            addPost(userInput)
            setUserInput('')
        }
    }
    const blurShow = (e) => {
        addPost(userInput)
        setUserInput('')
    }
    return (
        <input className="basic"
            placeholder="Какое дело?"
            value={userInput}
            type='text'
            onChange={change}
            onKeyDown={keyDown}
            onBlur={blurShow} >
        </input >
    )
}

export default BasicInput