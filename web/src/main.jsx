import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import { ContextProvider } from './context/Provider'
import { NuiProvider } from 'fivem-nui-react-lib'


const container = document.querySelector('#root')
const root = createRoot(container)

root.render(
  <React.StrictMode>
    <NuiProvider resource='RESOURCENAME'>
      <ContextProvider>
        <App />
      </ContextProvider>
    </NuiProvider>
  </React.StrictMode>
)
