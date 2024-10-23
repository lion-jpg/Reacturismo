import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Scene from './components/Scene';
import BoardPage from './components/BoardPage';
// import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Scene />} />
        <Route path="/board" element={<BoardPage />} />
      </Routes>
    </Router>
  );
}

export default App;
