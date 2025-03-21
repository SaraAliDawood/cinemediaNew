import React from 'react'
import style from "./Layeout.module.css"
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router-dom'


function Layeout() {
  return (
    <> 
    <Navbar />
    <div ><Outlet/></div>
    <Footer/>
    </>
  )
}

export default Layeout