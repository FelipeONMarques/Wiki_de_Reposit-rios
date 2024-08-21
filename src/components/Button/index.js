import React from 'react'
import { InputContainer } from './styles'

function Button({onClick}) {
  return (
    <InputContainer onClick={onClick}>
        Buscar
    </InputContainer>
  )
}

export default Button