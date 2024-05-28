import HeroSection from '@/components/HeroSection'
import Navbar from '@/components/Navbar'
import Section2 from '@/components/Section2'
import React from 'react'
import Section3 from '@/components/Section3'
import Faq from '@/components/Faq'
import Footer from '@/components/Footer'
import Donate from '@/components/Donate'

const page = () => {
  return (
    <div className='px-10'>
      <Navbar/>
      <HeroSection/>
      <Section2/>
      <Section3/>
      <Donate/>
      <Faq/>
      <Footer/>
    </div>
  )
}

export default page