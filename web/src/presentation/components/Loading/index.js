import React from 'react'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'

import { Container, InfiniteRotation } from './styles'

import logo from '../../../main/assets/logo.png'

function Loading() {
  return (
    <Container>
      <img className="logo" src={logo} alt="Dotflix logo" />

      <InfiniteRotation>
        <AiOutlineLoading3Quarters color="#FFF" />
      </InfiniteRotation>
    </Container>
  )
}

export default Loading
