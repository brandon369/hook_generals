import React from 'react'
import TodoListItem from "./TodoListItem";

const TodoList = ({todos, handleComplete, handleDelete}) => {
  return (
    <ul className='list-group list-group-flush'>
      {
        todos.map((todo, i) => (
          <TodoListItem handleDelete={handleDelete} handleComplete={handleComplete} todo={todo} i={i} key={todo.id}
          />
        ))
      }
    </ul>
  )
}

export default TodoList
