import React from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'

const App = () => {
  const y = [2024,2025,2026];
  const c = {name:"KIET", location:"Ghaziabad", EstYear:1990}
  return (
    <div>
      <Header title='My firt React App' />
      <Header title='Thanks' />
      <Footer year={y} company={c} />
    </div>
  )
}

export default App
