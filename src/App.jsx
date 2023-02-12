import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Register from './components/Register'
import Verify from './components/Verify'
import Login from './components/Login'
import Home from './components/Home'
import Manage from './components/Manage'
import WelcomePage from './components/WelcomePage'
import { Routes, Route } from 'react-router-dom'
import NewAvatar from './components/NewAvatar'


function App() {

  

  return (
    <>

      <Routes>
        <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/verify" element={<Verify />} />
          <Route path="home" element={<Home />}>
          <Route path="/home/" element={<WelcomePage />} />
          <Route path="/home/manage" element={<Manage />} />
            </Route>
            <Route path="/new-avatar" element={<NewAvatar />} />
          <Route path="/manage" element={<Manage />} />
      </Routes>
    
    </>
  )
}

export default App
