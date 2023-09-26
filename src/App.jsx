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
import Trailer from './Section/Trailer'

function App() {
  return (
    <div className='container-fluid principale'>
    <Header/>
    <Hero/>
    <News/>
    <Test/>
    <Trailer/>
    <Jeux/>
       
    </div>
  )
}

export default App
