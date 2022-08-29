import React from 'react';
import { Provider } from 'react-redux';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import configureStore from './store/store'


import './App.css';
import Login from './components/Auth/Login';
import Home from './components/Main/Home';

const store = configureStore()


const App:React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path='/' element={<Login/>} />
          <Route path='/t/*' element={<Home/>} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
