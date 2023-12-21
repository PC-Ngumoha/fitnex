"use client"


import { useState } from 'react'
import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import SearchExcercise from '@/components/SearchExcercise';
import { BodyPartProps, ExerciseProps } from '@/lib/types';
import Exercises from '@/components/Exercises';
import { useStore } from '@/store';
import { redirect } from 'next/navigation';
import { toast } from '@/components/ui/use-toast';


export default function Home() {

  //changes are reflected acrross the app
  const [exercises, setExercises] = useState<ExerciseProps[]>([])
  const [bodyPart, setBodyPart] = useState<BodyPartProps[]>([]);
  const store = useStore()

  if (store.authUser === null) {
    redirect('/login')
  }
  // console.log(bodyPart)

  return (
    <>
      <MaxWidthWrapper>

        <SearchExcercise setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart} />

        <Exercises exercises={exercises} setExercises={setExercises} bodyPart={bodyPart} />
      </MaxWidthWrapper>
    </>
  )
}
