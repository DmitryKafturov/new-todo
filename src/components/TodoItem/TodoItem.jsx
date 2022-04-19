import React, { useContext } from "react";
import { Context } from "../Context";
import DeleteButton from "../Button/DeleteButton"
import CheckInput from "../CheckBox/CheckInput"
import classes from "./TodoItem.module.css"


const TodoItem = ({ post }) => {
    const { dispatch } = useContext(Context)
    return (
        <div key={post.id} className={classes.item}>
            <CheckInput post={post} />
            <span style={{ overflow: 'hidden', width: '380px' }} className={post.checked ? classes.complete : classes.text}>
                {post.value}
            </span>
            <DeleteButton post={post} />
        </div>
    )
}

export default TodoItem


