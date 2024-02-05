import { useCounter } from './useCounter'

interface CounterProps {
  initialCount?: number
}

export function Counter({ initialCount = 0 }: CounterProps = {}) {
  const { count, increment } = useCounter({ initialCount })
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment}>Increment</button>
    </div>
  )
}
