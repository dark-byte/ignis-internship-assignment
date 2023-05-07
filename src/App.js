import React from 'react';
import Login from './Login';
import Signup from './Signup';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Main from './Main';

function App() {
  return (
    <main>
      <Router>
        <Routes>
          <Route path="/" element ={<Main/>} />
          <Route path ="/login" element ={<Login/>} />
          <Route path="/register" element ={<Signup/>} />
        </Routes>
      </Router>
    </main>
  );
}

export default App
