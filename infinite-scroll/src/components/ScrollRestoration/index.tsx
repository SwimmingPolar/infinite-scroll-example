import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState
} from 'react'

import { useLocation } from 'react-router-dom'

import { once } from 'libs/utils'

const scrollStorage = new Map<string, number>()

const ScrollRestorationContext = createContext({
  childMounted: false,
  _provider: false
})

/**
 * ScrollRestoration: parent
 */
export const ScrollRestoration = ({ children }: { children: JSX.Element }) => {
  const { pathname } = useLocation()

  const [value, setValue] = useState({
    childMounted: false,
    _provider: true
  })

  useEffect(() => {
    setValue(prev => ({ ...prev, childMounted: true }))
  }, [])

  useEffect(() => {
    const handleScroll = () => scrollStorage.set(pathname, window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <ScrollRestorationContext.Provider value={value}>
      <div style={{ visibility: value.childMounted ? 'visible' : 'hidden' }}>
        {children}
      </div>
    </ScrollRestorationContext.Provider>
  )
}

/**
 * RestoreScroll: child
 */
interface RestoreScrollProps {
  children: ({ scrollTop }: { scrollTop: number }) => JSX.Element
  scrollTop: number
}
export const RestoreScroll = ({ scrollTop, children }: RestoreScrollProps) => {
  const { _provider } = useContext(ScrollRestorationContext)
  if (!_provider) {
    console.warn('ScrollRestoration component is not provided')
  }

  const { pathname } = useLocation()

  /**
   * @issue Why need to return stored scroll position twice?
   */
  const restoreScroll = useCallback(
    once(() => {
      return scrollStorage.get(pathname)
    }, 2),
    [pathname]
  )

  return children({ scrollTop: restoreScroll() || scrollTop })
}
