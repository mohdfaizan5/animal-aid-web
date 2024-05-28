import HeroSection from '@/components/HeroSection'
import Navbar from '@/components/Navbar'
import Section2 from '@/components/Section2'
import {CardPulseBorder} from '@/components/OutlineShineContainer'
import React from 'react'
import Section3 from '@/components/Section3'
import Faq from '@/components/Faq'

const page = () => {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      {/* <CardPulseBorder/> */}
      <Section2/>
      <Section3/>
      <Faq/>
    </div>
  )
}

export default page