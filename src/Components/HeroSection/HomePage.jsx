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
import PricingCards from '../CardsSection/CardSection'
import VideooSection from '../VideoSection/VideoSection'




const HomePage = () => {
  return (
    <>
    <HeroSection/>
    <CleaningSection/>
   
  
<CleaningServices/>
<PricingCards/>

<VideooSection/>
<ExpertTeam/>
<HowItWorks/>
{/* <Feedback/> */}
<ContactSection/>
<Footer/>
   <Outlet/>
    </>
  )
}

export default HomePage