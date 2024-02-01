import React from 'react'
import { BrowserRouter,   Navigate,   Route, Routes } from "react-router-dom";
import Root from './Root';
import Home from './pages/Home'
import Signin from './pages/Signin'
import Signup from './pages/Signup';
export default function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={ <Root/> }>
    <Route path="/" element={<Home />} />
    <Route  path="/login" element={<Signin />} />
    <Route  path="/reg" element={<Signup />} />
    </Route>
   </Routes>
   </BrowserRouter>
  )
}
