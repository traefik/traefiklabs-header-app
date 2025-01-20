import styled from 'styled-components'

type Props = {
  title: string
  bgImage?: string
}

const NavHeader = (props: Props) => {
  return (
    <Wrapper>
      <span>{props.title}</span>
      <img
        src="https://traefik.io/images/site-nav/PatternBg-4@3x.png"
        style={{
          position: 'absolute',
          paddingBottom: '0px',
          bottom: '0',
          left: '0',
          right: '0',
        }}
      />
    </Wrapper>
  )
}

export default NavHeader

const Wrapper = styled.div`
  padding: 24px 24px 18px;
  font-size: 20px;
  font-weight: 500;
  line-height: 1.1;
  color: #03192d;
  border-bottom: solid 1px #9aa3ab33;
  position: relative;
`
