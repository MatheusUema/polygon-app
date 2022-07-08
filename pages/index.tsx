import React, {useRef} from 'react'
import { AppContainer} from '../components/AppContainer';
import { Header } from '../components/Header';
import { Sidebar } from '../components/Sidebar';
import { Main } from './styles';

import dynamic from 'next/dynamic'

const MainSection = dynamic(import('../components/MainSection'), {
  ssr: false
})

export const IndexPage = () => { 
  const graphContainerRef = useRef<HTMLDivElement>(null)

  return (
    <AppContainer>
      <Header />  
      <Main>
        <MainSection graphContainerRef={graphContainerRef} />
        <Sidebar graphContainerRef={graphContainerRef} />
      </Main>
    </AppContainer>
)}

export default IndexPage
