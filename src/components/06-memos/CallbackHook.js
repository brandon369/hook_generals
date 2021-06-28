import React, {useCallback, useState, useEffect} from 'react'
import ShowIncrement from "./ShowIncrement";

const CallbackHook = () => {

  const [counter, setCounter] = useState(10);

  // const increment = () => {
  //   setCounter(counter + 1)
  // }

   const increment =  useCallback( (num)=> {
    setCounter(c => c + num)

  } , [setCounter])

  useEffect(() => {
    console.log(' hola')
    // ????
  }, [increment]);



  return (
    <div>
      <h1> useCallback Hook {counter}</h1>
      <hr/>
      <ShowIncrement increment={increment}/>



    </div>
  )
}

export default CallbackHook
