import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import News from './Section/News'
import './assets/Css/Bouton.css'
import Jeux from './Section/Jeux'
import Test from './Section/Test'
import Hero from './Section/Hero'
import Footer from './Section/Footer'
import Live from './Section/Live'
import Podcast from './Section/Podcast'
import Trailer from './Section/Trailer'

function App() {
  return (
    <div className='container-lg container-fluid principale'>
      <Header/>
      <Hero/>
      <News/>
      <Live/>
      <Podcast />
      <Test/>
      <Trailer/>
      <Jeux/>
      <Footer />     
    </div>
  )
}

export default App
