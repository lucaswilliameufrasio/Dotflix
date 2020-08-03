/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import SlickSlider from 'react-slick'
import PropTypes from 'prop-types'

import { Container } from './styles'

const Slider = ({ children }) => (
  <Container>
    <SlickSlider
      {...{
        slidesToScroll: 1,
        dots: false,
        infinite: true,
        speed: 500,
        centerMode: false,
        variableWidth: true,
        adaptiveHeight: true
      }}
    >
      {children}
    </SlickSlider>
  </Container>
)

Slider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
}

export default Slider
