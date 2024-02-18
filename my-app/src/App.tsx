import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from './components/Profile';
import Home from './components/Home';
import MentorMatch from './components/MentorMatch';
import DirectMessage from './components/DirectMessage';
import LoginPage from './components/LoginPage';
import RegistrationPage from './components/RegistrationPage';
import AppOpenPage from './components/AppOpenPage';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppOpenPage/>}/>
        <Route path="/home" element={<Home />}/>
        <Route path="/login" element = {<LoginPage/>}/>
        <Route path = "/registration" element = {<RegistrationPage/>}/>
        <Route path="/profile" element={<Profile />} />
        <Route path="/mentor" element={<MentorMatch />} />
        <Route path="/message" element={<DirectMessage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
