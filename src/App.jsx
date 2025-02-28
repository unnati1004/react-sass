import { useState } from 'react'
// import './App.css'
import { Navbar } from './components/navbar/Navbar'
import { Hero } from './components/hero/Hero'
import { Companies } from './components/companies/companies'
import { Pricing } from './components/pricing/pricing'
import { Earnings } from './components/earnings/earnings'
import { Status } from './components/status/statsus'
import { Subscribe } from './components/subscribe/Subscribe'
function App() {

  return (
    <>
    <Navbar/>
    <Hero/>
    <Companies/>
    <Pricing/>
    <Earnings/>
    <Status/>
    <Subscribe/>
    </>
  )
}

export default App
