import {  Toaster } from 'react-hot-toast';
import './App.css'
import Nav from './components/Nav';
import Home from './pages/Home';
import Login from './pages/Login';
import Signin from './pages/Signin';
import Profile from './pages/Profile';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <>
    <Toaster/>
     <BrowserRouter>
        <Nav/>
        
      <Routes>
        <Route path="/" element={<Login/>}/> 
        <Route path="/signin" element={<Signin/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/profile" element={<Profile/>} />
      </Routes>
    </BrowserRouter>
     
    
   
    </>
  )
}

export default App
