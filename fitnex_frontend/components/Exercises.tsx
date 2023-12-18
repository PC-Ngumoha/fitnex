"use client"

import React, { useEffect, useState } from 'react'
import { exerciseOptions, fetchData } from "@/lib/utils";
import Image from 'next/image';
import ExerciseCard from './ExerciseCard';

type Props = {
  exercises: any
  setExercises: any
  bodyPart: any
}

const Exercises = ({ exercises, setExercises, bodyPart }: Props) => {

  useEffect(() => {
    const fetchExerciseDate = async () => {
      let exerciseData = []
      if (bodyPart === 'all') {
        exerciseData = await fetchData({
          url: 'https://exercisedb.p.rapidapi.com/exercises',
          options: exerciseOptions
        });
      } else {
        exerciseData = await fetchData({
          url: `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
          options: exerciseOptions
        });
      }
      setExercises(exerciseData)
    }

    fetchExerciseDate();
  }, [bodyPart])

  console.log(exercises)
  return (
    <div id="exercises" className='mt-10 p-10 lg:mt-20'>

      <h1 className="scroll-m-20 text-2xl font-bold text-center tracking-tight lg:text-3xl mb-[50px]">
        Showing Results for <span className='text-[#FFA500]'>{bodyPart}</span>
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-8">
        {exercises.map((exercise: any, index: any) => (
          <div key={exercise.id} className="">
            <ExerciseCard key={index} exercise={exercise} />
          </div>
        ))}
      </div>
      {/* Handle pagination
      <div className="flex self-center justify-center mt-10">
          {exercises.length > 9 && (
            <></>
          )}
      </div> */}
    </div>
  )
}

export default Exercises