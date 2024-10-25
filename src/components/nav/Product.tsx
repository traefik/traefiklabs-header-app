import React, { ReactNode } from 'react'
import styled from 'styled-components'
import { Box, Text, Heading } from '@containous/faency'
import Link from 'components/Link'

type NavProductProps = {
  title: string
  description?: string
  links?: {
    title: string
    url: string
    icon: any
    description: string
    tagColor?: string
    tag?: string
    external: boolean
  }[]
  bgImage: string
}

type NavbarLinkProps = {
  url: string
  external: boolean
  children: ReactNode
}

const Product = ({ bgImage, title, description, links }: NavProductProps) => (
  <Box sx={{ p: '24px', backgroundColor: '#fff', position: 'relative' }}>
    <img
      src={bgImage}
      width={320}
      height={84}
      alt=""
      style={{
        position: 'absolute',
        paddingBottom: '0px',
        bottom: '0',
        left: '0',
        right: '0',
      }}
    />
    <Heading
      as="span"
      sx={{
        fontSize: '13px',
        variant: 'default',
        lineHeight: '1.23',
        color: '03192d',
        letterSpacing: '2.36px',
        fontWeight: '500',
        textTransform: 'uppercase',
        fontFamily: 'Rubik',
      }}
    >
      {title}
    </Heading>
    <Text as="p" sx={{ fontSize: '14px', lineHeight: '1.14', color: '#4e5e6c', margin: '8px 0px 16px' }}>
      {description}
    </Text>
    <Links>
      {links &&
        links.map((link) => (
          <li key={title + link.title}>
            <NavbarLink external={link.external} url={link.url}>
              <NavLinkIcon>{link.icon}</NavLinkIcon>
              <div>
                <NavLinkTitle>
                  <span>{link.title}</span>
                  {link.tag && <NavLinkTag tagColor={link.tagColor}>{link.tag}</NavLinkTag>}
                </NavLinkTitle>
                <NavLinkDescription>{link.description}</NavLinkDescription>
              </div>
            </NavbarLink>
          </li>
        ))}
    </Links>
  </Box>
)

const NavbarLink: React.FC<NavbarLinkProps> = ({ children, external, url }) => {
  if (external) {
    return (
      <a href={url} style={{ textDecoration: 'none', padding: '8px', borderRadius: '8px' }}>
        {children}
      </a>
    )
  }

  return (
    <Link href={url} style={{ textDecoration: 'none', padding: '8px', borderRadius: '8px' }}>
      {children}
    </Link>
  )
}

const Links = styled.ul`
  list-style: none;
  padding: 0;
  margin: 16px 0 0;
  position: relative;
  margin li {
    padding: 0;
    margin-bottom: 13px;

    &:last-child {
      margin: 0;
    }
  }

  a {
    display: flex;
    align-items: start;
    font-size: 1px;
    font-weight: 500;
    line-height: 1.14;
    color: #4e5e6c;
    text-decoration: none;

    &:hover {
      background-color: #f4f5f6;
    }
  }
`
const NavLinkIcon = styled.div`
  margin-right: 16px;
  flex-shrink: 0;
  background-color: #ffffff;
  padding: 4px;
  box-shadow: 0 4px 6px 0 rgba(0, 0, 0, 0.06), 0 2px 4px 0 rgba(0, 0, 0, 0.06), 0 1px 2px -1px rgba(0, 0, 0, 0.1);
  border-radius: 6px;
`

const NavLinkTitle = styled.div`
  display: flex;
  gap: 2px;
  align-items: center;
  font-size: 16px;
  line-height: 1.38;
  font-weight: 500;
  color: #03192d;
`

const NavLinkDescription = styled.span`
  font-size: 14px;
  line-height: 1.14;
  display: block;
  font-weight: 400;
  color: '#4e5e6c';
`

const NavLinkTag = styled.div<{ tagColor?: string }>`
  font-size: 11px;
  font-weight: 500;
  line-height: normal;
  height: 16px;
  border-radius: 2px;
  color: ${({ tagColor }) => tagColor || '#7f8c2b'};
  margin-left: 8px;
  padding: 1px 3px 1px;
  border: solid 1px ${({ tagColor }) => (tagColor ? 'rgba(177, 64, 245, 0.5)' : 'rgba(127, 140, 43, 0.5)')};
  background-color: ${({ tagColor }) => (tagColor ? 'rgba(177, 64, 245, 0.15)' : 'rgba(127, 140, 43, 0.15)')};
`

export default Product
