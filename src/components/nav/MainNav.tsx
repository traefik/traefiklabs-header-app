import React from 'react'
import styled from 'styled-components'
import { Flex, Grid } from '@containous/faency'
import NavItem from './NavItem'
import Product from './Product'
import * as MenuColumn from './MenuColumn'
import useGetLastPost from 'hooks/use-get-last-post'
import { ReactComponent as IconKubernetes } from '../../images/IconKubernetes.svg'
import { ReactComponent as IconDockerSwarm } from '../../images/IconDockerSwarm.svg'
import { ReactComponent as IconApiGovernance } from '../../images/IconApiGovernance.svg'
import { ReactComponent as IconsApiMocks } from '../../images/IconsApiMocks.svg'
import { ReactComponent as IconAiGateway } from '../../images/IconAiGateway.svg'
import { ReactComponent as IconWaf } from '../../images/IconWaf.svg'
import { ReactComponent as TraefikHubIcon } from '../../images/Traefikhub.svg'
import { ReactComponent as TraefikIcon } from '../../images/Traefik-Hub.svg'
import { ReactComponent as TraefikProxyIcon } from '../../images/TraefikProxy.svg'
import { ReactComponent as ApiGatewayIcon } from '../../images/APIGateway.svg'
import { ReactComponent as ApiGovernanceIcon } from '../../images/APIGovernance.svg'
import { ReactComponent as ApiMockingIcon } from '../../images/APIMocking.svg'
import { ReactComponent as APIManagementIcon } from '../../images/APIManagement.svg'
import { ReactComponent as NginxIcon } from '../../images/Nginx.svg'
import { ReactComponent as DockerSwarmIcon } from '../../images/DockerSwarmIngress.svg'
import { ReactComponent as KubernetesIcon } from '../../images/KubernetesIngress.svg'
import { ReactComponent as BlogIcon } from '../../images/menu_icons_blog.svg'
import { ReactComponent as ResourcesIcon } from '../../images/menu_icons_resources.svg'
import { ReactComponent as TraefikAcademyIcon } from '../../images/menu_icons_academy.svg'
import { ReactComponent as EventsIcon } from '../../images/menu_icons_events.svg'
import { ReactComponent as MicrosoftIcon } from '../../images/menu_icons_microsoft.svg'
import { ReactComponent as GlossaryIcon } from '../../images/menu_icons_list.svg'
import { ReactComponent as StarIcon } from '../../images/menu_icons_star.svg'
import { ReactComponent as ForumIcon } from '../../images/menu_icons_forum.svg'
import { ReactComponent as PluginIcon } from '../../images/menu_icons_plugin.svg'
import { ReactComponent as CommunityIcon } from '../../images/menu_icons_community.svg'
import { ReactComponent as ProxyIcon } from '../../images/menu_icons_traefik_proxy.svg'
import { ReactComponent as EnterpriseIcon } from '../../images/menu_icons_traefik_enterprise.svg'
import { ReactComponent as HubIcon } from '../../images/menu_icons_traefik_hub.svg'
import { ReactComponent as WafIcon } from '../../images/menu_icons_waf.svg'
import { ReactComponent as HashicorpIcon } from '../../images/menu_icons_hashicorp.svg'
import { ReactComponent as NutanixIcon } from '../../images/menu_icons_nutanix.svg'
import { ReactComponent as OracleIcon } from '../../images/menu_icons_oracle.svg'
import { ReactComponent as AiGatewayIcon } from '../../images/menu_icons_ai_gateway.svg'

import PostCard from './PostCard'
import NavHeader from './NavHeader'

const Wrapper = styled(Flex)`
  display: none;

  @media (min-width: 1150px) {
    display: flex;
  }
`

const MainNav = () => {
  const lastPost = useGetLastPost('blog')

  return (
    <Wrapper as="nav" style={{ height: '100%', alignItems: 'center', marginLeft: '65px' }} aria-label="Main menu">
      <Flex as="ul" sx={{ height: '100%', alignItems: 'center', p: 0, m: 0, listStyle: 'none' }}>
        {/* Products */}
        <NavItem
          name="Products"
          hasSubmenu
          position={{ left: '50%', transform: 'translateX(-50%)', width: '100%', maxWidth: '1160px' }}
        >
          <Grid>
            <NavHeader title="Traefik Runtime Platform" />
            <Grid sx={{ gridTemplateColumns: '1fr 1fr 1fr' }}>
              <Product
                links={[
                  {
                    title: 'Traefik Proxy →',
                    url: 'https://traefik.io/traefik/',
                    external: true,
                    description: 'OSS Cloud-Native Application Proxy',
                    icon: <TraefikProxyIcon />,
                  },
                ]}
                subLinks={[
                  {
                    title: 'Kubernetes Ingress',
                    external: true,
                    icon: <IconKubernetes />,
                    url: 'https://traefik.io/solutions/kubernetes-ingress/',
                  },
                  {
                    title: 'Docker Swarm Ingress',
                    external: true,
                    icon: <IconDockerSwarm />,
                    url: 'https://traefik.io/solutions/docker-swarm-ingress/',
                  },
                ]}
              />
              <Product
                links={[
                  {
                    title: 'Traefik API Gateway →',
                    url: 'https://traefik.io/traefik-hub-api-gateway/',
                    external: true,
                    description: 'Seamless Upgrade from Traefik Proxy',
                    icon: <TraefikIcon />,
                  },
                ]}
                subLinks={[
                  {
                    title: 'Web Application Firewall',
                    external: true,
                    icon: <IconWaf />,
                    url: 'https://traefik.io/solutions/waf/',
                  },
                  {
                    title: 'AI Gateway',
                    external: true,
                    icon: <IconAiGateway />,
                    url: 'https://traefik.io/solutions/ai-gateway/',
                  },
                ]}
              />
              <Product
                links={[
                  {
                    title: 'Traefik API Management →',
                    url: 'https://traefik.io/traefik-hub/',
                    external: true,
                    description: 'GitOps-Driven API Management',
                    icon: <TraefikHubIcon />,
                  },
                ]}
                subLinks={[
                  {
                    title: 'API Governance',
                    external: true,
                    icon: <IconApiGovernance />,
                    url: 'https://traefik.io/solutions/api-governance/',
                  },
                  {
                    title: 'API Mocking',
                    external: true,
                    icon: <IconsApiMocks />,
                    url: 'https://traefik.io/solutions/api-mocking/',
                  },
                ]}
              />
            </Grid>
          </Grid>
        </NavItem>

        {/* Solutions */}
        <NavItem name="Solutions" hasSubmenu position={{ marginLeft: '-25%' }} heighlight={true}>
          <Grid
            sx={{
              maxWidth: '1368px',
              gap: '24px',
              paddingLeft: '16px',
              gridTemplateColumns: 'repeat(3, 312px) 344px',
            }}
          >
            <Product
              title="Application Proxy"
              padding="24px 0"
              links={[
                {
                  title: 'Kubernetes Ingress',
                  url: 'https://traefik.io/solutions/kubernetes-ingress/',
                  external: true,
                  description: 'A centralized routing solution for your Kubernetes deployment.',
                  icon: <KubernetesIcon />,
                },
                {
                  title: 'Docker Swarm Ingress',
                  url: 'https://traefik.io/solutions/docker-swarm-ingress/',
                  external: true,
                  description: 'Manage incoming network traffic across your cluster',
                  icon: <DockerSwarmIcon />,
                },
                {
                  title: 'Replace Ingress-NGINX',
                  url: 'https://traefik.io/choose-traefik-oss/',
                  external: true,
                  description: 'Don’t wait for the next vulnerability. Migrate now!',
                  icon: <NginxIcon />,
                },
              ]}
            />
            <Product
              title="API Gateway"
              padding="24px 0"
              links={[
                {
                  title: 'Modern API Gateway',
                  url: 'https://traefik.io/solutions/api-gateway/',
                  external: true,
                  description: 'Centralize security and routing in a single entry point for microservices deployments.',
                  icon: <APIManagementIcon />,
                },
                {
                  title: 'Web Application Firewall',
                  url: 'https://traefik.io/solutions/waf/',
                  external: true,
                  description: 'Protect your APIs from threats with speed and efficiency',
                  icon: <WafIcon />,
                  badge: 'New!',
                },

                {
                  title: 'AI Gateway',
                  url: 'https://traefik.io/solutions/ai-gateway/',
                  external: true,
                  description: 'Transform Traefik into a flexible egress gateway.',
                  icon: <AiGatewayIcon />,
                  badge: 'New!',
                },
              ]}
            />
            <Product
              title="API Management"
              padding="24px 0"
              links={[
                {
                  title: 'GitOps-Driven API Management',
                  url: 'https://traefik.io/solutions/api-management/',
                  external: true,
                  description: 'Simplifies and Accelerates API lifecycle management.',
                  icon: <ApiGatewayIcon />,
                },
                {
                  title: 'Runtime API Governance',
                  url: 'https://traefik.io/solutions/api-governance/',
                  external: true,
                  description:
                    'Enforce critical runtime API policies for secure, reliable, and compliant API management.',
                  icon: <ApiGovernanceIcon />,
                  badge: 'New!',
                },
                {
                  title: 'API Mocking',
                  url: 'https://traefik.io/solutions/api-mocking/',
                  external: true,
                  description: 'Create, publish, and consume mock APIs with production-like UX and SLAs.',
                  icon: <ApiMockingIcon />,
                  badge: 'New!',
                },
              ]}
            />
            <Product
              title="BETTER TOGETHER"
              padding="24px 16px"
              links={[
                {
                  title: 'Traefik & HashiCorp',
                  url: 'https://traefik.io/solutions/hashicorp-and-traefik/',
                  external: true,
                  description: 'A comprehensive and powerful API Gateway for HashiCorp stack.',
                  icon: <HashicorpIcon />,
                },
                {
                  title: 'Traefik & Microsoft',
                  url: 'https://traefik.io/solutions/microsoft-and-traefik/',
                  external: true,
                  description: 'Run your APIs and AI across any infrastructure, any Kubernetes.',
                  icon: <MicrosoftIcon />,
                  badge: 'New!',
                },
                {
                  title: 'Traefik & Nutanix',
                  url: 'https://traefik.io/solutions/nutanix-and-traefik/',
                  external: true,
                  description: 'A holistic solution for modern AI & API management.',
                  icon: <NutanixIcon />,
                },
                {
                  title: 'Traefik & Oracle OCI',
                  url: 'https://traefik.io/solutions/oracle-and-traefik/',
                  external: true,
                  description: 'Unmatched & modern API management without boundaries.',
                  icon: <OracleIcon />,
                },
              ]}
              bgImage={'https://containous.ghost.io/content/images/2025/05/gradient-left-glow.png'}
              colors={{
                heading: '#f9fafa',
                text: '#b3bac0',
                bgColor: '#f4f5f659',
              }}
            />
          </Grid>
        </NavItem>

        {/* Learn */}
        <NavItem
          name="Learn"
          hasSubmenu
          position={{ width: '100%', maxWidth: '1080px', left: '50%', transform: 'translateX(-50%)' }}
        >
          <Grid sx={{ gridTemplateColumns: '225px 225px 225px 1fr', p: '24px', gap: '12px', lineHeight: 1.6 }}>
            <MenuColumn.Column title="Learn">
              <MenuColumn.Item title="Blog" logo={<BlogIcon />} href="https://traefik.io/blog/" external />
              <MenuColumn.Item
                title="Resource Library"
                logo={<ResourcesIcon />}
                href="https://traefik.io/resources/"
                external
              />
              <MenuColumn.Item
                title="Traefik Academy"
                logo={<TraefikAcademyIcon />}
                href="https://academy.traefik.io/"
                external
              />
              <MenuColumn.Item
                title="Success Stories"
                logo={<StarIcon />}
                href="https://traefik.io/success-stories/"
                external
              />
              <MenuColumn.Item title="Glossary" logo={<GlossaryIcon />} href="https://traefik.io/glossary/" external />
              <MenuColumn.Item title="Events" logo={<EventsIcon />} href="https://traefik.io/events/" external />
            </MenuColumn.Column>

            <MenuColumn.Column title="Open Source">
              <MenuColumn.Item
                title="Plugin Catalog"
                logo={<PluginIcon />}
                href="https://plugins.traefik.io"
                external
              />
              <MenuColumn.Item title="Forum" logo={<ForumIcon />} href="https://community.traefik.io/" external />
              <MenuColumn.Item
                title="Join the Community"
                logo={<CommunityIcon />}
                href="https://traefik.io/community/"
                external
              />
            </MenuColumn.Column>

            <MenuColumn.Column title="Documentation">
              <MenuColumn.Item
                title="Traefik Proxy"
                logo={<ProxyIcon />}
                href="https://doc.traefik.io/traefik/"
                external
              />
              <MenuColumn.Item
                title="Traefik Enterprise"
                logo={<EnterpriseIcon />}
                href="https://doc.traefik.io/traefik-enterprise/"
                external
              />
              <MenuColumn.Item
                title="Traefik Hub"
                logo={<HubIcon />}
                href="https://doc.traefik.io/traefik-hub/"
                external
              />
            </MenuColumn.Column>

            {lastPost && <PostCard post={lastPost} />}
          </Grid>
        </NavItem>

        <NavItem name="Compare" hasSubmenu>
          <Grid sx={{ gridTemplateColumns: '1fr', width: '304px', p: '24px' }}>
            <MenuColumn.Column title="Compare Traefik Hub">
              <MenuColumn.Item title="vs Apigee" href="https://traefik.io/compare/traefik-vs-apigee/" external />
              <MenuColumn.Item
                title="vs AWS API Gateway"
                href="https://traefik.io/compare/traefik-vs-aws-api-gateway/"
                external
              />
              <MenuColumn.Item
                title="vs Azure APIM"
                href="https://traefik.io/compare/traefik-vs-azure-api-management/"
                external
              />
              <MenuColumn.Item title="vs Gravitee" href="https://traefik.io/compare/traefik-vs-gravitee/" external />
              <MenuColumn.Item
                title="vs Kong Konnect"
                href="https://traefik.io/compare/traefik-vs-kong-konnect/"
                external
              />
              <MenuColumn.Item title="vs Tyk" href="https://traefik.io/compare/traefik-vs-tyk/" external />
              <MenuColumn.Item
                title="See more comparisons"
                href="https://traefik.io/compare/"
                external
                className="menu-item-button"
              />
            </MenuColumn.Column>
          </Grid>
        </NavItem>

        {/* Pricing */}
        <NavItem name="Pricing" url="https://traefik.io/pricing/" />

        {/* Docs */}
        <NavItem name="Docs" url="https://doc.traefik.io/" />
      </Flex>
    </Wrapper>
  )
}

export default MainNav
