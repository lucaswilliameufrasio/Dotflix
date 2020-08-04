import React, { useState, useEffect } from 'react'

import BannerMain from '../../components/BannerMain'
import Carousel from '../../components/Carousel'
import Loading from '../../components/Loading'
import NoVideosFound from './components/NoVideosFound'
import PageComposer from '../../components/PageComposer'

import categoryRepository from '../../../data/repositories/categories-repository'

interface IVideos {
  id: number
  categoryId: number
  title: string
  url: string
}

interface ICategories {
  id: number
  title: string
  color: string
}

interface ICategoriesWithVideos extends ICategories {
  videos: Array<IVideos>
}

function Home() {
  const [categoriesWithVideos, setCategoriesWithVideos] = useState<
    Array<ICategoriesWithVideos>
  >([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchData() {
      const data = await categoryRepository.getAllWithVideos()

      setCategoriesWithVideos(data)
      setLoading(false)
    }

    fetchData()
  }, [])

  if (loading) {
    return <Loading />
  }

  if (
    (categoriesWithVideos.length === 0 &&
      categoriesWithVideos[0].videos.length === 0) ||
    (categoriesWithVideos.length > 0 &&
      categoriesWithVideos[0].videos.length === 0)
  ) {
    return <NoVideosFound />
  }

  return (
    <PageComposer paddingAll={0}>
      <BannerMain
        videoTitle={categoriesWithVideos[0].videos[0].title}
        url={categoriesWithVideos[0].videos[0].url}
        videoDescription={'Vídeo preferido'}
      />

      {categoriesWithVideos.map((category) => {
        if (category.videos.length > 0) {
          return (
            <Carousel
              key={`carouselId${category.id}`}
              category={category}
              ignoreFirstVideo={category.videos.length > 5}
            />
          )
        }

        return <> </>
      })}
    </PageComposer>
  )
}

export default Home
