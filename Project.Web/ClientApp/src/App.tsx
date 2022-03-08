import { Layout } from './components/Layout'
import { Home } from './components/Home'
import { FetchData } from './components/FetchData'
import { Counter } from './components/Counter'
import { AuthorizaionContextProvider, AuthorizaionContext } from './components/authorization/AuthorizationContext'
import './custom.css'
import React, { useContext } from 'react'
import { Route } from 'react-router-dom'
import { AuthorizationPage } from './components/authorization/AuthorizationPage'

export const App: React.FC = () => {
  return <AuthorizaionContextProvider>
    <AppInner />
  </AuthorizaionContextProvider>
}

const AppInner: React.FC = () => {
  const { isAuthorized } = useContext(AuthorizaionContext)

  return <>
    <Layout>
      {isAuthorized
        ? <>
          < Route exact path='/' component={Home} />
          <Route path='/counter' component={Counter} />
          <Route path='/fetch-data' component={FetchData} />
        </>
        : <Route component={AuthorizationPage} />
      }
    </Layout>
  </>
}
