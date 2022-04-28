import React, { useContext } from "react";
import { Context } from "./Context";
import TodoItem from "./TodoItem/TodoItem";


const TodosList = () => {
    const { visibleTodos } = useContext(Context)

    return (
        visibleTodos.map(post =>
            <TodoItem
                post={post}
                key={post.id}
            />
        )
    )
}

export default TodosList