import React from 'react'
import './counter.css'
import useCounter from "../../hooks/useCounter";

const CounterWithCustomHook = () => {

  const { counter, increment, decrement, reset} = useCounter(100)


  return (
    <>
      <h1>Counter with Hook: {counter}</h1>
      <button className='btn' onClick={ () =>increment(2)}>+ 1</button>
      <button className='btn' onClick={reset}>Reset</button>
      <button className='btn' onClick={() =>decrement(3)}>- 1</button>
      <hr/>
    </>
  )
}

export default CounterWithCustomHook
