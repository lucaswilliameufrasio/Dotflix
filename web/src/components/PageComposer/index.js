import React from 'react'
import PropTypes from 'prop-types'

import { Main } from './styles'
import Footer from '../Footer'
import Menu from '../Menu'

function PageComposer({ children, paddingAll }) {
  return (
    <>
      <Menu />
      <Main>{children}</Main>
      <Footer />
    </>
  )
}

PageComposer.defaultProps = {
  paddingAll: 10
}

PageComposer.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  paddingAll: PropTypes.number
}

export default PageComposer
