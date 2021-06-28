import React,{useState, useMemo} from 'react'
import useCounter from "../../hooks/useCounter";
import {procesoPesado} from "../../helpers/procesoPesado";

const MemoHook = () => {


  const {counter,increment} = useCounter(5000)
  const [show, setShow] = useState(true);






  const memoProceso =  useMemo(() => procesoPesado(counter), [counter]);

  return (
    <div>
      <h1>Memo HOok</h1>
      <h3>Counter <small>  {counter}</small></h3>
      <hr/>

      <p>{memoProceso}</p>

      <button onClick={() => increment()} className='btn btn-primary'>
        +1
      </button>

      <button onClick={() => setShow(!show)} className='btn btn-secondary'>
        hide / show {JSON.stringify(show)}
      </button>

    </div>
  )
}

export default MemoHook
