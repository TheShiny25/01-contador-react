import React from 'react'
import ReactDOM from 'react-dom/client'

import { CounterApp } from './CounterApp.jsx'
import { BrowserRouter } from 'react-router-dom'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <CounterApp />
    </BrowserRouter>
  </React.StrictMode>,
)
