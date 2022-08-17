import styled from 'styled-components'

import { StyledLink } from 'components/Link'

const StyledSkipLink = styled(StyledLink)`
  position: absolute;
  left: 50%;
  top: 0;
  transform: translateY(-100%);

  &:focus {
    transform: translateY(0%);
  }
`

const SkipLink = () => <StyledSkipLink href="#main">Skip to content</StyledSkipLink>

export default SkipLink
