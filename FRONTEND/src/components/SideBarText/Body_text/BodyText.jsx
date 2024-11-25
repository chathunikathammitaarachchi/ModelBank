import React from 'react'
import './BodyText.css'

function BodyText(props) {

  return (
    <div>
      <p className='text'>{props.text}</p>
    </div>
  )
}

export default BodyText