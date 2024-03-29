import * as React from 'react'
import { createRoot } from 'react-dom/client'
import { Play } from './play'

createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Play />
  </React.StrictMode>,
)
