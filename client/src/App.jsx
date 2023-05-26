import React from 'react'
import Login from './pages/auth/Login'
import {Routes, Route} from 'react-router-dom'
import Dashboard from './pages/institute/Dashboard'

const App = () => {
  return (
    <div>
      
      <Routes>
        <Route path='/' element={ <Login /> }/>
        <Route path='/dashboard' element={ <Dashboard /> }/>
      </Routes>
    </div>
  )
}

export default App