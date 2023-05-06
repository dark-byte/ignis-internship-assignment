import React from 'react';
import Login from './Login';
import Signup from './Signup';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
      <Routes>
        <Route path ="/" element ={<Login/>} />
        <Route path="/register" element ={<Signup/>} />
      </Routes>
    </Router>
  );
}

export default App
