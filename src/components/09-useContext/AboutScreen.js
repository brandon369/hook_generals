import React, {useContext} from 'react'
import {UserContext} from "./UserContext";

const AboutScreen = () => {
  const {user, setUser} = useContext(UserContext)

  console.log('hola')

  return (
    <div>
      <h1>About</h1>
      <pre className='container'>
      {JSON.stringify(user, null, 3)}
      </pre>

      <button
        className='btn btn-primary'
        onClick={() => setUser({})}
      >
        Salirr
      </button>
    </div>
  )
}

export default AboutScreen
