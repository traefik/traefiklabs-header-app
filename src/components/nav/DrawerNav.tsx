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

type DrawerLink = {
  title: string
  href: string
  badge?: string
}

type DrawerSectionProps = {
  title: string
  links: DrawerLink[]
  highlight?: boolean
}

const DrawerSection = ({ title, links, highlight }: DrawerSectionProps) => (
  <div className="menu-item-wrapper menu-item-wrapper--expandable" onClick={(e) => toggleMenu(e)}>
    <div className="menu-item menu-item--with-icon">
      <div className="menu-item__title">
        <span className="title">{title}</span>
        {highlight && (
          <div className="icon-wrapper">
            <svg width="10" height="10" viewBox="0 0 10 10">
              <g transform="translate(-502 -16)" stroke="#AABB39" fill="none" fillRule="evenodd">
                <circle strokeOpacity=".5" strokeWidth="2" fill="#D5EA48" cx="507" cy="21" r="4"></circle>
                <circle cx="507" cy="21" r="3.5"></circle>
              </g>
            </svg>
          </div>
        )}
      </div>
      <span className="icon">
        <Chevron />
      </span>
    </div>
    <div className="sub-menu">
      {links.map((link) => (
        <SubLink key={link.href + link.title} href={link.href}>
          {link.title}
          {link.badge && <Badge>{link.badge}</Badge>}
        </SubLink>
      ))}
    </div>
  </div>
)

const DrawerNav = ({ isDrawerOpen }: Props) => {
  return (
    <div className={'drawer-menu pull-left ' + (isDrawerOpen ? 'open' : '')}>
      <div className="navigation">
        <DrawerSection
          title="Platform"
          links={[
            { title: 'Traefik Proxy', href: 'https://traefik.io/traefik/' },
            { title: 'Traefik Hub API Gateway', href: 'https://traefik.io/traefik-hub-api-gateway/' },
            { title: 'Traefik Hub API Management', href: 'https://traefik.io/traefik-hub/' },
            { title: 'AI Gateway', href: 'https://traefik.io/solutions/ai-gateway/' },
            { title: 'MCP Gateway', href: 'https://traefik.io/solutions/mcp-gateway/' },
            { title: 'API Mocking', href: 'https://traefik.io/solutions/api-mocking/' },
          ]}
        />

        <DrawerSection
          title="Solutions"
          highlight
          links={[
            { title: 'Kubernetes Ingress', href: 'https://traefik.io/solutions/kubernetes-ingress/' },
            { title: 'Kubernetes Gateway API', href: 'https://traefik.io/solutions/gateway-api/' },
            { title: 'Knative Serving', href: 'https://traefik.io/solutions/knative/' },
            { title: 'Ingress NGINX Provider', href: 'https://traefik.io/choose-traefik-oss/' },
            { title: 'OSS Support', href: 'https://traefik.io/solutions/oss-support/' },
            { title: 'Modern API Gateway', href: 'https://traefik.io/solutions/api-gateway/' },
            { title: 'Web Application Firewall', href: 'https://traefik.io/solutions/waf/' },
            {
              title: 'Hardened Secure Image',
              href: 'https://traefik.io/solutions/hardened-secure-image/',
              badge: 'New!',
            },
            {
              title: 'FIPS 140-3',
              href: 'https://traefik.io/solutions/application-level-fips-140-3/',
              badge: 'New!',
            },
            { title: 'AI Gateway', href: 'https://traefik.io/solutions/ai-gateway/' },
            { title: 'MCP Gateway', href: 'https://traefik.io/solutions/mcp-gateway/' },
            {
              title: 'Verifiable Agent Evidence',
              href: 'https://traefik.io/solutions/verifiable-agent-evidence/',
              badge: 'New!',
            },
            { title: 'Traefik MCP Server', href: 'https://traefik.io/solutions/traefik-mcp-server', badge: 'New!' },
            { title: 'GitOps-Driven API Management', href: 'https://traefik.io/solutions/api-management/' },
            { title: 'Runtime API Governance', href: 'https://traefik.io/solutions/api-governance/' },
            {
              title: 'Air-Gapped API Management',
              href: 'https://traefik.io/solutions/air-gapped-ai-and-api-management/',
            },
            { title: 'API Mocking', href: 'https://traefik.io/solutions/api-mocking/' },
          ]}
        />

        <DrawerSection
          title="Partners"
          links={[
            { title: 'HashiCorp', href: 'https://traefik.io/solutions/hashicorp-and-traefik/' },
            { title: 'Microsoft', href: 'https://traefik.io/solutions/microsoft-and-traefik/' },
            { title: 'Nutanix for Enterprises', href: 'https://traefik.io/solutions/nutanix-and-traefik/' },
            {
              title: 'Nutanix for Service Providers',
              href: 'https://traefik.io/solutions/traefik-hub-and-nutanix-for-service-providers',
              badge: 'New!',
            },
            { title: 'Oracle OCI', href: 'https://traefik.io/solutions/oracle-and-traefik/' },
            {
              title: 'SUSE AI Factory',
              href: 'https://traefik.io/solutions/traefik-and-suse-ai-factory',
              badge: 'New!',
            },
            {
              title: 'Spectro Cloud PaletteAI',
              href: 'https://traefik.io/solutions/spectro-cloud-paletteai-and-traefik-hub',
              badge: 'New!',
            },
            { title: 'VMware VCF', href: 'https://traefik.io/solutions/vmware-and-traefik/', badge: 'New!' },
          ]}
        />

        <DrawerSection
          title="Why Traefik"
          links={[
            { title: 'Traefik Labs Manifesto', href: 'https://traefik.io/blog/why-choose-traefik' },
            { title: 'Success Stories', href: 'https://traefik.io/success-stories' },
            { title: 'vs Apigee', href: 'https://traefik.io/compare/traefik-vs-apigee' },
            { title: 'vs AWS', href: 'https://traefik.io/compare/traefik-vs-aws-api-gateway' },
            { title: 'vs Azure', href: 'https://traefik.io/compare/traefik-vs-azure-api-management' },
            { title: 'vs Gravitee', href: 'https://traefik.io/compare/traefik-vs-gravitee' },
            { title: 'vs Kong', href: 'https://traefik.io/compare/traefik-hub-vs-kong' },
            { title: 'vs Tyk', href: 'https://traefik.io/compare/traefik-vs-tyk' },
            { title: 'See more comparisons', href: 'https://traefik.io/compare' },
          ]}
        />

        <DrawerSection
          title="Resources"
          links={[
            { title: 'Blog', href: 'https://traefik.io/blog' },
            { title: 'Resource Library', href: 'https://traefik.io/resources' },
            { title: 'Glossary', href: 'https://traefik.io/glossary' },
            { title: 'Events', href: 'https://traefik.io/events' },
            { title: 'Plugin Catalog', href: 'https://plugins.traefik.io/' },
            { title: 'Community Forum', href: 'https://community.traefik.io/' },
          ]}
        />

        <div className="menu-item-wrapper">
          <SubLink href="https://doc.traefik.io/" className="menu-item">
            Docs
          </SubLink>
        </div>

        <div className="menu-item-wrapper">
          <SubLink href="https://traefik.io/pricing" className="menu-item">
            Pricing
          </SubLink>
        </div>
      </div>
    </div>
  )
}

export default DrawerNav
