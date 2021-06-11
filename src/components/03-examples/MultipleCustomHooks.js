import React from 'react'
import UseFetch from "../../hooks/useFetch";
import useCounter from "../../hooks/useCounter";

const MultipleCustomHooks = () => {

  const {counter, increment} = useCounter(1)

  const {loading, data} = UseFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`)

  const {author, quote} = !!data && data[0]



  return (
    <div>

      <h1>Breakingbad Quptes</h1>
      <hr/>

      {loading
        ?
        (
          <div className='alert alert-info text-center'>
            Loading
          </div>
        )
        :
        (
          <blockquote className='blockquote text-right'>
            <p className='mb-4'>{quote}</p>
            <footer className='blockquote-footer'>{author}</footer>
          </blockquote>
        )
      }

      <button className='btn btn-primary' onClick={ () =>increment()}>
        Siguiente
      </button>

    </div>
  )
}

export default MultipleCustomHooks
