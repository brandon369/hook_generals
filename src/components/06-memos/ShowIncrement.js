import React from 'react'

const ShowIncrement = React.memo(({increment}) => {
  console.log('Holi :V')

  return (
    <button className='btn tbn-primary'
    onClick={() =>{
      increment(5)
    }}
    >
      Incrementar
    </button>
  )
})

export default ShowIncrement
