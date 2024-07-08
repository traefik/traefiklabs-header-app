import React from 'react'
import styled from 'styled-components'
import { Flex, Grid } from '@containous/faency'
import NavItem from './NavItem'
import Product from './Product'
import * as MenuColumn from './MenuColumn'
import useGetLastPost from 'hooks/use-get-last-post'
import Traefikhubicon from '../../images/Traefikhub.svg'
import Traefikicon from '../../images/Traefik-Hub.svg'
import Traefikproxyicon from '../../images/TraefikProxy.svg'
import TraefikEnterpriseicon from '../../images/TraefikEnterprise.svg'
import ApiGatewayIcon from '../../images/APIGateway.svg'
import APIManagementIcon from '../../images/APIManagement.svg'
import DockerSwarmIcon from '../../images/DockerSwarmIngress.svg'
import KubernetesIcon from '../../images/KubernetesIngress.svg'
import { ReactComponent as BlogIcon } from '../../images/menu_icons_blog.svg'
import { ReactComponent as ResourcesIcon } from '../../images/menu_icons_resources.svg'
import { ReactComponent as TraefikAcademyIcon } from '../../images/menu_icons_academy.svg'
import { ReactComponent as EventsIcon } from '../../images/menu_icons_events.svg'
import { ReactComponent as GlossaryIcon } from '../../images/menu_icons_list.svg'
import { ReactComponent as StarIcon } from '../../images/menu_icons_star.svg'
import { ReactComponent as ForumIcon } from '../../images/menu_icons_forum.svg'
import { ReactComponent as PluginIcon } from '../../images/menu_icons_plugin.svg'
import { ReactComponent as CommunityIcon } from '../../images/menu_icons_community.svg'
import { ReactComponent as ProxyIcon } from '../../images/menu_icons_traefik_proxy.svg'
import { ReactComponent as EnterpriseIcon } from '../../images/menu_icons_traefik_enterprise.svg'
import { ReactComponent as HubIcon } from '../../images/menu_icons_traefik_hub.svg'
import BgImg1 from '../../images/PatternBG-1@3x.png'
import BgImg2 from '../../images/PatternBG-2@3x.png'
import BgImg3 from '../../images/PatternBG-3@3x.png'
import PostCard from './PostCard'

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
        <NavItem name="Products" hasSubmenu position={{ marginLeft: '-15%' }}>
          <Grid sx={{ gridTemplateColumns: '1fr 1fr 1fr', maxWidth: '1160px' }}>
            <Product
              title="Application Proxy"
              description="Simplify microservice discovery, routing, & load balancing."
              links={[
                {
                  title: 'Taefik Proxy',
                  url: 'https://traefik.io/traefik/',
                  external: true,
                  description: 'OSS Cloud-Native Application Proxy',
                  icon: Traefikproxyicon,
                },
              ]}
              bgImage={BgImg3}
            />
            <Product
              title="API Gateway"
              description="Enhance security & centralize control of your APIs and microservices."
              links={[
                {
                  title: 'Traefik Hub',
                  url: 'https://traefik.io/traefik-hub-api-gateway/',
                  tag: 'API Gateway',
                  external: true,
                  description: 'Seamless Upgrade from Traefik Proxy',
                  tagColor: 'rgb(177,64,245)',
                  icon: Traefikicon,
                },
                {
                  title: 'Traefik Enterprise',
                  url: 'https://traefik.io/traefik-enterprise/',
                  external: true,
                  description: 'Standalone General-Purpose API Gateway',
                  icon: TraefikEnterpriseicon,
                },
              ]}
              bgImage={BgImg1}
            />
            <Product
              title="API Management"
              description="Simplify & accelerate API lifecycle management in Kubernetes."
              links={[
                {
                  title: 'Traefik Hub',
                  url: 'https://traefik.io/traefik-hub/',
                  external: true,
                  tag: 'API Management',
                  description: 'Kubernetes-Native API Management',
                  icon: Traefikhubicon,
                },
              ]}
              bgImage={BgImg2}
            />
          </Grid>
        </NavItem>

        {/* Solutions */}
        <NavItem name="Solutions" hasSubmenu position={{ marginLeft: '-25%' }}>
          <Grid
            sx={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 360px)',
            }}
          >
            <Product
              title="Application Proxy"
              links={[
                {
                  title: 'Kubernetes Ingress',
                  url: 'https://traefik.io/solutions/kubernetes-ingress/',
                  external: true,
                  description: 'A centralized routing solution for your Kubernetes deployment.',
                  icon: KubernetesIcon,
                },
                {
                  title: 'Docker Swarm Ingress',
                  url: 'https://traefik.io/solutions/docker-swarm-ingress/',
                  external: true,
                  description: 'Manage incoming network traffic across your cluster',
                  icon: DockerSwarmIcon,
                },
              ]}
              bgImage={BgImg3}
            />
            <Product
              title="API Gateway"
              links={[
                {
                  title: 'Modern API Gateway',
                  url: 'https://traefik.io/solutions/api-gateway/',
                  external: true,
                  description: 'Centralize security and routing in a single entry point for microservices deployments.',
                  icon: APIManagementIcon,
                },
              ]}
              bgImage={BgImg1}
            />
            <Product
              title="API Management"
              links={[
                {
                  title: 'GitOps-Driven API Management',
                  url: 'https://traefik.io/solutions/api-management/',
                  external: true,
                  description: 'Simplifies and Accelerates API lifecycle management.',
                  icon: ApiGatewayIcon,
                },
              ]}
              bgImage={BgImg2}
            />
          </Grid>
        </NavItem>

        {/* Learn */}
        <NavItem name="Learn" hasSubmenu position={{ right: '25px' }}>
          <Grid sx={{ gridTemplateColumns: 'auto auto auto 288px', p: '24px', gap: '93px', lineHeight: 1.6 }}>
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
              <MenuColumn.Item title="Join the Community" logo={<CommunityIcon />} href="/community/" external />
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

        {/* Pricing */}
        <NavItem name="Pricing" url="https://traefik.io/pricing/" />

        {/* Docs */}
        <NavItem name="Docs" url="https://doc.traefik.io/" />
      </Flex>
    </Wrapper>
  )
}

export default MainNav
