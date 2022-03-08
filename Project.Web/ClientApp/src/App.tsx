import { Layout } from './components/Layout'
import { Home } from './components/Home'
import { FetchData } from './components/FetchData'
import { Counter } from './components/Counter'
import { AuthorizaionContextProvider, AuthorizaionContext } from './components/authorization/AuthorizationContext'
import './custom.css'
import React, { useContext, useEffect } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import { AuthorizationPage } from './components/authorization/AuthorizationPage'

export const App: React.FC = () => {
  return <AuthorizaionContextProvider>
    <AppInner />
  </AuthorizaionContextProvider>
}

const AppInner: React.FC = () => {
  const { isAuthorized } = useContext(AuthorizaionContext)
  const navigate = useNavigate()

  useEffect(() => {
    if (!isAuthorized)
      return navigate('/login')
  }, [isAuthorized])

  return <>
    <Layout>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/counter' element={<Counter/>} />
        <Route path='/fetch-data' element={<FetchData/>} />
        <Route path='/login' element={<AuthorizationPage/>} />
      </Routes>
    </Layout>
  </>
}
