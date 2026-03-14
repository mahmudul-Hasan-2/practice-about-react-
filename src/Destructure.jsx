import React from 'react'

export function Destructure({ richest }) {
 
  const {name, currentNetWorth} = richest;
  
  return (
    <div className='card'>
      <h2>{name}</h2>
      <h3>{currentNetWorth}</h3>
    </div>
  )
}
