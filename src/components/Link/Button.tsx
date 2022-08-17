import styled from 'styled-components'
import { theme } from '@containous/faency'

const LinkButton = styled.button`
  display: inline-block;
  color: ${theme.colors.blue};
  background: none;
  font-weight: 600;
  text-transform: none;
  text-decoration: inherit;
  border: none;
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
  padding: 0;
  margin: 0;
`

export default LinkButton
