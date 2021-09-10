import React from 'react'

const TodoListItem = ({handleComplete, handleDelete, todo, i}) => {
  return (
    <li
      // key={todo.id}
      className='list-group-item'
    >
      <p
        className={`text-center ${todo.done && 'complete'}`}
        onClick={() => handleComplete(todo.id)}
      >
        {i + 1} {todo.desc}
      </p>
      <button
        className='btn btn-danger'
        onClick={() => handleDelete(todo.id)}
      >
        Borrar
      </button>

    </li>
  )
}

export default TodoListItem
