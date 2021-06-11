import React,{useState} from 'react'
import useCounter from "../../hooks/useCounter";
import Small from "./Small";

const Memorize = () => {


  const {counter,increment} = useCounter(10)
  const [show, setShow] = useState(true);

  return (
    <div>
      <h1>counter <Small val={counter}/></h1>
      <hr/>

      <button onClick={() => increment()} className='btn btn-primary'>
        +1
      </button>

      <button onClick={() => setShow(!show)} className='btn btn-secondary'>
        hide / show {JSON.stringify(show)}
      </button>

    </div>
  )
}

export default Memorize
