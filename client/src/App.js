import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import GeneralRouter from './components/GeneralRouter'
import NavBar from './components/NavBar'
const App = () => {
  return (
    <BrowserRouter>
      <NavBar/>
      <GeneralRouter/>
      
    </BrowserRouter>
  )
}

export default App