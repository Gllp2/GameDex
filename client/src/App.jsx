import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import LogInPage from './pages/LogIn';
import SignUpPage from './pages/SignUp';
import ProfilePage from './pages/Profile';
import ContactsPage from './pages/Contacts'; 
import LibraryPage from './pages/Library';
import GameDetailsPage from './pages/GameDetails'; 
import AddGamePage from './pages/AddGame';
import AboutPage from './pages/AboutUs';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LogInPage />} /> //done
        <Route path="/signup" element={<SignUpPage />} /> //done
        <Route path="/profile" element={<ProfilePage />} /> //done
        <Route path="/contacts" element={<ContactsPage />} /> 
        <Route path="/library" element={<LibraryPage />} /> //done
        <Route path="/game/:id" element={<GameDetailsPage/>} /> 
        <Route path="/addgame" element={<AddGamePage/>} /> //done

        
      </Routes>
    </Router>
  );
}

export default App;
