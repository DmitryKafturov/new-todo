import React, { useEffect, useReducer } from "react";
import BasicInput from './components/BasicInput'
import TodosFooter from './components/TodosFooter'
import TodosList from './components/TodosList'
import TodosHeader from './components/TodosHeader'
import { Context } from "./components/Context";
import { reducer } from "./components/Reducer";

function App() {
  const [{ todos, todosState }, dispatch] = useReducer(
    reducer,
    {
      todos: JSON.parse(localStorage.getItem('todos')) || [],
      todosState: "todoAll"
    }
  )

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const addPost = (userInput) => {
    if (userInput) {
      dispatch({
        type: 'add',
        payload: userInput
      })
    }
  }

  const getVisibleTodos = () => {
    switch (todosState) {
      case "todoAll":
        return todos;
      case "checked":
        return todos.filter(todo => todo.checked);
      case "unChecked":
        return todos.filter(todo => !todo.checked)
      default:
        return todos;
    }
  }

  const visibleTodos = getVisibleTodos()

  return (
    <Context.Provider value={{ dispatch, addPost, visibleTodos }}>
      <div className="App">
        <TodosHeader length={todos.length} />
        <BasicInput />
        <TodosList />
        <TodosFooter />
      </div>
    </Context.Provider >

  );
}

export default App;
