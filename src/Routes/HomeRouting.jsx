import React from 'react'
import Home from '../pages/Home'
import { Route,Routes } from 'react-router-dom'
import TeamForm from '../components/Team/TeamForm'

const HomeRouting = () => {
  return (
    <>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/add_teams' element={<TeamForm />} />
        </Routes>
    </>
  )
} 

export default HomeRouting