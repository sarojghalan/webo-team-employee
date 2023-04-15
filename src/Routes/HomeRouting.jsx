import React from 'react'
import Home from '../pages/Home'
import { Route,Routes } from 'react-router-dom'
import TeamForm from '../components/Team/TeamForm'
import EmployeeForm from '../components/Employee/EmployeeForm'

const HomeRouting = () => {
  return (
    <>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/add_team' element={<TeamForm />} />
            <Route path='/add_employee' element={<EmployeeForm />} />
        </Routes>
    </>
  )
} 

export default HomeRouting