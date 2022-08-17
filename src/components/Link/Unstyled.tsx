import styled from 'styled-components'
import { theme } from '@containous/faency'

const UnstyledLink = styled.a`
  color: inherit;
  text-decoration: none;
  border-radius: inherit;
  &:hover {
    cursor: pointer;
    color: ${theme.colors.blue};
    outline: 1px solid ${theme.colors.blue};
  }
  :focus {
    outline: 2px solid ${theme.colors.blue};
  }
`

export default UnstyledLink
