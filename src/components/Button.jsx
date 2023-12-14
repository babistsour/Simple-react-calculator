import React, { useState } from 'react'

export const Button = ({value, onClick, style}) => {
  

  return (
    <button style={style} onClick={() => onClick(value)}>{value}</button>
  )
}
 