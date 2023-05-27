import React, { useState } from 'react'
import Login from './pages/auth/Login'
import { Routes, Route,Navigate } from 'react-router-dom'
import Dashboard from './pages/institute/Dashboard'
import Institute from './components/Institute'
import Course from './components/Course'
import Teachers from './components/Teachers'

const App = () => {
  const currentUser= true


  return (
    <div>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/login' element={<Login />} />
        <Route path={'/institute'} element={<Institute />} />
        <Route path={'/course'} element={<Course />} />
        <Route path={'/teachers'} element={<Teachers />} />
      </Routes>
    </div>
  )
}

export default App