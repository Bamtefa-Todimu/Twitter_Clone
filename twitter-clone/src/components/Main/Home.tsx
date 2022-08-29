import React from 'react'
import { Routes,Route } from 'react-router-dom'

import Feed from './Feed'
import Explore from './Explore'
import Sidebar from './Sidebar'

import './home.css'

const Home:React.FC= () => {
  return (
    <div className="home-container">
      <div className="home-wrapper">
        <Sidebar/>
        <Routes>
          <Route path = "/home" element={<Feed/>}/>
          <Route path = "/explore" element={<Explore/>}/>
        </Routes>
      </div>
    </div>
  )
}

export default Home