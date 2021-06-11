import React, {useLayoutEffect, useRef, useState} from 'react'
import UseFetch from "../../hooks/useFetch";
import useCounter from "../../hooks/useCounter";

import './layout.css'

const Layout = () => {

  const {counter, increment} = useCounter(1)

  const {loading, data} = UseFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`)

  const {quote} = !!data && data[0]

  const paragraph = useRef();


  const [boxSize, setBoxSize] = useState();

  useLayoutEffect(() => {
    setBoxSize(paragraph.current.getBoundingClientRect())


  }, [quote]);


  return (
    <div>

      <h1>LayoutEffec</h1>
      <hr/>


      <blockquote className='blockquote text-right'>
        <p ref={paragraph} className='mb-4'>{quote}</p>
      </blockquote>

      <p>
        {JSON.stringify(boxSize, null, 3)}
      </p>


      <button className='btn btn-primary' onClick={() => increment()}>
        Siguiente
      </button>

    </div>
  )
}

export default Layout
