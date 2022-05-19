import styled from 'styled-components'

import Logo from './Logo'
import Search from './Search'
import SubMenu from './SubMenu'

const NavListBox = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px;
  height: 65px;
  width: 100%;
  max-width: var(--max-width);
  justify-content: space-between;
  align-items: center;
  gap: 1.25rem;

  @media (max-width: 716px) {
    gap: 1rem;
  }
`

const NavList = () => {
  return (
    <NavListBox>
      <Logo />
      <Search />
      <SubMenu />
    </NavListBox>
  )
}

export default NavList
