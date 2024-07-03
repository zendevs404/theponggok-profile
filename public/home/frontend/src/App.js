import React from 'react'
import Home from './pages/Home'
import About from './pages/About'
import Tim from './pages/Tim'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/tim" element={<Tim/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App