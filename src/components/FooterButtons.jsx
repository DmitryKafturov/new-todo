import React, { useContext } from "react";
import classes from './FooterButtons.module.css';
import { Context } from "./Context";


const FooterButtons = () => {
    const { dispatch } = useContext(Context);
    const { btns, btn } = classes;
    const buttons = [
        {
            title: "Выполненые",
            handler: () => dispatch({
                type: 'changeState',
                payload: "checked"
            })
        },
        {
            title: "Не выполненые",
            handler: () => dispatch({
                type: 'changeState',
                payload: "unChecked"
            })
        },
        {
            title: " Все дела",
            handler: () => dispatch({
                type: 'changeState',
                payload: "todoAll"
            })
        },
        {
            title: " Удалить всё",
            handler: () => dispatch({
                type: 'removeAll'
            })
        }
    ]
    return (
        <div className={btns}>
            {buttons.map(({ handler, title }, index) =>
                <button onClick={handler}
                    key={index}
                    className={btn}>
                    {title}
                </button>
            )}
        </div >
    )
}

export default FooterButtons