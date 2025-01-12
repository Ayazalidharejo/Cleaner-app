import React from 'react'
import { Outlet } from 'react-router-dom'
import HeroSection from './heroSection'
import CleaningSection from '../Provide/Provide'




const HomePage = () => {
  return (
    <>
    <HeroSection/>
    <CleaningSection/>

   <Outlet/>
    </>
  )
}

export default HomePage