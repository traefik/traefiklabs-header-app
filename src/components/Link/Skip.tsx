import styled from 'styled-components'

import { StyledLink } from 'components/Link'

const StyledSkipLink = styled(StyledLink)`
  position: absolute;
  pointer-events: none;
  opacity: 0;
  font-family: sans-serif;
  font-weight: normal;
  color: black;

  &:focus {
    opacity: 1;
    z-index: 1000;
  }
`

const SkipLink = () => <StyledSkipLink href="#main">Skip to content</StyledSkipLink>

export default SkipLink
