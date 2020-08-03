import styled, { css } from 'styled-components'

export const Main = styled.main`
  background-color: var(--black);
  color: var(--white);
  flex: 1;
  padding-top: 50px;
  padding-left: 5%;
  padding-right: 5%;
  ${({ paddingAll }) =>
    css`
      padding: ${paddingAll};
    `}

  @media (max-width: 800px) {
    padding-bottom: 20px;
  }
`
