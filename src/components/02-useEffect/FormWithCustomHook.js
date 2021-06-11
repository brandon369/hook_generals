import React, {useEffect} from 'react'
import './effects.css'
import UseForm from "../../hooks/useForm";

const SimpleFormHook = () => {

  const [formValues, handleInputChange] = UseForm({
    name: '',
    email: '',
    password: ''
  })

  const {name, email, password} = formValues

  useEffect(() => {
    console.log('cambio el email')
  }, [email])

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formValues)
  }

  return (


    <form onSubmit={handleSubmit}>
      <h1>Foorm with Hook</h1>
      <hr/>

      <div className='form-group'>

        <input
          type='text'
          name='name'
          className='form-control'
          placeholder='Tu nombre'
          autoComplete='off'
          value={name}
          onChange={handleInputChange}
        />
        <input
          type='email'
          name='email'
          className='form-control'
          placeholder='Tu Email'
          autoComplete='off'
          value={email}
          onChange={handleInputChange}
        />

        <input
          type='password'
          name='password'
          className='form-control'
          placeholder='*****'
          value={password}
          onChange={handleInputChange}
        />

        <button type='submit' className='btn btn-primary'>Guardar</button>


      </div>
    </form>
  )
}

export default SimpleFormHook
