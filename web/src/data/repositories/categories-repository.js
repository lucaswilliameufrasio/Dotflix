import httpClient from '../../infra/http/axios-http-client/axios-http-client'

async function getAll() {
  const response = await httpClient.get('categories')

  if (response.status === 200) {
    const data = response.data

    return data
  }

  throw new Error('Oops, houve algum problema ao buscar os dados')
}

async function getAllWithVideos() {
  const response = await httpClient.get('categories?_embed=videos')

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
