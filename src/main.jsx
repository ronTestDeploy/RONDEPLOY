import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './main.css'

import App from './app'
import Context from './context'

createRoot(document.getElementById('root')).render(
  <Context>
    <App/>
  </Context>,
)
