import styled from 'styled-components'

export const Button = styled.button`
  & {
    color: var(--white);
    background: var(--black);
    border: 1px solid var(--white);
    box-sizing: border-box;
    cursor: pointer;
    padding: 16px 24px;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    outline: none;
    border-radius: 5px;
    text-decoration: none;
    display: inline-block;
    transition: opacity 0.3s;
  }
  &:hover,
  &:focus {
    opacity: 0.5;
  }

  @media (max-width: 800px) {
    & {
      width: 100%;
      text-align: center;
    }
  }
`

export default Button
