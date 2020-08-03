import api from '../services/api'

async function getAll() {
  const response = await api.get('categories')

  if (response.status === 200) {
    const data = response.data

    return data
  }

  throw new Error('Oops, houve algum problema ao buscar os dados')
}

async function getAllWithVideos() {
  const response = await api.get('categories?_embed=videos')

  if (response.status === 200) {
    const data = response.data

    return data
  }

  throw new Error('Oops, houve algum problema ao buscar os dados')
}

export default {
  getAll,
  getAllWithVideos
}
