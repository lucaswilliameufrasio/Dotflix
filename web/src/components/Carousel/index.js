import React from 'react'
import PropTypes from 'prop-types'

import { VideoCardGroupContainer, Title, Description } from './styles'

import VideoCard from './components/VideoCard'
import Slider from './components/Slider'
import { SliderItem } from './components/Slider/styles'

function Carousel({ ignoreFirstVideo, category }) {
  const categoryTitle = category.title
  const categoryColor = category.cor
  const categoryDescription = category.description
  const videos = category.videos

  return (
    <VideoCardGroupContainer>
      {categoryTitle && (
        <>
          <Title style={{ backgroundColor: categoryColor || 'red' }}>
            {categoryTitle}
          </Title>
          {categoryDescription && (
            <Description>{categoryDescription}</Description>
          )}
        </>
      )}
      <Slider>
        {videos.map((video, index) => {
          if (ignoreFirstVideo && index === 0) {
            return null
          }

          return (
            <SliderItem key={video.title}>
              <VideoCard
                videoTitle={video.title}
                videoURL={video.url}
                categoryColor={categoryColor}
              />
            </SliderItem>
          )
        })}
      </Slider>
    </VideoCardGroupContainer>
  )
}

Carousel.propTypes = {
  ignoreFirstVideo: PropTypes.bool,
  category: PropTypes.arrayOf(PropTypes.object)
}

export default Carousel
