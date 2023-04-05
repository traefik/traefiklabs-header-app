import React, { ReactNode } from 'react'
import styled from 'styled-components'
import { Box, Text, Heading } from '@containous/faency'
import Link from 'components/Link'
import ArrowLink from 'components/nav/ArrowLink'

type NavProductProps = {
  logo: ReactNode
  title: string
  titleHtml?: ReactNode
  description: string
  url: string
  color: string
  bgColor?: string
  links?: {
    title: string
    url: string
    external: boolean
    icon: ReactNode
  }[]
}

const Product = ({ logo, title, titleHtml, description, url, links, color, bgColor }: NavProductProps) => (
  <Box sx={{ p: 40, backgroundColor: bgColor || '#fff' }}>
    <Box>{logo}</Box>
    {titleHtml || (
      <Heading
        as="h2"
        sx={{
          fontSize: '20px',
          mt: '12px',
          lineHeight: 1.33,
          letterSpacing: 0,
          fontWeight: 700,
          fontFamily: 'inherit',
        }}
      >
        {title}
      </Heading>
    )}
    <Text as="p" sx={{ fontSize: '16px', mt: 1, lineHeight: 1.33, color: '#677581', whiteSpace: 'nowrap' }}>
      {description}
    </Text>
    <ArrowLink url={url} icon="arrow" iconHoverTransform={true} color={color} mt={`10px`}>
      Learn more
    </ArrowLink>
    <Line />
    <Links>
      {links &&
        links.map((link) => (
          <li key={title + link.title}>
            {link.external ? (
              <a href={link.url}>
                {link.icon}
                {link.title}
              </a>
            ) : (
              <Link href={link.url}>
                {link.icon}
                {link.title}
              </Link>
            )}
          </li>
        ))}
    </Links>
  </Box>
)

const Line = styled.div`
  width: 100%;
  height: 1px;
  margin: 16px 0 19px;
  background: linear-gradient(to right, #ccd1d5 0%, rgba(204, 209, 213, 0) 100%);
`

const Links = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    padding: 0;
    margin: 0 0 8px;

    &:last-child {
      margin: 0;
    }
  }

  a {
    display: flex;
    align-items: center;
    font-size: 14px;
    font-weight: 500;
    line-height: 1.14;
    color: #66747f;
    text-decoration: none;

    &:hover {
      color: #505769;
    }

    svg {
      margin-right: 8px;
    }
  }
`

export default Product
