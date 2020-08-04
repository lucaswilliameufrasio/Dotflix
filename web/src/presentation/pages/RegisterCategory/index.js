import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import PageComposer from '../../components/PageComposer'
import FormField from '../../components/FormField'
import FormButton from '../../components/FormButton'
import Button from '../../components/Button'

import useForm from '../../hooks/useForm'
import categoriesRepository from '../../../data/repositories/categories-repository'

function RegisterCategory() {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    async function fetchCategories() {
      const categoriesFromAPI = await categoriesRepository.getAll()

      setCategories(categoriesFromAPI)
    }

    fetchCategories()
  }, [])

  const initialValues = {
    name: '',
    description: '',
    color: '#FFFFFF'
  }

  const { data, handleChange, clearForm } = useForm(initialValues)

  async function handleSubmit(event) {
    event.preventDefault()

    setCategories((prevState) => [...prevState, data])

    clearForm(initialValues)
  }

  return (
    <PageComposer>
      <h1>Cadastro de Categoria:</h1>

      <form onSubmit={handleSubmit}>
        <FormField
          label="Nome da Categoria"
          name="name"
          value={data.name}
          onChange={handleChange}
        />

        <FormField
          label="Descrição"
          type="textarea"
          name="description"
          value={data.description}
          onChange={handleChange}
        />

        <FormField
          label="Cor"
          type="color"
          name="color"
          value={data.color}
          onChange={handleChange}
        />

        <FormButton type="submit">Cadastrar</FormButton>
      </form>

      <ul>
        {categories.length > 0 &&
          categories.map((item, index) => (
            <li key={`${item.name}${index}`}>
              Nome: {item.name}, Descrição: {item.description}, Cor:{' '}
              {item.color}
            </li>
          ))}
      </ul>

      <Button as={Link} to="/">
        Ir para home
      </Button>
    </PageComposer>
  )
}

export default RegisterCategory
