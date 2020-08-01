import React from 'react'
import Button from '../Button'

import logo from '../../assets/logo.png'

import './styles.css'

function Menu() {
  return (
    <nav className="menu-container">
      <a href="/">
        <img className="menu-logo" src={logo} alt="Dotflix logo" />
      </a>

      <Button as="a" className="menu-buttonlink" href="/">
        Novo vídeo
      </Button>
    </nav>
  )
}

export default Menu
