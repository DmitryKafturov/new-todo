import React from "react";


const TodosHeader = ({ length }) => {
    return (
        <h1
            className="title">
            TODO :{length}
        </h1>
    )
}

export default TodosHeader