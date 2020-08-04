import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import PageComposer from '../../components/PageComposer'
import FormField from '../../components/FormField'
import FormButton from '../../components/FormButton'
import Button from '../../components/Button'

import useForm from '../../hooks/useForm'
import categoriesRepository from '../../../data/repositories/categories-repository'
import videosRepository from '../../../data/repositories/videos-repository'

function RegisterVideo() {
  const [categories, setCategories] = useState([])
  const categoriesForDataField = categories.map(({ title }) => {
    const value = title

    return {
      value
    }
  })

  useEffect(() => {
    async function fetchCategories() {
      const categoriesFromAPI = await categoriesRepository.getAll()

      setCategories(categoriesFromAPI)
    }

    fetchCategories()
  }, [])

  const initialValues = {
    categoryId: '',
    title: '',
    url: ''
  }

  const { data, handleChange, clearForm } = useForm(initialValues)

  async function handleSubmit(event) {
    event.preventDefault()

    try {
      await videosRepository.create(data)

      console.log(data)

      clearForm(initialValues)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <PageComposer>
      <h1>Cadastro de Vídeo:</h1>

      <form onSubmit={handleSubmit}>
        <FormField
          label="Selecione uma Categoria"
          name="categoryId"
          value={data.categoryId}
          onChange={handleChange}
          suggestions={categoriesForDataField}
        />

        <FormField
          label="Título do Vídeo"
          name="title"
          value={data.title}
          onChange={handleChange}
        />

        <FormField
          label="Link do Vídeo"
          name="url"
          value={data.url}
          onChange={handleChange}
        />

        <FormButton type="submit">Cadastrar</FormButton>
      </form>

      <Button as={Link} to="/register/category">
        Cadastrar de Categoria
      </Button>
    </PageComposer>
  )
}

export default RegisterVideo
