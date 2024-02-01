import React from 'react'
import { Link } from 'react-router-dom'
import Signup from './Signup'
import Navbar from '../parts/Navbar'
import Hero from '../parts/Hero'
import Search from '../parts/Search'
export default function home() {
  return (
    <>
    <Navbar />
    
    <Hero />
    <Search />

    </>
  
  )
}
