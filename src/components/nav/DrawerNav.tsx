import Link from 'components/Link'
import React from 'react'
import styled from 'styled-components'
import Chevron from './ChevronDown'

function toggleMenu(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
  e.currentTarget.classList.toggle('open')
}

interface Props {
  isDrawerOpen: boolean
}

const SubLink = styled(Link)`
  font-weight: 400;

  &:hover {
    text-decoration: none;
  }
`

const DrawerNav = ({ isDrawerOpen }: Props) => {
  return (
    <div className={'drawer-menu pull-left ' + (isDrawerOpen ? 'open' : '')}>
      <div className="navigation">
        <div className="menu-item-wrapper menu-item-wrapper--expandable" onClick={(e) => toggleMenu(e)}>
          <div className="menu-item menu-item--with-icon">
            <span className="title">Products</span>
            <span className="icon">
              <Chevron />
            </span>
          </div>
          <div className="sub-menu">
            <SubLink href="https://traefik.io/traefik-enterprise/">Traefik Enterprise</SubLink>
            <SubLink href="https://traefik.io/traefik-hub/">Traefik Hub (Beta)</SubLink>
          </div>
        </div>

        <div className="menu-item-wrapper menu-item-wrapper--expandable" onClick={(e) => toggleMenu(e)}>
          <div className="menu-item menu-item--with-icon">
            <span className="title">Open Source</span>
            <span className="icon">
              <Chevron />
            </span>
          </div>
          <div className="sub-menu">
            <SubLink href="https://traefik.io/traefik/">Traefik Proxy</SubLink>
            <SubLink href="https://traefik.io/traefik-mesh/">Traefik Mesh</SubLink>
          </div>
        </div>

        <div className="menu-item-wrapper menu-item-wrapper--expandable" onClick={(e) => toggleMenu(e)}>
          <a className="menu-item menu-item--with-icon">
            <span className="title">Solutions</span>
            <span className="icon">
              <Chevron />
            </span>
          </a>
          <div className="sub-menu">
            <SubLink href="https://traefik.io/solutions/kubernetes-ingress/">Kubernetes Ingress</SubLink>
            <SubLink href="https://traefik.io/solutions/docker-swarm-ingress/">Docker Swarm Ingress</SubLink>
            <SubLink href="https://traefik.io/solutions/api-gateway/">API Gateway</SubLink>
          </div>
        </div>

        <div className="menu-item-wrapper menu-item-wrapper--expandable" onClick={(e) => toggleMenu(e)}>
          <a className="menu-item menu-item--with-icon">
            <span className="title">Learn</span>
            <span className="icon">
              <Chevron />
            </span>
          </a>
          <div className="sub-menu">
            <SubLink href="https://traefik.io/blog/">Blog</SubLink>
            <SubLink href="https://traefik.io/resources/">Resource Library</SubLink>
            <SubLink href="https://academy.traefik.io/">Traefik Academy</SubLink>
            <SubLink href="https://traefik.io/success-stories/">Success Stories</SubLink>
            <SubLink href="https://traefik.io/events/">Events</SubLink>
            <SubLink href="https://doc.traefik.io">Docs</SubLink>
            <SubLink href="https://traefik.io/community/">Community</SubLink>
            <SubLink href="https://community.traefik.io/">Forum</SubLink>
          </div>
        </div>

        <div className="menu-item-wrapper">
          <SubLink href="https://traefik.io/pricing/" className="menu-item">
            Pricing
          </SubLink>
        </div>

        <div className="menu-item-wrapper">
          <SubLink href="https://traefik.io/contact-us/" className="menu-item">
            Get in Touch
          </SubLink>
        </div>
      </div>
    </div>
  )
}

export default DrawerNav
