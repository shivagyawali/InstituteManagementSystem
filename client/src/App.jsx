import React from 'react'
import Login from './pages/auth/Login'
import { Routes, Route } from 'react-router-dom'
import Dashboard from './pages/institute/Dashboard'
import Course from './components/Course'
import Teachers from './components/Teachers'
import Students from './components/Students'
import Staffs from './components/Staffs'
import AddInstitute from './components/AddInstitute'
import Institute from './pages/institute/Institute'
import AddCourse from './components/AddCourse'
import AddStaff from './components/AddStaff'
import AddTeacher from './components/AddTeacher'
import AddStudent from './components/AddStudent'
import Profile from './components/Profile'
import Settings from './components/Settings'

const App = () => {

  return (
    <div>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/login' element={<Login />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/settings' element={<Settings />} />
        <Route path='/institute' element={<Institute />} />
        <Route path={'/course'} element={<Course />} />
        <Route path={'/teachers'} element={<Teachers />} />
        <Route path={'/students'} element={<Students />} />
        <Route path={'/staffs'} element={<Staffs />} />
        <Route path={'/addinstitute'} element={<AddInstitute />} />
        <Route path={'/addcourse'} element={<AddCourse />} />
        <Route path={'/addstaff'} element={<AddStaff />} />
        <Route path={'/addteacher'} element={<AddTeacher />} />
        <Route path={'/addstudent'} element={<AddStudent />} />
      </Routes>
    </div>
  )
}

export default App