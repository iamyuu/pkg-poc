import { useState } from 'react'

interface UseCounterProps {
  initialCount?: number
}

export function useCounter({ initialCount = 0 }: UseCounterProps = {}) {
  const [count, setCount] = useState(initialCount)

  const increment = () => {
    setCount(prevCount => prevCount + 1)
  }

  return { count, increment }
}
