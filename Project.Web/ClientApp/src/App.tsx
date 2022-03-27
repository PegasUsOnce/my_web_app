import { Layout } from './components/Layout'
import { Home } from './components/Home'
import { FetchData } from './components/FetchData'
import { Counter } from './components/Counter'
import './custom.css'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { AuthorizationPage } from './components/authorization/AuthorizationPage'
import { BasketPage } from './components/pages/basket/BasketPage'
import { CatalogPage } from './components/pages/catalog/CatalogPage'

export const App: React.FC = () => {
  return <>
      <Layout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/counter' element={<Counter />} />
          <Route path='/fetch-data' element={<FetchData />} />
          <Route path='/login' element={<AuthorizationPage />} />
          <Route path='/basket' element={<BasketPage />} />
          <Route path='/services' element={<CatalogPage contentType='services' />} />
          <Route path='/products' element={<CatalogPage contentType='products' />} />
        </Routes>
      </Layout>
  </>
}
