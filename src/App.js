import React from 'react'
import styled from 'styled-components'
import MainSection from './components/sections/MainSection'
import BodySection from './components/sections/BodySection'
import FooterSection from './components/sections/FooterSection'

const Wrap = styled.main`
  display:flex;
  flex-direction:column;
`

const Main = styled.section`
  background: #591;
  position:relative;
  height:100vh;
`

const Body = styled.section`
  background: #155;
  position:relative;
  height:100vh;
`

const Footer = styled.section`
  background: #525;
  position:relative;
  height:100px;
`

function App() {
  return (
    <Wrap>
      <Main>
        <MainSection />
      </Main>
      <Body>
        <BodySection />
      </Body>
      <Footer>
        <FooterSection />
      </Footer>
    </Wrap>
  )
}

export default App
