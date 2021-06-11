import React, {memo} from 'react'

const Small = memo(({val}) => {

    console.log('volvi')
    return (
      <small>{val}</small>
    )
  }
)
export default Small
