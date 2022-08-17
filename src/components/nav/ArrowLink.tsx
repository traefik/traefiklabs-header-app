import React from 'react'
import styled, { css, StyledComponentInnerAttrs, StyledComponentProps } from 'styled-components'
import {
  space,
  color,
  typography,
  SpaceProps,
  ColorProps,
  TypographyProps,
  position,
  PositionProps,
} from 'styled-system'

import { theme } from '@containous/faency'

import Arrow from 'images/ArrowRightIcon'

type LinkProps = SpaceProps &
  ColorProps &
  TypographyProps &
  PositionProps & {
    icon?: string | React.ReactNode
    iconHoverTransform?: boolean
    hover?: {
      color?: string
    }
    url: string
    children?: React.ReactNode
  }

const linkStyles = css<LinkProps>`
  font-size: 16px;
  line-height: 1;
  display: inline-flex;
  align-items: center;
  transition: all 0.2s;
  font-weight: 500;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    color: ${(props) => props.hover?.color};

    ${(props) =>
      props.iconHoverTransform &&
      css`
        ${Icon} {
          transform: translateX(4px);
        }
      `}
  }

  ${space};
  ${color};
  ${typography};
  ${position};
`
const Icon = styled.span`
  width: 24px;
  height: 24px;
  margin-left: 6px;
  transition: transform 0.1s ease-in-out;

  svg {
    width: 100%;
    height: 100%;
  }
`

const defaultLinkProps = (props: LinkProps) => ({
  fontWeight: props.fontWeight || 'medium',
  color: props.color || theme.colors.primary.base,
  hover: {
    color: props.hover?.color || props.color || theme.colors.primary.dark,
  },
  iconHoverTransform: !!props.iconHoverTransform,
})

const ExternalLink: any = styled.a.attrs(defaultLinkProps)`
  ${linkStyles}
`
const ArrowLink = ({ children, icon, url, ...props }: LinkProps) => {
  return (
    <ExternalLink href={url} url={url} {...props}>
      {children}
      {icon && <Icon>{icon === 'arrow' ? <Arrow /> : icon}</Icon>}
    </ExternalLink>
  )
}

ArrowLink.defaultProps = {
  iconHoverTransform: true,
}

export default ArrowLink
