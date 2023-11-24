import React from 'react'

const Dl = ({ tittle, info, className, id }) => {
  return (
    <dl className={className} id={id}>
        <dt>{tittle}</dt>
        <dd>{info}</dd>
    </dl>
  )
}

export default Dl
