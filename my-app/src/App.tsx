import React from 'react';
import logo from './logo.svg';
import './App.css';
import ProfileForm from './components/ProfileForm';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from './components/Profile';
import Home from './components/Home';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
