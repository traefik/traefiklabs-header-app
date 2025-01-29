import React from 'react'
import styled from 'styled-components'
import Link from 'components/Link'
import { Box, Text, theme } from '@containous/faency'
import { ReactComponent as ArrowRight } from '../../images/arrow-right.svg'

const Links = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    margin: 0 0 13px;
    padding: 0;

    &:last-child {
      margin-bottom: 0;
    }
  }

  a {
    font-size: 16px;
    line-height: 1.38;
    font-weight: 500;
    color: #354757;
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
}

export const Column: React.FC<MenuColumnProps> = ({ title, children }) => (
  <Box>
    <Text
      as="p"
      sx={{
        mb: '24px',
        fontSize: '11px',
        fontWeight: 500,
        lineHeight: 1.33,
        color: '#03192d',
        letterSpacing: '2.75px',
      }}
    >
      {title.toUpperCase()}
    </Text>
    <Links>{children}</Links>
  </Box>
)

type MenuColumnLinkProps = {
  href: string
  external?: boolean
  title: string | React.ReactNode
  logo?: React.ReactNode
  description?: string
}

export const Item: React.FC<MenuColumnLinkProps> = ({ href, external, title, logo, description, ...props }) => (
  <li>
    {external ? (
      <Link href={href} target="_self" {...props}>
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
      <Link href={href} {...props}>
        {title}
      </Link>
    )}
  </li>
)
