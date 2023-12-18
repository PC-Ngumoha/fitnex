"use client"

import Exercises from '@/components/Exercises'
import HeroBanner from '@/components/HeroBanner'
import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import SearchExcercise from '@/components/SearchExcercise'
import Image from 'next/image'
import { useState } from 'react'

export default function Home() {

  //changes are reflected acrross the app
  const [exercises, setExercises] = useState([])
  const [bodyPart, setBodyPart] = useState('all')

  console.log(bodyPart)

  return (
    <>
      <MaxWidthWrapper>
        <HeroBanner />

        <SearchExcercise setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart} />

        <Exercises exercises={exercises} setExercises={setExercises} bodyPart={bodyPart}  />
      </MaxWidthWrapper>
    </>
  )
}
