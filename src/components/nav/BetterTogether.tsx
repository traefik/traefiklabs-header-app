import React from 'react'
import styled from 'styled-components'
import { ReactComponent as NutanixIcon } from '../../images/menu_icons_nutanix.svg'
import { ReactComponent as MicrosoftIcon } from '../../images/menu_icons_microsoft.svg'
import { ReactComponent as OracleIcon } from '../../images/menu_icons_oracle.svg'
import { ReactComponent as HashicorpIcon } from '../../images/menu_icons_hashicorp.svg'

const partners = [
  {
    title: 'Traefik & Nutanix',
    url: 'https://traefik.io/solutions/nutanix-and-traefik/',
    icon: <NutanixIcon />,
  },
  {
    title: 'Traefik & Microsoft',
    url: 'https://traefik.io/solutions/microsoft-and-traefik/',
    icon: <MicrosoftIcon />,
  },
  {
    title: 'Traefik & Oracle OCI',
    url: 'https://traefik.io/solutions/oracle-and-traefik/',
    icon: <OracleIcon />,
  },
  {
    title: 'Traefik & HashiCorp',
    url: 'https://traefik.io/solutions/hashicorp-and-traefik/',
    icon: <HashicorpIcon />,
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

const Partners = styled.ul`
  display: flex;
  gap: 28px;
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

export default BetterTogether
