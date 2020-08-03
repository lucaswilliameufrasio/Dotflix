import React from 'react'
import PropTypes from 'prop-types'

import Footer from '../Footer'
import Menu from '../Menu'

const Main = styled.main`
  background-color: var(--black);
  color: var(--white);
  flex: 1;
  padding-top: 50px;
  padding-left: 5%;
  padding-right: 5%;
`

function PageComposer({ children }) {
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
