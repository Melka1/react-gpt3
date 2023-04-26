import React from 'react'

import { Navbar, Cta, Brand } from './components'
import {Blog, Possibility, Header, Features, Footer, WhatGPT3} from './containers'
import './App.css'


function App() {
  return (
    <div className='app'>
      <div className='gradient__bg'>
        <Navbar/>
        <Header/>
      </div>
      <Brand/>
      <WhatGPT3/>
      <Features/>
      <Possibility/>
      <Cta/>
      <Blog/>
      <Footer/>
    </div>
  )
}

export default App