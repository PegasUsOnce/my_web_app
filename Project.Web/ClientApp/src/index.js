import 'bootstrap/dist/css/bootstrap.css'
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { App } from './App'
import registerServiceWorker from './registerServiceWorker'
import { AuthorizaionContextProvider } from './components/authorization/AuthorizationContext'

const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href')
const rootElement = document.getElementById('root')

ReactDOM.render(
  <AuthorizaionContextProvider>
    <BrowserRouter basename={baseUrl}>
      <App />
    </BrowserRouter>
  </AuthorizaionContextProvider>,
  rootElement)

registerServiceWorker()