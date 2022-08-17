import styled from 'styled-components'
import { theme } from '@containous/faency'
import { MouseEventHandler } from 'react'

export const StyledLink = styled.a`
  color: ${theme.colors.blue};
  font-weight: 600;
  text-decoration: inherit;

  &:hover {
    text-decoration: underline;
  }
`

type LinkProps = {
  children: React.ReactNode
  href: string
  target?: string
  style?: React.CSSProperties
  scroll?: boolean
  onClick?: MouseEventHandler<HTMLAnchorElement>
  className?: string
}

const Link = ({ children, href, scroll = true, ...props }: LinkProps) => {
  return (
    <StyledLink href={href} target="_blank" {...props}>
      {children}
    </StyledLink>
  )
}

export default Link
