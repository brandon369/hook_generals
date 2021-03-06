import React, {useEffect, useMemo, useState} from 'react'
import './effects.css'
import Message from "./Message";

const SimpleForm = () => {

  const [formState, setFormState] = useState({
    name: '',
    email: ''
  })

  const {name, email} = formState


  useEffect(() => {
    console.log('hey')
  }, [])

  useEffect(() => {
    console.log('formState cambio')
  }, [formState])


  useEffect(() => {
    console.log('email cambio')
  }, [email])


  const handleInputChange = ({target}) => {
    setFormState({
      ...formState,
      [target.name]: target.value
    })
  }


  return (


    <>
      <h1>useEffect</h1>
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

        {name === '123' && <Message/>}

      </div>
    </>
  )
}

export default SimpleForm
