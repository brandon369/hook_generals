import React from 'react'
import UseForm from "../../hooks/useForm";

const TodoAdd = ({handleAddTodo}) => {

  const [{description}, handleInputChanges, reset] = UseForm({
    description: ''
  })


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

    handleAddTodo(newTodo)
    reset()


  }

  return (
    <>
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
    </>
  )
}

export default TodoAdd
