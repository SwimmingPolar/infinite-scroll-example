import styled from 'styled-components'

import Link from './Link'

const SubMenuBox = styled.nav`
  flex-direction: row;
  & > div {
    margin-right: 10px;
    padding-right: 10px;
    position: relative;
  }
  & > div:not(:last-child)::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    border-left: solid 1px rgba(85, 100, 120, 0.5);
    height: 100%;
  }
`

const SubMenu = () => (
  <SubMenuBox>
    <div>
      <Link to="/">Feed</Link>
    </div>
    <div>
      <Link to="/profile">Profile</Link>
    </div>
    <div>
      <Link to="/community">Community</Link>
    </div>
  </SubMenuBox>
)

export default SubMenu
