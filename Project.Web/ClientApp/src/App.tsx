import { Layout } from './components/Layout'
import { Home } from './components/Home'
import { FetchData } from './components/FetchData'
import { Counter } from './components/Counter'
import './custom.css'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { AuthorizationPage } from './components/authorization/AuthorizationPage'

export const App: React.FC = () => {
  return <>
      <Layout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/counter' element={<Counter />} />
          <Route path='/fetch-data' element={<FetchData />} />
          <Route path='/login' element={<AuthorizationPage />} />
        </Routes>
      </Layout>
  </>
}
