import React from 'react'

const Label = ({ fun, label, className }) => {
  return (
    <label htmlFor="" onClick={fun} className={className}>{label}</label>
  )
}

export default Label
