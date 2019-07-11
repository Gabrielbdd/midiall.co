import { useEffect, useState } from 'react'

const useScrollYHistory = () => {
  const [[lastY, currentY], setScrollYHistory] = useState([0, 0])

  useEffect(() => {
    const onScroll = () => {
      setScrollYHistory([currentY, window.pageYOffset])
    }

    document.addEventListener('scroll', onScroll, { passive: true })

    return () => document.removeEventListener('scroll', onScroll)
  })

  return { lastY, currentY }
}

export const useHeaderVisibility = () => {
  const { lastY, currentY } = useScrollYHistory()

  const [over, setOver] = useState(false)
  const [hidden, setHidden] = useState(false)

  let requestRunning: number | null = null
  useEffect(() => {
    if (requestRunning !== null) {
      return
    }

    requestRunning = requestAnimationFrame(() => {
      if (currentY < lastY || currentY === 0) {
        setHidden(false)
      }

      if (currentY > lastY) {
        setHidden(true)
      }

      setOver(currentY > 0)

      requestRunning = null
    })
  }, [lastY, currentY])

  return { hidden, over }
}
