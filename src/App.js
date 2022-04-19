import React, { useEffect, useReducer } from "react";
import BasicInput from './components/BasicInput'
import { Context } from "./components/Context";
import { reducer } from "./components/Reducer";
import TodoItem from './components/TodoItem/TodoItem'

function App() {

  const [state, dispatch] = useReducer(reducer, JSON.parse(localStorage.getItem('posts')) || [])


  useEffect(() => {
    localStorage.setItem('posts', JSON.stringify(state))
  }, [state])


  const addPost = (userInput) => {
    if (userInput) {
      dispatch({
        type: 'add',
        payload: userInput
      })

    }
  }



  return (
    <Context.Provider value={{ dispatch, addPost }}>
      <div className="App">
        <h1 className="title">TODO :{state.length}</h1>
        <BasicInput />
        {state.map(post => <TodoItem post={post} key={post.id} />)}
      </div>
    </Context.Provider >
  );
}

export default App;
