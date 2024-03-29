import styled from 'styled-components'

export const Button = styled.button`
  & {
    height: 80%;
    color: var(--white);
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
    text-align: center;
    line-height: 30%;
  }
  &:hover,
  &:focus {
    opacity: 0.5;
  }

  @media (max-width: 800px) {
    & {
      height: 6%;
      line-height: 90%;
      position: fixed;
      left: 0;
      right: 0;
      bottom: 0;
      background: var(--primary);
      border-radius: 0;
      border: 0;
      text-align: center;
    }
  }
`

export default Button
