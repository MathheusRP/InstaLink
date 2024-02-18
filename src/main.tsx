import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {BrowserRouter} from "react-router-dom"
import { GlobalStyled } from './styles/GlobalStyled.tsx'
import { StyleSheetManager } from 'styled-components'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <StyleSheetManager>

    
    <BrowserRouter>
      <GlobalStyled/>
      <App />
    </BrowserRouter>
    </StyleSheetManager>
  </React.StrictMode>,
)
