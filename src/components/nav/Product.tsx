import React, { ReactNode } from 'react'
import styled from 'styled-components'
import { Box, Text, Heading } from '@containous/faency'
import Link from 'components/Link'

type NavProductProps = {
  title?: string
  description?: string
  links?: {
    title: string
    url: string
    icon: any
    description: string
    external: boolean
    badge?: string
  }[]
  subLinks?: {
    title: string
    url: string
    icon: ReactNode
    external: boolean
    badge?: string
  }[]
  bgImage?: string
}

type NavbarLinkProps = {
  url: string
  external: boolean
  children: ReactNode
  styles?: any
}

const Product = ({ bgImage, title, description, links, subLinks = [] }: NavProductProps) => (
  <Box sx={{ p: title ? '24px' : '16px 16px 48px', backgroundColor: '#fff', position: 'relative' }}>
    {bgImage && (
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
    )}
    {title && (
      <Heading
        as="p"
        sx={{
          fontSize: '13px',
          variant: 'default',
          lineHeight: '1.23',
          color: '03192d',
          letterSpacing: '2.36px',
          fontWeight: '500',
          textTransform: 'uppercase',
          fontFamily: 'Rubik',
          marginBottom: '16px',
        }}
      >
        {title}
      </Heading>
    )}
    {description && (
      <Text as="p" sx={{ fontSize: '14px', lineHeight: '1.14', color: '#4e5e6c', margin: '8px 0px 16px' }}>
        {description}
      </Text>
    )}
    <Links>
      {links &&
        links.map((link) => (
          <li key={title + link.title}>
            <NavbarLink external={link.external} url={link.url}>
              <NavLinkIcon>{link.icon}</NavLinkIcon>
              <div>
                <NavLinkTitle>
                  <span>{link.title}</span>
                  {link.badge && <NavLinkBadge>{link.badge}</NavLinkBadge>}
                </NavLinkTitle>
                <NavLinkDescription>{link.description}</NavLinkDescription>
              </div>
            </NavbarLink>
          </li>
        ))}
    </Links>
    {subLinks.length ? (
      <SubLinks>
        {subLinks.map((link) => (
          <li key={title + link.title}>
            <NavbarLink external={link.external} url={link.url} styles={{ textDecoration: 'none', display: 'flex' }}>
              <div>{link.icon}</div>
              <div>
                <span>{link.title}</span>
              </div>
            </NavbarLink>
          </li>
        ))}
      </SubLinks>
    ) : null}
  </Box>
)

const NavbarLink: React.FC<NavbarLinkProps> = ({ children, external, url, styles }) => {
  const style = styles ? { ...styles } : { textDecoration: 'none', padding: '8px', borderRadius: '8px' }

  if (external) {
    return (
      <a href={url} style={style}>
        {children}
      </a>
    )
  }

  return (
    <Link href={url} style={style}>
      {children}
    </Link>
  )
}

const Links = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
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
    color: #66747f;
    text-decoration: none;

    &:hover {
      background-color: #f4f5f6;
    }
  }
`

const SubLinks = styled.ul`
  list-style: none;
  padding: 0;
  padding-left: 56px;
  margin: 8px 0 0;
  position: relative;

  li + li {
    margin-top: 8px;
  }

  svg {
    width: 20px;
    height: 20px;
  }

  a {
    font-size: 14px;
    font-weight: 400;
    gap: 8px;
    line-height: 1.43;
    color: #354757;

    &:hover {
      font-weight: 600;
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

const NavLinkBadge = styled.p`
  font-size: 12px;
  font-weight: 600;
  color: rgb(10, 25, 46);
  background-color: rgb(213, 234, 72);
  padding: 1px 5px;
  border-radius: 20px;
  margin: 0 0 0 8px;
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
  font-size: 13px;
  line-height: 1.14;
  display: block;
  font-weight: 400;
  color: '#4e5e6c';
`

export default Product
