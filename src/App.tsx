import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Questions from './components/Questions';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/'
          element={(
            <>
            <h1>Home</h1>
          </>
          )}
        />
         
      </Routes>
    </Router>
  );
}

export default App;
