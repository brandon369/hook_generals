import React, {useEffect, useReducer} from 'react'
import {todoReducer} from "./todoReducer";

import './styles.css'
import UseForm from "../../hooks/useForm";


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


  const [{description}, handleInputChanges, reset] = UseForm({
    description: ''
  })
  console.log(description)
  console.log(todos)

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


  const handleSubmit = (e) => {
    e.preventDefault()

    if (description.trim().length <= 1) {
      return
    }

    const newTodo = {
      id: new Date().getTime(),
      desc: description,
      done: false

    }

    const action = {
      type: 'add',
      payload: newTodo
    }


    dispatch(action)
    reset()


  }

  return (
    <div>
      <h1>TodoApp ({todos.length})</h1>
      <hr/>
      <div className='row'>

        <div className='col-7'>
          <ul className='list-group list-group-flush'>
            {
              todos.map((todo, i) => (
                <li
                  key={todo.id}
                  className='list-group-item'
                >
                  <p className='text-center'> {i + 1} {todo.desc}</p>
                  <button
                    className='btn btn-danger'
                    onClick={() => handleDelete(todo.id)}
                  >
                    Borrar
                  </button>

                </li>
              ))
            }
          </ul>
        </div>
        <div className='col-5'>
          <h4>Agregar Todo</h4>
          <hr/>

          <form onSubmit={handleSubmit}>
            <input
              type='text'
              className='form-control'
              name='description'
              placeholder='aprender ...'
              autoComplete='off'
              value={description}
              onChange={handleInputChanges}
            />
            <button type='submit' className='btn btn-outline-primary mt-1 btn-block'>
              Agregar
            </button>
          </form>
        </div>

      </div>

    </div>
  )
}

export default TodoApp
