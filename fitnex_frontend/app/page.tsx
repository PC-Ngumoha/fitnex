"use client"

// import Exercises from '@/components/Exercises'
import HeroBanner from '@/components/HeroBanner'
import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import { BodyPartProps, ExerciseProps } from '@/lib/types'


import { useState } from 'react'
import SearchExcercise from '@/components/SearchExcercise'
import HeroSection from '@/components/HeroSection'
import OurFeatures from '@/components/OurFeatures'
import Customizable from '@/components/Customizable'
import MadeSimple from '@/components/MadeSimple'
import MadeFor from '@/components/MadeFor'
import Faqs from '@/components/Faqs'
import NeedHelp from '@/components/NeedHelp'


export default function Home() {

  //changes are reflected acrross the app
  const [exercises, setExercises] = useState<ExerciseProps[]>([])
  const [bodyPart, setBodyPart] = useState<BodyPartProps[]>([]);

  // console.log(bodyPart)

  return (
    <>
      <MaxWidthWrapper>
        <HeroBanner />

        {/* <SearchExcercise setExercises={setExercises} setBodyPart={setBodyPart} bodyPart={bodyPart} /> */}

      </MaxWidthWrapper>

      <div>
        <HeroSection />
        <OurFeatures />
        <Customizable />
        <MadeSimple />
        <MadeFor />
        <Faqs />
        <NeedHelp />
      </div>
    </>
  )
}
