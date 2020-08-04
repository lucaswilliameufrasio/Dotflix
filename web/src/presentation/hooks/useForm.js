import { useState } from 'react'

function useForm(initialValues) {
  const [data, setData] = useState(initialValues)

  function setValue(key, value) {
    setData({
      ...data,
      [key]: value
    })
  }

  function handleChange(event) {
    setValue(event.target.getAttribute('name'), event.target.value)
  }

  function clearForm() {
    setData(initialValues)
  }

  return {
    data,
    handleChange,
    clearForm
  }
}

export default useForm
