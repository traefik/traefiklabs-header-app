import React from 'react'
import styled from 'styled-components'
import Link from 'components/Link'
import { Box, Text, theme } from '@containous/faency'

const Links = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    margin: 0 0 18px;
    padding: 0;

    &:last-child {
      margin-bottom: 0;
    }
  }

  a {
    font-size: 16px;
    line-height: 1.38;
    font-weight: 500;
    color: ${theme.colors.dark};
    text-decoration: none;

    &:hover {
      color: #1f56d6;
      text-decoration: none;

      p:first-of-type {
        color: #1f56d6;
        text-decoration: none;
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
        mb: '14px',
        fontSize: '11px',
        fontWeight: 500,
        lineHeight: 1.33,
        color: '#7e89a7',
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
          <Box sx={{ display: 'flex', paddingTop: '5px' }}>
            {logo}
            <Box sx={{ ml: '15px', maxWidth: '290px' }}>
              <Text as="p">{title}</Text>
              <Text>{description || ''}</Text>
            </Box>
          </Box>
        ) : (
          title
        )}
      </Link>
    ) : (
      <Link href={href} {...props}>
        {title}
      </Link>
    )}
  </li>
)
