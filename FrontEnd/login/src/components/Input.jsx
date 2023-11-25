import React from 'react'

const Input = ({ type, ref, placeholder }) => {
  return (
    <input type={type} placeholder={placeholder} ref={ref}/>
  )
}

export default Input
