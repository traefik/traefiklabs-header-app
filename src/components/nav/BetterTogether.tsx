import React from 'react'
import styled from 'styled-components'
import { ReactComponent as NutanixIcon } from '../../images/menu_icons_nutanix.svg'
import { ReactComponent as MicrosoftIcon } from '../../images/menu_icons_microsoft.svg'
import { ReactComponent as OracleIcon } from '../../images/menu_icons_oracle.svg'
import { ReactComponent as HashicorpIcon } from '../../images/menu_icons_hashicorp.svg'
import { ReactComponent as IconSuse } from '../../images/menu_icons_suse.svg'
import { ReactComponent as SpectroCloudIcon } from '../../images/menu_icons_spectro_cloud.svg'
import { ReactComponent as VmwareIcon } from '../../images/menu_icons_vmware.svg'

type Partner = {
  title: string
  url: string
  icon: React.ReactNode
  badge?: string
}

const partners: Partner[] = [
  {
    title: 'HashiCorp',
    url: 'https://traefik.io/solutions/hashicorp-and-traefik/',
    icon: <HashicorpIcon />,
  },
  {
    title: 'Microsoft',
    url: 'https://traefik.io/solutions/microsoft-and-traefik/',
    icon: <MicrosoftIcon />,
  },
  {
    title: 'Nutanix for Enterprises',
    url: 'https://traefik.io/solutions/nutanix-and-traefik/',
    icon: <NutanixIcon />,
  },
  {
    title: 'Nutanix for Service Providers',
    url: 'https://traefik.io/solutions/traefik-hub-and-nutanix-for-service-providers',
    icon: <NutanixIcon />,
    badge: 'New!',
  },
  {
    title: 'Oracle OCI',
    url: 'https://traefik.io/solutions/oracle-and-traefik/',
    icon: <OracleIcon />,
  },
  {
    title: 'SUSE AI Factory',
    url: 'https://traefik.io/solutions/traefik-and-suse-ai-factory',
    icon: <IconSuse />,
    badge: 'New!',
  },
  {
    title: 'Spectro Cloud PaletteAI',
    url: 'https://traefik.io/solutions/spectro-cloud-paletteai-and-traefik-hub',
    icon: <SpectroCloudIcon />,
    badge: 'New!',
  },
  {
    title: 'VMware VCF',
    url: 'https://traefik.io/solutions/vmware-and-traefik/',
    icon: <VmwareIcon />,
    badge: 'New!',
  },
]

const BetterTogether = () => (
  <Wrapper>
    <Title>BETTER TOGETHER</Title>
    <Partners>
      {partners.map((partner) => (
        <li key={partner.url}>
          <a href={partner.url}>
            <PartnerIcon>{partner.icon}</PartnerIcon>
            <span>{partner.title}</span>
            {partner.badge && <Badge>{partner.badge}</Badge>}
          </a>
        </li>
      ))}
    </Partners>
  </Wrapper>
)

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  padding: 12px 16px;
  background-color: #03192d;
  color: #f9fafa;
`

const Title = styled.p`
  margin: 0;
  font-family: Rubik, sans-serif;
  font-size: 12px;
  font-weight: 500;
  line-height: 1.33;
  letter-spacing: 2.18px;
  opacity: 0.6;
`

// Four columns, so the eight partners sit on two rows
const Partners = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, auto);
  gap: 12px 28px;
  list-style: none;
  margin: 0;
  padding: 4px 0;

  li {
    margin: 0;
    padding: 0;
  }

  a {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 16px;
    font-weight: 500;
    color: #f9fafa;
    text-decoration: none;
  }
`

const PartnerIcon = styled.i`
  display: flex;
  padding: 4px;
  background-color: #fff;
  border-radius: 6px;

  svg {
    width: 24px;
    height: 24px;
  }
`

const Badge = styled.span`
  padding: 1px 5px;
  font-size: 12px;
  font-weight: 600;
  line-height: 16px;
  color: #03192d;
  background-color: #d5ea48;
  border-radius: 9999px;
  white-space: nowrap;
`

export default BetterTogether
