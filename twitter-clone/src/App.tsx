import React from 'react';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'

import './App.css';
import Login from './components/Auth/Login';
import Home from './components/Main/Home';

const App:React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/home' element={<Home/>} />
      </Routes>
    </Router>
  );
}

export default App;
