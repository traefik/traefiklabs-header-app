import React, { useState, useEffect, useMemo } from 'react'
import { Nav as FaencyNav, NavContainer as FaencyNavContainer, theme, Flex, Box } from '@containous/faency'
import styled, { createGlobalStyle } from 'styled-components'
import Logo from 'components/Logo'
import Link from 'components/Link'
import SkipLink from 'components/Link/Skip'
import MainNav from 'components/nav/MainNav'
import DrawerNav from 'components/nav/DrawerNav'

const Nav = styled(FaencyNav)`
  position: fixed;
  width: 100%;
  z-index: 99;
  top: 0;
  left: 0;
  font-family: Rubik, sans-serif;
  background-color: transparent;
`

const NavContainer = styled(FaencyNavContainer)<{ scrolled?: boolean }>`
  display: flex;
  flex-grow: 1;
  align-items: center;
  margin: 0;
  justify-content: center;
  width: 100%;
  background-color: ${theme.colors.menuBg};
  box-shadow: 0 0 7px 0 #00000021;
  height: ${({ scrolled }) => (scrolled ? '52px' : '64px')};
`

const NavButton = styled.a`
  color: ${theme.colors.dark};
  font-weight: 500;
  text-decoration: none;
  border-radius: 8px;
  border: 2px solid;
  transition: all 0.2s;
  padding: 7px 15px;
  text-align: center;
  font-size: 16px;
  line-height: 16px;
  margin-left: 16px;

  &:hover {
    background-color: ${theme.colors.blues[7]};
    border-color: ${theme.colors.blues[7]};
    color: ${theme.colors.menuBg};
  }

  @media (max-width: 700px) {
    display: none;
  }
`

const NavButtonPrimary = styled.a`
  background-color: ${theme.colors.blues[7]};
  color: ${theme.colors.menuBg};
  font-weight: 500;
  text-decoration: none;
  border-radius: 8px;
  border: 2px solid;
  border-color: ${theme.colors.blues[7]};
  transition: all 0.2s;
  padding: 7px 15px;
  text-align: center;
  font-size: 16px;
  line-height: 16px;
  margin-left: 16px;

  &:hover {
    background-color: ${theme.colors.blues[7]};
    border-color: ${theme.colors.blues[7]};
    color: ${theme.colors.menuBg};
  }

  @media (max-width: 700px) {
    display: none;
  }
`

/* Temporary disabled */
/*
const NavIconButton = styled.a`
  padding: 7px;
  border: none;
  background: none;
  border-radius: 8px;
  cursor: pointer;
  text-decoration: none;
  color: ${theme.colors.dark};

  &:hover {
    color: rgb(3, 25, 45);
    background: rgb(248, 250, 255);
  }
`
*/

// HACK: Menu component is adding inline styles to the body avoiding to use onMouseEnter event correctly
// Side effect: Menu component is now stateless, DropdownMenu is not working anymore (stateful component)
const GlobalStyle = createGlobalStyle`
  body {
    pointer-events: auto !important;
    overflow-x: hidden;
    overflow-y: auto !important;
    padding: 0 !important;
  }
`

const Hamburger = styled.div`
  display: block;

  @media (min-width: 1150px) {
    display: none;
  }
`

const Header = ({ product }: { product?: string }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const [isHeaderScrolled, setHeaderScrolled] = useState(false)

  const demoLink = useMemo(() => {
    if (product === 'hub') return 'https://info.traefik.io/traefik-hub-signup'

    return 'https://info.traefik.io/en/request-demo'
  }, [product])

  useEffect(() => {
    const adjustHeaderHeight = function () {
      const breakpoint = 40

      if (document.body.scrollTop > breakpoint || document.documentElement.scrollTop > breakpoint) {
        setHeaderScrolled(true)
      } else {
        setHeaderScrolled(false)
      }
    }
    window.addEventListener('scroll', adjustHeaderHeight)
    return () => {
      window.removeEventListener('scroll', adjustHeaderHeight)
    }
  }, [])
  return (
    <>
      <GlobalStyle />
      <SkipLink />
      <Nav>
        <NavContainer scrolled={isHeaderScrolled}>
          <Flex
            sx={{
              alignItems: 'center',
              justifyContent: 'space-between',
              height: '100%',
              width: '100%',
              maxWidth: '1274px',
              padding: ['0 20px', '0 25px'],
            }}
          >
            <Flex sx={{ alignItems: 'center', height: '100%' }}>
              <Box>
                <Link href="https://traefik.io" aria-label="Traefik Labs">
                  <Logo traefikLabs />
                </Link>
              </Box>
              <MainNav />
            </Flex>
            <Flex sx={{ alignItems: 'center', height: '100%' }}>
              <Flex sx={{ alignItems: 'center' }}>
                {/* <NavIconButton href="https://traefik.io/search/">
                  <svg
                    height="22"
                    width="22"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    focusable="false"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="StyledIconBase-ea9ulj-0 jZGNBW"
                  >
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" x2="16.65" y1="21" y2="16.65"></line>
                  </svg>
                </NavIconButton> */}
                <NavButton href="https://traefik.io/pricing/">Get Pricing</NavButton>
                <NavButtonPrimary href={demoLink}>Request Demo</NavButtonPrimary>
              </Flex>
              <Hamburger className="drawer">
                <Box
                  className={'drawer-handle ' + (isDrawerOpen ? 'open' : '')}
                  onClick={() => setIsDrawerOpen(!isDrawerOpen)}
                  m={['0 3px -13px 10px', '0 3px -13px 24px']}
                >
                  <span className="first"></span>
                  <span className="second"></span>
                </Box>
              </Hamburger>
            </Flex>
          </Flex>
        </NavContainer>
        <DrawerNav isDrawerOpen={isDrawerOpen} />
      </Nav>
    </>
  )
}

export default Header
