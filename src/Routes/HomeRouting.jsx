import React from 'react'
import Home from '../pages/Home'
import { Route,Routes } from 'react-router-dom'

const HomeRouting = () => {
  return (
    <>
        <Routes>
            <Route path='/' element={<Home />} />
        </Routes>
    </>
  )
}

export default HomeRouting