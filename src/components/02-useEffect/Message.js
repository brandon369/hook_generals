import React, {useEffect, useState} from 'react'

const Message = () => {


  const [coords, setCoords] = useState({x: 0, y: 0})
  const {x, y} = coords


  useEffect(() => {
    // console.log('Componente Montado')

    const mouseMuve = (e) => {
      // console.log(e)
      const coors = {x: e.x, y: e.y}
      setCoords(coors)
      console.log(coors)
    }

    window.addEventListener('mousemove', mouseMuve)

    return () => {
      // console.log('Componente Des montado')
      window.removeEventListener('mousemove', mouseMuve)
    }

  }, [])

  return (
    <>
      <h3>Eres genial!</h3>
      <p>
        x:{x} y:{y}
      </p>
    </>
  )
}

export default Message
