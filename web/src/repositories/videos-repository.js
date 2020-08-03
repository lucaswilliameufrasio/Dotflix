import api from '../services/api'

async function getAll() {
  const response = await api.get('videos')
  if (response.status === 200) {
    const data = response.data

    return data
  }

  throw new Error('Oops, houve algum problema ao buscar os dados')
}

async function create(data) {
  try {
    const categoryId = await api.get(`categories?title=${data.categoryId}`)

    if (categoryId.status === 200) {
      data.categoryId = categoryId.data[0].id

      await api.post('videos', data)

      return 'Cadastro realizado com sucesso!'
    }
  } catch (error) {
    throw new Error('Oops, houve algum problema ao buscar os dados')
  }
}

export default {
  getAll,
  create
}
