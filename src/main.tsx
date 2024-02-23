import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {BrowserRouter} from "react-router-dom"
import { GlobalStyled } from './styles/GlobalStyled.tsx'
import { StyleSheetManager } from 'styled-components'
import { UserProvider } from './context/useContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <StyleSheetManager>
    <BrowserRouter>
      <GlobalStyled/>
      <UserProvider>

      <App />
      </UserProvider>
      </BrowserRouter>
    </StyleSheetManager>
  </React.StrictMode>,
)
