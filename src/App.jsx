import React from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'

const App = () => {
  const y = [2024,2025,2026];
  const c = {name:"KIET", location:"Ghaziabad", EstYear:1990}
  return (
    <div>
      <Header title='My firt React App' color='red' year='2026' />
      <Header title='Lets explore FSD together' />

      <card>
        <h2>product: </h2>
        <p>Description:</p>
        <p>Price:</p>
      </card>

      <Footer year={y} company={c} />
    </div>
  )
}

export default App
