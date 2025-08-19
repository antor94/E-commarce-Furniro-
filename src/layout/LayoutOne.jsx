import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Service from '../components/Service'

const LayoutOne = () => {
  return (
    <>
    <Navbar />
    <Outlet />
    <Service />
    <Footer />
    
    
    </>
  )
}

export default LayoutOne