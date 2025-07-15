import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import LogInPage from './pages/LogIn';
import SignUpPage from './pages/SignUp';
import ProfilePage from './pages/Profile';
import ContactsPage from './pages/Contacts'; 
import LibraryPage from './pages/Library';
import GameDetailsPage from './pages/GameDetails'; 
import AddGamePage from './pages/AddGame';
import LandingPage from './pages/LandingPage';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LogInPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/contacts" element={<ContactsPage />} /> 
        <Route path="/library" element={<LibraryPage />} />
        <Route path="/game/:id" element={<GameDetailsPage/>} />
        <Route path="/addgame" element={<AddGamePage/>} />

      </Routes>
    </Router>
  );
}

export default App;
