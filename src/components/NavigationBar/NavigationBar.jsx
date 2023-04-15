import React from 'react'
import {useNavigate} from 'react-router-dom'

const NavigationBar = () => {
  const navigate = useNavigate();
  const navigateHandler = (e) => {
    e.preventDefault();
    navigate('/');
  }
  return (
    <div className='center navigation'>
        <p onClick={navigateHandler}>NAVIGATION BAR</p>
    </div>
  )
}

export default NavigationBar