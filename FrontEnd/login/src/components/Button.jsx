import React from 'react'

const Button = ({ label, fun }) => {
  return (
    <button onClick={fun}>{label}</button>
  )
}

export default Button
