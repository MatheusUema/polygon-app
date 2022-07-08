import React from 'react'
import { AppContainer} from '../components/AppContainer';
import { Header } from '../components/Header';
import { Sidebar } from '../components/Sidebar';
import { Main } from '../public/styles';
import { AggregateProvider } from '../hooks/useAggregate';

import dynamic from 'next/dynamic'

const MainSection = dynamic(import('../components/MainSection'), {
  ssr: false
})

export const IndexPage = () => { 

  return (
  <AggregateProvider>
    <AppContainer>
      <Header />  
      <Main>
        <MainSection />
        <Sidebar />
      </Main>
    </AppContainer>
  </AggregateProvider>
)}

export default IndexPage
