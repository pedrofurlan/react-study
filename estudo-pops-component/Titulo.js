import React from 'react'

const Titulo = (props) => {
  return (
    <h1 style={{color:props.color}}>{props.text}</h1>
  )
}

export default Titulo