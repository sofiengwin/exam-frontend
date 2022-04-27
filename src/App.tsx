import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Questions from './components/Questions';
import Login from './components/Authentication/Login';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={( <Login />)}/>
         
      </Routes>
    </Router>
  );
}

export default App;
