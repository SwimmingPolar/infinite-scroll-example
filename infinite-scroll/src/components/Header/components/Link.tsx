import { useCallback } from 'react'

import { NavLink, NavLinkProps } from 'react-router-dom'
import styled from 'styled-components'

const StyledNavLink = styled.div`
  a {
    color: #222;
    font-size: 1.5rem;
    font-weight: bold;
    text-decoration: none;
    width: min-content;
    padding: 5px 10px;
  }
  a.active {
    color: var(--emphasis);
  }

  @media (max-width: 716px) {
    a {
      font-size: 1.25rem;
    }
  }
  @media (max-width: 480px) {
    a {
      padding: 0;
      font-size: 1.125rem;
    }
  }
`

const Link = (props: NavLinkProps) => {
  const handleClick = useCallback(() => {
    const { to } = props
    const { pathname } = window.location

    if (to === pathname) {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
    }
  }, [])

  return (
    <StyledNavLink onClick={handleClick}>
      <NavLink {...props} />
    </StyledNavLink>
  )
}

export default Link
