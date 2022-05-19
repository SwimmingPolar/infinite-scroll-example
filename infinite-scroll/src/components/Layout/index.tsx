import { Outlet } from 'react-router-dom'
import styled from 'styled-components'

import Header from '../Header'

const Main = styled.main`
  flex-direction: column;
  width: 100%;
  height: 100%;
`
const Section = styled.section`
  max-width: var(--max-width);
  margin: 0 auto;
  width: 100%;
`

const Layout = () => {
  return (
    <Main>
      <Header />
      <Section>
        <Outlet />
      </Section>
    </Main>
  )
}

export default Layout
