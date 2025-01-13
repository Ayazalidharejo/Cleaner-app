import React from 'react'
import { Outlet } from 'react-router-dom'
import HeroSection from './heroSection'
import CleaningSection from '../Provide/Provide'
import CleaningServices from '../ExploreSection/Explore'
import ContactSection from '../ContactSection/Contect'
import Footer from '../Footer/Footer'
import ExpertTeam from '../TeamExplore/TeamExplore'
import HowItWorks from '../HowWework/Howwork'
import Feedback from '../Feedback/Feedback'




const HomePage = () => {
  return (
    <>
    <HeroSection/>
    <CleaningSection/>
    <ExpertTeam/>
    <HowItWorks/>
<CleaningServices/>
<Feedback/>
<ContactSection/>
<Footer/>
   <Outlet/>
    </>
  )
}

export default HomePage