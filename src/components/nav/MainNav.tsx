import React from 'react'
import styled from 'styled-components'
import { Flex, Grid } from '@containous/faency'
import NavItem from './NavItem'
import Product from './Product'
import SuccessStoryCard from './SuccessStoryCard'
import * as MenuColumn from './MenuColumn'
import { ReactComponent as ProductNginxIcon } from '../../images/product_Nginx.svg'
import { ReactComponent as IconKnative } from '../../images/IconKnative.svg'
import { ReactComponent as ProductIconKnative } from '../../images/product_Knative.svg'
import { ReactComponent as IconKubernetes } from '../../images/IconKubernetes.svg'
import { ReactComponent as IconKubernetesIngress } from '../../images/IconKubernetesIngress.svg'
import { ReactComponent as IconApiGovernance } from '../../images/IconApiGovernance.svg'
import { ReactComponent as IconsApiMocks } from '../../images/IconsApiMocks.svg'
import { ReactComponent as IconAiGateway } from '../../images/IconAiGateway.svg'
import { ReactComponent as IconWaf } from '../../images/IconWaf.svg'
import { ReactComponent as TraefikHubIcon } from '../../images/Traefikhub.svg'
import { ReactComponent as TraefikIcon } from '../../images/Traefik-Hub.svg'
import { ReactComponent as TraefikProxyIcon } from '../../images/TraefikProxy.svg'
import { ReactComponent as ApiGatewayIcon } from '../../images/APIGateway.svg'
import { ReactComponent as ApiGovernanceIcon } from '../../images/APIGovernance.svg'
import { ReactComponent as ProductOfflineApim } from '../../images/product-OfflineApim.svg'
import { ReactComponent as OfflineApim } from '../../images/OfflineApim.svg'
import { ReactComponent as ApiMockingIcon } from '../../images/APIMocking.svg'
import { ReactComponent as APIManagementIcon } from '../../images/APIManagement.svg'
import { ReactComponent as NginxIcon } from '../../images/Nginx.svg'
import { ReactComponent as KubernetesIcon } from '../../images/KubernetesIngress.svg'
import { ReactComponent as WafIcon } from '../../images/menu_icons_waf.svg'
import { ReactComponent as AiGatewayIcon } from '../../images/menu_icons_ai_gateway.svg'
import { ReactComponent as ProductMcpGatewayIcon } from '../../images/product-menu_icons_mcp_gateway.svg'
import { ReactComponent as IconMcpGateway } from '../../images/IconMcpGateway.svg'
import { ReactComponent as IconMcpServer } from '../../images/IconMcpServer.svg'
import { ReactComponent as ProductMenuProxyIcon } from '../../images/product-menu-proxy.svg'
import { ReactComponent as IconProxy } from '../../images/solutions-menu-proxy.svg'
import { ReactComponent as IconHardenedSecureImage } from '../../images/IconHardenedSecureImage.svg'
import { ReactComponent as IconFips } from '../../images/IconFips.svg'
import { ReactComponent as IconSovereignTrustPlane } from '../../images/IconSovereignTrustPlane.svg'
import { ReactComponent as NutanixIcon } from '../../images/menu_icons_nutanix.svg'
import { ReactComponent as MicrosoftIcon } from '../../images/menu_icons_microsoft.svg'
import { ReactComponent as OracleIcon } from '../../images/menu_icons_oracle.svg'
import { ReactComponent as HashicorpIcon } from '../../images/menu_icons_hashicorp.svg'
import { ReactComponent as IconSuse } from '../../images/menu_icons_suse.svg'
import { ReactComponent as SpectroCloudIcon } from '../../images/menu_icons_spectro_cloud.svg'
import { ReactComponent as VmwareIcon } from '../../images/menu_icons_vmware.svg'

const Wrapper = styled(Flex)`
  display: none;

  @media (min-width: 1150px) {
    display: flex;
  }
`

// Wide menus are centered on the page (the nav bar is their positioning parent)
const centeredMenu = (maxWidth: string): React.CSSProperties => ({
  left: '50%',
  transform: 'translateX(-50%)',
  width: 'calc(100% - 32px)',
  maxWidth,
})

const MainNav = () => {
  return (
    <Wrapper as="nav" style={{ height: '100%', alignItems: 'center' }} aria-label="Main menu">
      <Flex as="ul" sx={{ height: '100%', alignItems: 'center', p: 0, m: 0, listStyle: 'none' }}>
        {/* Platform */}
        <NavItem name="Platform" hasSubmenu position={centeredMenu('1032px')}>
          <Grid sx={{ gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: '24px', p: '24px' }}>
            <Product
              padding="0"
              compact
              links={[
                {
                  title: 'Traefik Proxy',
                  url: 'https://traefik.io/traefik/',
                  external: true,
                  description: 'OSS Cloud-Native Application Proxy',
                  icon: <TraefikProxyIcon />,
                },
              ]}
              subLinks={[
                {
                  title: 'Kubernetes Gateway API',
                  external: true,
                  icon: <IconKubernetes />,
                  url: 'https://traefik.io/solutions/gateway-api/',
                },
                {
                  title: 'Knative Serving',
                  external: true,
                  icon: <ProductIconKnative />,
                  url: 'https://traefik.io/solutions/knative/',
                },
                {
                  title: 'Ingress NGINX Provider',
                  external: true,
                  icon: <ProductNginxIcon />,
                  url: 'https://traefik.io/choose-traefik-oss/',
                },
                {
                  title: 'OSS Support',
                  icon: <ProductMenuProxyIcon />,
                  url: 'https://traefik.io/solutions/oss-support/',
                  external: true,
                },
              ]}
            />
            <Product
              padding="0"
              compact
              links={[
                {
                  title: 'Traefik Hub API Gateway',
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
                {
                  title: 'MCP Gateway',
                  external: true,
                  icon: <ProductMcpGatewayIcon />,
                  url: 'https://traefik.io/solutions/mcp-gateway/',
                },
              ]}
            />
            <Product
              padding="0"
              compact
              links={[
                {
                  title: 'Traefik Hub API Management',
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
                  title: 'Air-Gapped APIM',
                  external: true,
                  icon: <ProductOfflineApim />,
                  url: 'https://traefik.io/solutions/air-gapped-ai-and-api-management/',
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
        </NavItem>

        {/* Solutions */}
        <NavItem name="Solutions" hasSubmenu heighlight={true} position={centeredMenu('1368px')}>
          <Grid sx={{ gridTemplateColumns: 'repeat(4, minmax(0, 1fr))', gap: '24px', p: '24px' }}>
            <Product
              title="Application Proxy"
              titleColor="#818c96"
              padding="0"
              links={[
                {
                  icon: <IconKubernetesIngress />,
                  url: 'https://traefik.io/solutions/kubernetes-ingress/',
                  external: true,
                  description: 'A centralized routing solution for your Kubernetes deployment.',
                  title: 'Kubernetes Ingress',
                },
                {
                  title: 'Kubernetes Gateway API',
                  url: 'https://traefik.io/solutions/gateway-api/',
                  external: true,
                  description: 'Deploy Gateway API with confidence.',
                  icon: <KubernetesIcon />,
                },
                {
                  title: 'Knative Serving',
                  url: 'https://traefik.io/solutions/knative/',
                  external: true,
                  description: 'Production-ready networking to your serverless workloads.',
                  icon: <IconKnative />,
                },
                {
                  title: 'Ingress NGINX Provider',
                  url: 'https://traefik.io/choose-traefik-oss/',
                  external: true,
                  description: 'Don’t wait for the next vulnerability. Migrate now!',
                  icon: <NginxIcon />,
                },
                {
                  title: 'OSS Support',
                  url: 'https://traefik.io/solutions/oss-support/',
                  external: true,
                  description: 'Access the engineers who built the code running your infrastructure.',
                  icon: <IconProxy />,
                },
              ]}
            />
            <Product
              title="API Gateway"
              titleColor="#818c96"
              padding="0"
              links={[
                {
                  title: 'Modern API Gateway',
                  url: 'https://traefik.io/solutions/api-gateway/',
                  external: true,
                  description: 'Centralize security and routing in a single entry point for microservices deployments.',
                  icon: <ApiGatewayIcon />,
                },
                {
                  title: 'Web Application Firewall',
                  url: 'https://traefik.io/solutions/waf/',
                  external: true,
                  description: 'Protect your APIs from threats with speed and efficiency',
                  icon: <WafIcon />,
                },
                {
                  title: 'Hardened Secure Image',
                  url: 'https://traefik.io/solutions/hardened-secure-image/',
                  external: true,
                  description: 'Distro Zero, memory-safe Go binary with FIPS 140-3',
                  icon: <IconHardenedSecureImage />,
                  badge: 'New!',
                },
                {
                  title: 'FIPS 140-3',
                  url: 'https://traefik.io/solutions/application-level-fips-140-3/',
                  external: true,
                  description: 'Validated Module in a Compliant Application Out-of-the-Box',
                  icon: <IconFips />,
                  badge: 'New!',
                },
              ]}
            />
            <Product
              title="AI & MCP Gateway"
              titleColor="#818c96"
              padding="0"
              links={[
                {
                  title: 'AI Gateway',
                  url: 'https://traefik.io/solutions/ai-gateway/',
                  external: true,
                  description: 'Enterprise AI Gateway with Built-In, Responsible AI Guardrails',
                  icon: <AiGatewayIcon />,
                },
                {
                  title: 'MCP Gateway',
                  url: 'https://traefik.io/solutions/mcp-gateway/',
                  external: true,
                  description: 'Govern how agents access MCP servers.',
                  icon: <IconMcpGateway />,
                },
                {
                  title: 'Verifiable Agent Evidence',
                  url: 'https://traefik.io/solutions/verifiable-agent-evidence/',
                  external: true,
                  description: 'Prove what your agents did.',
                  icon: <IconSovereignTrustPlane />,
                  badge: 'New!',
                },
                {
                  title: 'Traefik MCP Server',
                  url: 'https://traefik.io/solutions/traefik-mcp-server',
                  external: true,
                  description: 'Understand what happened and why',
                  icon: <IconMcpServer />,
                  badge: 'New!',
                },
              ]}
            />
            <Product
              title="API Management"
              titleColor="#818c96"
              padding="0"
              links={[
                {
                  title: 'GitOps-Driven API Management',
                  url: 'https://traefik.io/solutions/api-management/',
                  external: true,
                  description: 'Simplifies and Accelerates API lifecycle management.',
                  icon: <APIManagementIcon />,
                },
                {
                  title: 'Runtime API Governance',
                  url: 'https://traefik.io/solutions/api-governance/',
                  external: true,
                  description:
                    'Enforce critical runtime API policies for secure, reliable, and compliant API management.',
                  icon: <ApiGovernanceIcon />,
                },
                {
                  title: 'Air-Gapped API Management',
                  url: 'https://traefik.io/solutions/air-gapped-ai-and-api-management/',
                  external: true,
                  description: 'Air-gapped AI & API Platform with Policy-as-Code & Zero-Egress Ops.',
                  icon: <OfflineApim />,
                },
                {
                  title: 'API Mocking',
                  url: 'https://traefik.io/solutions/api-mocking/',
                  external: true,
                  description: 'Create, publish, and consume mock APIs with production-like UX and SLAs.',
                  icon: <ApiMockingIcon />,
                },
              ]}
            />
          </Grid>
        </NavItem>

        {/* Partners */}
        <NavItem name="Partners" hasSubmenu position={{ marginLeft: '-80px' }}>
          <Grid sx={{ width: '415px', p: '24px' }}>
            <Product
              title="Better Together"
              titleColor="#818c96"
              padding="0"
              compact
              links={[
                {
                  title: 'HashiCorp',
                  url: 'https://traefik.io/solutions/hashicorp-and-traefik/',
                  external: true,
                  description: 'A comprehensive API gateway for HashiCorp Stack',
                  icon: <HashicorpIcon />,
                },
                {
                  title: 'Microsoft',
                  url: 'https://traefik.io/solutions/microsoft-and-traefik/',
                  external: true,
                  description: 'Run your APIs and AI across any infrastructure, any Kubernetes.',
                  icon: <MicrosoftIcon />,
                },
                {
                  title: 'Nutanix for Enterprises',
                  url: 'https://traefik.io/solutions/nutanix-and-traefik/',
                  external: true,
                  description: 'A holistic solution for modern AI & API management.',
                  icon: <NutanixIcon />,
                },
                {
                  title: 'Nutanix for Service Providers',
                  url: 'https://traefik.io/solutions/traefik-hub-and-nutanix-for-service-providers',
                  external: true,
                  description: 'Complete your catalog. Keep the margin.',
                  icon: <NutanixIcon />,
                  badge: 'New!',
                },
                {
                  title: 'Oracle OCI',
                  url: 'https://traefik.io/solutions/oracle-and-traefik/',
                  external: true,
                  description: 'Full runtime API management without boundaries.',
                  icon: <OracleIcon />,
                },
                {
                  title: 'SUSE AI Factory',
                  url: 'https://traefik.io/solutions/traefik-and-suse-ai-factory',
                  external: true,
                  description: 'One factory. One runtime. Every call governed.',
                  icon: <IconSuse />,
                  badge: 'New!',
                },
                {
                  title: 'Spectro Cloud PaletteAI',
                  url: 'https://traefik.io/solutions/spectro-cloud-paletteai-and-traefik-hub',
                  external: true,
                  description: 'Inference anywhere. Governance everywhere.',
                  icon: <SpectroCloudIcon />,
                  badge: 'New!',
                },
                {
                  title: 'VMware VCF',
                  url: 'https://traefik.io/solutions/vmware-and-traefik/',
                  external: true,
                  description: 'One front door for the whole VCF estate',
                  icon: <VmwareIcon />,
                  badge: 'New!',
                },
              ]}
            />
          </Grid>
        </NavItem>

        {/* Why Traefik */}
        <NavItem name="Why Traefik" hasSubmenu position={{ marginLeft: '-130px' }}>
          <Grid sx={{ gridTemplateColumns: '256px 192px', gap: '48px', p: '24px' }}>
            <MenuColumn.Column title="Why to choose Traefik" footer={<SuccessStoryCard />}>
              <MenuColumn.Item
                title="Traefik Labs Manifesto"
                href="https://traefik.io/blog/why-choose-traefik"
                external
              />
              <MenuColumn.Item title="Success Stories" href="https://traefik.io/success-stories" external />
            </MenuColumn.Column>
            <MenuColumn.Column title="Compare Traefik">
              <MenuColumn.Item title="vs Apigee" href="https://traefik.io/compare/traefik-vs-apigee" external />
              <MenuColumn.Item title="vs AWS" href="https://traefik.io/compare/traefik-vs-aws-api-gateway" external />
              <MenuColumn.Item
                title="vs Azure"
                href="https://traefik.io/compare/traefik-vs-azure-api-management"
                external
              />
              <MenuColumn.Item title="vs Gravitee" href="https://traefik.io/compare/traefik-vs-gravitee" external />
              <MenuColumn.Item title="vs Kong" href="https://traefik.io/compare/traefik-hub-vs-kong" external />
              <MenuColumn.Item title="vs Tyk" href="https://traefik.io/compare/traefik-vs-tyk" external />
              <MenuColumn.Item
                title="See more comparisons"
                href="https://traefik.io/compare"
                external
                className="menu-item-button"
              />
            </MenuColumn.Column>
          </Grid>
        </NavItem>

        {/* Resources */}
        <NavItem name="Resources" hasSubmenu position={{ marginLeft: '-90px' }}>
          <Grid sx={{ gridTemplateColumns: 'auto auto', gap: '24px', p: '24px', whiteSpace: 'nowrap' }}>
            <MenuColumn.Column title="Learn">
              <MenuColumn.Item title="Blog" href="https://traefik.io/blog" external />
              <MenuColumn.Item title="Resource Library" href="https://traefik.io/resources" external />
              <MenuColumn.Item title="Glossary" href="https://traefik.io/glossary" external />
              <MenuColumn.Item title="Events" href="https://traefik.io/events" external />
            </MenuColumn.Column>
            <MenuColumn.Column title="Community">
              <MenuColumn.Item title="Plugin Catalog" href="https://plugins.traefik.io/" external />
              <MenuColumn.Item title="Community Forum" href="https://community.traefik.io/" external />
            </MenuColumn.Column>
          </Grid>
        </NavItem>

        {/* Docs */}
        <NavItem name="Docs" url="https://doc.traefik.io/" />

        {/* Pricing */}
        <NavItem name="Pricing" url="https://traefik.io/pricing" />
      </Flex>
    </Wrapper>
  )
}

export default MainNav
