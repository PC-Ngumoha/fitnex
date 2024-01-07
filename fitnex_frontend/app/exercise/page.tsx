"use client"


import Exercises from '@/components/Exercises';
import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import SearchExcercise from '@/components/SearchExcercise';
import { BodyPartProps, ExerciseProps } from '@/lib/types';
import { useStore } from '@/store';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';


export default function Home() {

  //changes are reflected acrross the app
  const [exercises, setExercises] = useState<ExerciseProps[]>([])
  const [bodyPart, setBodyPart] = useState<BodyPartProps[]>([]);
  const store = useStore()
  const router = useRouter()
  useEffect(() => {
    if (store.authUser === null) {
      router.push('/login')
      router.refresh()
    }

  }, [store.authUser, router])
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
