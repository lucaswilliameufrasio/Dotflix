import React from 'react'
import PropTypes from 'prop-types'

import { FormFieldContainer, Label, Input } from './styles'

function FormField({
  label = '',
  type = 'text',
  name = '',
  value,
  onChange,
  suggestions
}) {
  const fieldId = `id_${name}`
  const isTypeTextArea = type === 'textarea'
  const tag = isTypeTextArea ? 'textarea' : 'input'
  const hasValue = Boolean(value.length)
  const hasSuggestions = Boolean(suggestions.length)

  return (
    <FormFieldContainer>
      <Label htmlFor={fieldId}>
        <Input
          as={tag}
          id={fieldId}
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          hasValue={hasValue}
          autoComplete={hasSuggestions ? 'off' : 'on'}
          list={hasSuggestions ? `suggestionFor_${fieldId}` : undefined}
        />

        <Label.Text>{label}:</Label.Text>

        {hasSuggestions && (
          <datalist id={`suggestionFor_${fieldId}`}>
            {suggestions.map((suggestion) => (
              <option
                value={suggestion.value}
                key={`suggestionFor_${fieldId}_option${suggestion.value}`}
              >
                {suggestion.value}
              </option>
            ))}
          </datalist>
        )}
      </Label>
    </FormFieldContainer>
  )
}

FormField.defaultProps = {
  type: 'text',
  value: '',
  onChange: () => {},
  suggestions: []
}

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  suggestions: PropTypes.arrayOf(PropTypes.object)
}

export default FormField
