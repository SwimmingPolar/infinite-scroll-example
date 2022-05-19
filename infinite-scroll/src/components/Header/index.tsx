import { useLocation } from 'react-router-dom'
import styled from 'styled-components'

import NavList from './components/NavList'

const HeaderBox = styled.header`
  flex-direction: column;
`

const TopPadding = styled.div<{ shouldFix?: boolean }>`
  flex-basis: ${({ shouldFix }) => (shouldFix ? '65px' : '0px')};
`

const FixedNavBox = styled.div`
  position: relative;
`

const FixedNav = styled.div<{ shouldFix?: boolean }>`
  position: ${({ shouldFix }) => (shouldFix ? 'fixed' : 'relative')};
  width: 100%;
  height: 65px;
  top: 0;
  z-index: 1;
  border-bottom: solid 1px rgba(85, 100, 120, 0.25);
  background-color: var(--primary-fg);
  flex-direction: row;
  justify-content: center;
`

const fixedNavbarPath = ['/', '/profile']

const Header = () => {
  const { pathname } = useLocation()
  const shouldFix = fixedNavbarPath.includes(pathname)

  return (
    <HeaderBox>
      <TopPadding shouldFix={shouldFix} />
      <FixedNavBox>
        <FixedNav shouldFix={shouldFix}>
          <NavList />
        </FixedNav>
      </FixedNavBox>
    </HeaderBox>
  )
}

export default Header
