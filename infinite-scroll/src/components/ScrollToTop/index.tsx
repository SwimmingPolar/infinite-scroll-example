import { useEffect } from 'react'

import { useLocation } from 'react-router-dom'

const exceptionList = ['/']

export default function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    // components listed in exception list will not be scrolled to top
    if (exceptionList.includes(pathname)) return

    window.scrollTo(0, 0)
  }, [pathname])

  return null
}
