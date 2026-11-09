import React from 'react'
import styled from 'styled-components'
import Link from 'components/Link'
import { Box, Text } from '@containous/faency'
import { ReactComponent as ArrowRight } from '../../images/arrow-right.svg'

const Links = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    margin: 0 0 16px;
    padding: 0;

    &:last-child {
      margin-bottom: 0;
    }
  }

  a {
    display: inline-flex;
    align-items: center;
    font-size: 16px;
    line-height: 1.38;
    font-weight: 500;
    color: #03192d;
    text-decoration: none;

    svg {
      color: #677581;
    }

    i svg {
      opacity: 0;
      transition: opacity 0.2s ease-in-out;
    }

    &:hover {
      color: #000;
      text-decoration: none;

      svg {
        color: #000;
      }

      i svg {
        opacity: 1;
      }

      span: {
        color: #505769;
      }
    }
  }

  .menu-item-button {
    padding: 12px;
    width: 100%;
    font-size: 16px;
    height: 40px;
    border-radius: 8px;
    white-space: nowrap;
    background: rgb(244, 245, 246);

    i {
      display: none;
    }
  }

  span {
    font-size: 16px;
    font-weight: normal;
    color: #677581;
  }

  svg {
    overflow: visible;
  }
`

type MenuColumnProps = {
  title: string
  children: React.ReactNode
  // Extra content shown under the links (e.g. a featured card)
  footer?: React.ReactNode
}

export const Column: React.FC<MenuColumnProps> = ({ title, children, footer }) => (
  <Box>
    <Text
      as="p"
      sx={{
        mb: '16px',
        fontSize: '12px',
        fontWeight: 500,
        lineHeight: 1.33,
        color: '#818c96',
        letterSpacing: '2.18px',
      }}
    >
      {title.toUpperCase()}
    </Text>
    <Links>{children}</Links>
    {footer}
  </Box>
)

type MenuColumnLinkProps = {
  href: string
  external?: boolean
  title: string | React.ReactNode
  logo?: React.ReactNode
  description?: string
  className?: string
}

export const Item: React.FC<MenuColumnLinkProps> = ({
  href,
  external,
  title,
  logo,
  description,
  className,
  ...props
}) => (
  <li>
    {external ? (
      <Link href={href} target="_self" className={className} {...props}>
        {logo ? (
          <Box sx={{ display: 'inline-flex', paddingTop: '5px' }}>
            {logo}
            <Box sx={{ ml: '15px', maxWidth: '290px' }}>
              <Text as="p">{title}</Text>
              <Text>{description || ''}</Text>
            </Box>
          </Box>
        ) : (
          title
        )}
        <i>
          <ArrowRight style={{ marginLeft: 4, display: 'inline-block', width: 16 }} />
        </i>
      </Link>
    ) : (
      <Link href={href} className={className} {...props}>
        {title}
      </Link>
    )}
  </li>
)
