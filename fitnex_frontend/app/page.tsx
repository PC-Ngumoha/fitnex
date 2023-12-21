"use client"

// import Exercises from '@/components/Exercises'
import HeroBanner from '@/components/HeroBanner'
import MaxWidthWrapper from '@/components/MaxWidthWrapper'


import Customizable from '@/components/Customizable'
import Faqs from '@/components/Faqs'
import HeroSection from '@/components/HeroSection'
import MadeFor from '@/components/MadeFor'
import MadeSimple from '@/components/MadeSimple'
import NeedHelp from '@/components/NeedHelp'
import OurFeatures from '@/components/OurFeatures'


export default function Home() {


  return (
    <>
      <MaxWidthWrapper>
        <HeroBanner />
        <HeroSection />
        <OurFeatures />
        <Customizable />
        <MadeSimple />
        <MadeFor />
        <Faqs />
        <NeedHelp />
      </MaxWidthWrapper>
      
    </>
  )
}
