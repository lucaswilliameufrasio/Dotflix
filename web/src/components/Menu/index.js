import React from 'react'
import { Link } from 'react-router-dom'

import Button from '../Button'

import logo from '../../assets/logo.png'

import './styles.css'

function Menu() {
  return (
    <nav className="menu-container">
      <Link to="/">
        <img className="menu-logo" src={logo} alt="Dotflix logo" />
      </Link>

      <Button as={Link} className="menu-buttonlink" to="/cadastro/video">
        Novo vídeo
      </Button>
    </nav>
  )
}

export default Menu
