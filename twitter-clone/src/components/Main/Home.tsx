import React from 'react'
import { Routes,Route } from 'react-router-dom'

import Feed from './Feed'
import Sidebar from './Sidebar'

import './home.css'

const Home:React.FC= () => {
  return (
    <div className="home-container">
      <div className="home-wrapper">
        <Sidebar/>
        <Routes>
          <Route path = "/" element={<Feed/>}/>
        </Routes>
      </div>
    </div>
  )
}

export default Home