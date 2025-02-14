import React from 'react'
import styled from 'styled-components'
import { Box, Text, theme } from '@containous/faency'
import ChevronDown from 'components/nav/ChevronDown'
import { space, SpaceProps } from 'styled-system'

type NavItemProps = SpaceProps & {
  name: string
  hasSubmenu?: boolean
  url?: string
  position?: React.CSSProperties
  children?: React.ReactNode
  heighlight?: boolean
}

const NavItem = ({ name, hasSubmenu, url, children, position, heighlight, ...props }: NavItemProps) => {
  if (hasSubmenu) {
    return (
      <Wrapper {...props}>
        <Title aria-haspopup="menu" aria-expanded={false}>
          <TitleWrapper>
            <Text sx={{ fontSize: '14.5px', lineHeight: '14.5px', fontWeight: '500' }}>{name}</Text>
            {heighlight && (
              <IconDot>
                <svg width="10" height="10" viewBox="0 0 10 10">
                  <g transform="translate(-502 -16)" stroke="#AABB39" fill="none" fill-rule="evenodd">
                    <circle stroke-opacity=".5" stroke-width="2" fill="#D5EA48" cx="507" cy="21" r="4"></circle>
                    <circle cx="507" cy="21" r="3.5"></circle>
                  </g>
                </svg>
              </IconDot>
            )}
          </TitleWrapper>
          <Box
            as="span"
            sx={{
              width: '16px',
              height: '16px',
              lineHeight: '16px',
              ml: '3px',
            }}
          >
            <ChevronDown />
          </Box>
        </Title>
        <Menu style={position}>
          <MenuInner>{children}</MenuInner>
        </Menu>
      </Wrapper>
    )
  }

  return (
    <Wrapper {...props}>
      <a href={url} style={{ textDecoration: 'none' }}>
        <Title as="span">
          <Text sx={{ fontSize: '14.5px', lineHeight: '14.5px', fontWeight: '500' }}>{name}</Text>
        </Title>
      </a>
    </Wrapper>
  )
}

const TitleWrapper = styled.div`
  position: relative;
`

const IconDot = styled.div`
  position: absolute;
  top: -6px;
  right: -5px;
  width: 8px;
  height: 8px;
}
`

const Title = styled.button`
  color: ${theme.colors.dark};
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
  height: 100%;

  svg {
    stroke-width: 2.5;
    width: 100%;
    height: 100%;
  }
`

const Menu = styled(Box)`
  position: absolute;
  z-index: 500;
  margin: 0;
  display: none;
  background: transparent;
  padding-top: 16px;
`

const MenuInner = styled(Box)`
  background: ${theme.colors.menuBg};
  border-radius: 16px;
  box-shadow: 0 11px 15px -7px rgba(0, 0, 0, 0.2), 0 9px 46px 8px rgba(0, 0, 0, 0.12),
    0 24px 38px 3px rgba(0, 0, 0, 0.14);
  overflow: hidden;
`

const Wrapper = styled.li`
  height: 100%;
  list-style: none;
  padding: 0;
  margin: 0 0 0 26px;

  &:first-child {
    margin-left: 0;
  }

  &:hover {
    ${Menu} {
      display: block;
    }

    ${Title} {
      box-shadow: inset 0 -2px 0 0 ${theme.colors.dark};
    }
  }

  ${space}
`

export default NavItem
