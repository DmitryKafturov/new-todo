import React, { useContext } from "react";
import classes from "./DeleteButton.module.css"
import { Context } from "../Context";



const DeleteButton = ({ post }) => {
    const { dispatch } = useContext(Context)
    const { delBtn } = classes;

    return (
        <button
            onClick={() => dispatch({
                type: 'removeItem',
                payload: post.id
            })}
            className={` ${delBtn}`}
        >
            &#10008;
        </button>
    )
}

export default DeleteButton