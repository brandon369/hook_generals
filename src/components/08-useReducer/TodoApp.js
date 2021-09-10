import React, {useEffect, useReducer} from 'react'
import {todoReducer} from "./todoReducer";

import './styles.css'
import TodoList from "./TodoList";
import TodoAdd from "./TodoAdd";


// const initialState = [{
//   id: new Date().getTime(),
//   desc: 'Aprender React',
//   done: false
// }]

const init = () => {
// lo que retortne el init es estado inical
  return JSON.parse(localStorage.getItem('todos')) || []
  // return [{
  //   id: new Date().getTime(),
  //   desc: 'Aprender React',
  //   done: false
  // }]
}

const TodoApp = () => {


  const [todos, dispatch] = useReducer(todoReducer, [], init);



  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos]);

  const handleDelete = (todoId) => {

    const action = {
      type: 'delete',
      payload: todoId
    }

    dispatch(action)

  }

  const handleComplete = (todoId) => {
    const action = {
      type: 'complete',
      payload: todoId
    }


    dispatch(action)
  }

  const handleAddTodo = (newTodo) => {

    dispatch({
      type: 'add',
      payload: newTodo
    })

  }



  return (
    <div>
      <h1>TodoApp ({todos.length})</h1>
      <hr/>
      <div className='row'>

        <div className='col-7'>
          <TodoList handleComplete={handleComplete} handleDelete={handleDelete} todos={todos}/>
        </div>
        <div className='col-5'>
          <TodoAdd handleAddTodo={handleAddTodo}/>
        </div>

      </div>

    </div>
  )
}

export default TodoApp
