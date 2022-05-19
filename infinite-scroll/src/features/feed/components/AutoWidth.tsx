import { useCallback, useRef, useState, useEffect } from 'react'

let memoizedWidth = 0
/**
 *  This component will be rendered twice
 */
interface AutoWidthProps {
  children: ({ width }: { width: number }) => JSX.Element
}
export default function AutoWidth({ children }: AutoWidthProps) {
  const [width, setWidth] = useState(0)
  const ref = useRef<HTMLDivElement>(null)

  const getWidth = useCallback(() => {
    if (!ref || !ref.current) return 0
    ref.current.style.width = '100%'
    const width = ref.current.offsetWidth
    ref.current.style.width = '0'

    return width
  }, [ref])

  const updateWidth = useCallback((width: number): boolean => {
    if (width === 0) return false

    memoizedWidth = width
    setWidth(width)
    return true
  }, [])

  const resizeHandler = useCallback(() => {
    const newWidth = getWidth()
    if (newWidth === memoizedWidth) return

    updateWidth(newWidth)

    /**
     *  @issue This component will be rendered twice
     * maybe debounce it?
     */
    setTimeout(() => {
      const lastMeasuredWidth = getWidth()
      updateWidth(lastMeasuredWidth)
    }, 0)
  }, [updateWidth])

  useEffect(() => {
    window.addEventListener('resize', resizeHandler)

    return () => {
      window.removeEventListener('resize', resizeHandler)
    }
  }, [])

  // initial measuring
  useEffect(() => {
    if (ref === null) return

    const width = getWidth()
    updateWidth(width)
  }, [ref])

  return (
    <>
      <div ref={ref} style={{ visibility: 'hidden', width: 0, height: 0 }} />
      {ref && width !== 0 && children({ width })}
    </>
  )
}
