import React from 'react'
import styled from 'styled-components'

import { Flex, Grid, Heading } from '@containous/faency'
import NavItem from './NavItem'
import Product from './Product'
import * as MenuColumn from './MenuColumn'
import useGetLastPost from 'hooks/use-get-last-post'

import {
  TraefikHubLogo,
  TraefikEnterpriseLogo,
  TraefikProxyLogo,
  TraefikMeshLogo,
  RocketIcon,
  GithubIcon,
  DocsIcon,
  PriceTagIcon,
  LaptopIcon,
  APIIcon,
  KubernetesIcon,
  DockerSwarmIcon,
  APIManagementIcon,
} from 'images'
import PostCard from './PostCard'

const Wrapper = styled(Flex)`
  display: none;

  @media (min-width: 1150px) {
    display: flex;
  }
`

const MainNav: React.FC = () => {
  const lastPost = useGetLastPost('blog')
  const lastResource = useGetLastPost('resources')

  return (
    <Wrapper as="nav" style={{ height: '100%', alignItems: 'center', marginLeft: '65px' }} aria-label="Main menu">
      <Flex as="ul" sx={{ height: '100%', alignItems: 'center', p: 0, m: 0, listStyle: 'none' }}>
        <NavItem name="Products" hasSubmenu>
          <Grid sx={{ gridTemplateColumns: 'repeat(2, 364px)' }}>
            <Product
              title="Traefik Hub"
              titleHtml={
                <Flex sx={{ alignItems: 'center', mt: '12px' }}>
                  <Heading
                    as="h2"
                    sx={{
                      fontSize: '20px',
                      fontWeight: 700,
                      lineHeight: 1.33,
                      letterSpacing: 0,
                      fontFamily: 'inherit',
                    }}
                  >
                    Traefik Hub
                  </Heading>
                </Flex>
              }
              description="Kubernetes-Native API Management"
              logo={<TraefikHubLogo />}
              url="https://traefik.io/traefik-hub/"
              color="#7f8c2b"
              links={[
                {
                  title: 'Pricing',
                  url: 'https://traefik.io/pricing/',
                  external: true,
                  icon: <PriceTagIcon aria-hidden="true" />,
                },
                {
                  title: 'Free Trial',
                  url: 'http://traefik.io/traefik-hub-signup',
                  external: true,
                  icon: <RocketIcon aria-hidden="true" />,
                },
              ]}
            />
            <Product
              title="Traefik Enterprise"
              description="The API Gateway Cloud Natives Trust"
              logo={<TraefikEnterpriseLogo />}
              url="https://traefik.io/traefik-enterprise/"
              color="#337fe6"
              bgColor="#f4f5f6"
              links={[
                {
                  title: 'Pricing',
                  url: 'https://traefik.io/pricing/',
                  external: true,
                  icon: <PriceTagIcon aria-hidden="true" />,
                },
                {
                  title: 'Free Trial',
                  url: 'https://info.traefik.io/get-traefik-enterprise-free-for-30-days',
                  external: true,
                  icon: <LaptopIcon aria-hidden="true" />,
                },
              ]}
            />
          </Grid>
        </NavItem>

        <NavItem name="Open Source" hasSubmenu>
          <Grid sx={{ gridTemplateColumns: 'repeat(2, 364px)' }}>
            <Product
              title="Traefik Proxy"
              description="The Cloud-Native application proxy"
              logo={<TraefikProxyLogo />}
              url="https://traefik.io/traefik/"
              color="#2aa2c1"
              links={[
                {
                  title: 'GitHub',
                  url: 'https://github.com/traefik/traefik',
                  external: true,
                  icon: <GithubIcon aria-hidden="true" />,
                },
                {
                  title: 'Documentation',
                  url: 'https://doc.traefik.io/traefik/',
                  external: true,
                  icon: <DocsIcon aria-hidden="true" />,
                },
              ]}
            />
            <Product
              title="Traefik Mesh"
              description="The simplest service mesh"
              logo={<TraefikMeshLogo />}
              url="https://traefik.io/traefik-mesh/"
              color="#be46dd"
              bgColor="#f4f5f6"
              links={[
                {
                  title: 'GitHub',
                  url: 'https://github.com/traefik/mesh',
                  external: true,
                  icon: <GithubIcon aria-hidden="true" />,
                },
                {
                  title: 'Documentation',
                  url: 'https://doc.traefik.io/traefik-mesh/',
                  external: true,
                  icon: <DocsIcon aria-hidden="true" />,
                },
              ]}
            />
          </Grid>
        </NavItem>

        <NavItem name="Solutions" hasSubmenu position={{ marginLeft: '-25%' }}>
          <Grid sx={{ gridTemplateColumns: '380px 288px', p: '40px', gap: '40px' }}>
            <MenuColumn.Column title="Solutions">
              <MenuColumn.Item
                href="https://traefik.io/solutions/api-management/"
                title="API Management"
                logo={<APIManagementIcon />}
                description="Simplify and accelerate API lifecycle management"
                external
              />
              <MenuColumn.Item
                href="https://traefik.io/solutions/api-gateway/"
                title="API Gateway"
                logo={<APIIcon />}
                description="Act as a single entry point for microservices deployments"
                external
              />
              <MenuColumn.Item
                href="https://traefik.io/solutions/kubernetes-ingress/"
                title="Kubernetes Ingress"
                logo={<KubernetesIcon />}
                description="A centralized routing solution for your Kubernetes deployment"
                external
              />
              <MenuColumn.Item
                href="https://traefik.io/solutions/docker-swarm-ingress/"
                title="Docker Swarm Ingress"
                logo={<DockerSwarmIcon />}
                description="Powerful traffic management for your Docker Swarm deployment"
                external
              />
            </MenuColumn.Column>

            {lastResource && <PostCard post={lastResource} />}
          </Grid>
        </NavItem>

        <NavItem name="Learn" hasSubmenu position={{ right: '25px' }}>
          <Grid sx={{ gridTemplateColumns: 'auto auto auto 288px', p: '40px', gap: '93px', lineHeight: 1.6 }}>
            <MenuColumn.Column title="Learn">
              <MenuColumn.Item title="Blog" href="https://traefik.io/blog/" external />
              <MenuColumn.Item title="Resource Library" href="https://traefik.io/resources/" external />
              <MenuColumn.Item title="Traefik Academy" href="https://academy.traefik.io/" external />
              <MenuColumn.Item title="Success Stories" href="https://traefik.io/success-stories/" external />
              <MenuColumn.Item title="Glossary" href="https://traefik.io/glossary/" external />
              <MenuColumn.Item title="Events" href="https://traefik.io/events/" external />
            </MenuColumn.Column>

            <MenuColumn.Column title="Documentation">
              <MenuColumn.Item title="Traefik Proxy" href="https://doc.traefik.io/traefik/" external />
              <MenuColumn.Item
                title="Traefik Mesh"
                href="https://doc.traefik.io/traefik-mesh/"
                external
              ></MenuColumn.Item>
              <MenuColumn.Item
                title="Traefik Enterprise"
                href="https://doc.traefik.io/traefik-enterprise/"
                external
              ></MenuColumn.Item>
              <MenuColumn.Item title="Traefik Hub" href="https://doc.traefik.io/traefik-hub/" external />
              <MenuColumn.Item title="Plugin Catalog" href="https://plugins.traefik.io/" external></MenuColumn.Item>
            </MenuColumn.Column>

            <MenuColumn.Column title="Community">
              <MenuColumn.Item title="Community Overview" href="https://traefik.io/community/" external />
              <MenuColumn.Item title="Forum" href="https://community.traefik.io/" external />
              <MenuColumn.Item title="Community Voices" href="https://traefik.io/traefik-community-voices/" external />
              <MenuColumn.Item
                title="Traefik Ambassadors"
                href="https://traefik.io/traefik-ambassador-program/"
                external
              />
            </MenuColumn.Column>

            {lastPost && <PostCard post={lastPost} />}
          </Grid>
        </NavItem>

        <NavItem name="Pricing" pr="40px" url="https://traefik.io/pricing/" />
      </Flex>
    </Wrapper>
  )
}

export default MainNav
