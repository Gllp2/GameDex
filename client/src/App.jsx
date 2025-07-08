import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import LogInPage from './pages/LogIn';
import SignUpPage from './pages/SignUp';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LogInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        
      </Routes>
    </Router>
  );
}

export default App;
