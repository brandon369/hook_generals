import {useState} from 'react'

const UseForm = (initiaState = {}) => {

   const [values, setValues] = useState(initiaState)

   const handleInputChange = ({target}) =>{
      setValues({
         ...values,
         [target.name]: target.value
      })
   }

   return[values, handleInputChange]


}

export default UseForm
