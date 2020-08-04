import React from 'react'
import ReactDOM from 'react-dom'
import './presentation/styles/reset.css'
import Routes from './main/routes/routes'

ReactDOM.render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>,
  document.getElementById('root')
)
