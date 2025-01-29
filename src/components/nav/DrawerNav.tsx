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

const Badge = styled.p`
  padding: 1px 5px;
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;
  background-color: #d5ea48;
  border-radius: 9999px;
  display: inline;
  margin-left: 8px;
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
            <SubLink href="https://traefik.io/traefik/">Traefik Proxy</SubLink>
            <SubLink href="https://traefik.io/traefik-hub-api-gateway/">Traefik Hub API Gateway</SubLink>
            <SubLink href="https://traefik.io/traefik-hub/">Traefik Hub API Management</SubLink>
            <SubLink href="https://traefik.io/solutions/ai-gateway">AI Gateway</SubLink>
            <SubLink href="https://traefik.io/solutions/api-mocking">API Mocking</SubLink>
          </div>
        </div>

        <div className="menu-item-wrapper menu-item-wrapper--expandable" onClick={(e) => toggleMenu(e)}>
          <div className="menu-item menu-item--with-icon">
            <div className="menu-item__title">
              <span className="title">Solutions</span>
              <div className="icon-wrapper">
                <svg width="10" height="10" viewBox="0 0 10 10">
                  <g transform="translate(-502 -16)" stroke="#AABB39" fill="none" fill-rule="evenodd">
                    <circle stroke-opacity=".5" stroke-width="2" fill="#D5EA48" cx="507" cy="21" r="4"></circle>
                    <circle cx="507" cy="21" r="3.5"></circle>
                  </g>
                </svg>
              </div>
            </div>

            <span className="icon">
              <Chevron />
            </span>
          </div>
          <div className="sub-menu">
            <SubLink href="https://traefik.io/solutions/ai-gateway/">
              AI Gateway
              <Badge>New!</Badge>
            </SubLink>
            <SubLink href="https://traefik.io/solutions/api-gateway/">Modern API Gateway</SubLink>
            <SubLink href="https://traefik.io/solutions/api-mocking/">
              API Mocking <Badge>New!</Badge>
            </SubLink>
            <SubLink href="https://traefik.io/solutions/api-management/">GitOps-Driven API Management</SubLink>
            <SubLink href="https://traefik.io/solutions/waf/">
              Web Application Firewall <Badge>New!</Badge>
            </SubLink>
            <SubLink href="https://traefik.io/solutions/api-governance/">
              Runtime API Governance <Badge>New!</Badge>
            </SubLink>
            <SubLink href="https://traefik.io/solutions/kubernetes-ingress/">Kubernetes Ingress</SubLink>
            <SubLink href="https://traefik.io/solutions/docker-swarm-ingress/">Docker Swarm Ingress</SubLink>
            <SubLink href="https://traefik.io/solutions/hashicorp-and-traefik/">
              Traefik & HashiCrop <Badge>New!</Badge>
            </SubLink>
          </div>
        </div>

        <div className="menu-item-wrapper menu-item-wrapper--expandable" onClick={(e) => toggleMenu(e)}>
          <span className="menu-item menu-item--with-icon">
            <span className="title">Learn</span>
            <span className="icon">
              <Chevron />
            </span>
          </span>
          <div className="sub-menu">
            <SubLink href="https://traefik.io/blog/">Blog</SubLink>
            <SubLink href="https://traefik.io/resources/">Resource Library</SubLink>
            <SubLink href="https://academy.traefik.io/">Traefik Academy</SubLink>
            <SubLink href="https://traefik.io/success-stories/">Success Stories</SubLink>
            <SubLink href="https://traefik.io/glossary/">Glossary</SubLink>
            <SubLink href="https://traefik.io/events/">Events</SubLink>
            <SubLink href="https://doc.traefik.io">Docs</SubLink>
            <SubLink href="https://plugins.traefik.io/">Plugin Catalog</SubLink>
            <SubLink href="https://community.traefik.io/">Forum</SubLink>
            <SubLink href="https://traefik.io/community/">Community</SubLink>
          </div>
        </div>

        <div className="menu-item-wrapper menu-item-wrapper--expandable" onClick={(e) => toggleMenu(e)}>
          <span className="menu-item menu-item--with-icon">
            <span className="title">Compare</span>
            <span className="icon">
              <Chevron />
            </span>
          </span>
          <div className="sub-menu">
            <SubLink href="https://traefik.io/compare/traefik-vs-kong-konnect/">vs Kong Konnect</SubLink>
            <SubLink href="https://traefik.io/compare/traefik-vs-aws-api-gateway/">vs AWS API Gateway</SubLink>
            <SubLink href="https://traefik.io/compare/traefik-vs-azure-api-management/">vs AWS API Gateway</SubLink>
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
