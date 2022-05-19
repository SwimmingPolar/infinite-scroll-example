import styled from 'styled-components'

import Link from './Link'

const LogoBox = styled.div`
  flex-basis: 250px;

  h1 {
    color: var(--primary);
    width: min-content;
  }

  @media (max-width: 716px) {
    h1 {
      font-size: 2.75rem;
    }
  }
  @media (max-width: 480px) {
    h1 {
      font-size: 2.5rem;
    }
  }
`

const Logo = () => {
  return (
    <LogoBox>
      <Link to="/">
        <h1>LOGO</h1>
      </Link>
    </LogoBox>
  )
}

export default Logo
