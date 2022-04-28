import React, { useContext } from "react";
import { Context } from "../Context";
import classes from "./CheckInput.module.css";

const CheckInput = ({ post }) => {
    const { dispatch } = useContext(Context);
    const { check, lblOn } = classes

    return (
        <label className={post.checked ? { lblOn } : classes.lblOff}>
            &#10004;
            <input onClick={() =>
                dispatch({
                    type: 'checkItem',
                    payload: post.id
                })}
                className={`${check}`}
                type='checkbox'>
            </input>
        </label>
    )
}

export default CheckInput