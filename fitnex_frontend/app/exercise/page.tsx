"use client"
import React, { useEffect, useState } from 'react';
import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import Image from 'next/image';
import ExerciseCard from '@/components/ExerciseCard';
import SelectBodyPart from '@/components/SelectBodyPart';
import { fetchData, exerciseOptions } from '@/lib/utils';
import { Exercise } from '@/lib/network';
import { BodyPart, ExerciseProps } from '@/lib/types';
import { useDataFetch } from '@/components/hooks/useDataFetch';

type Props = {
  exercise: ExerciseProps,
  body_part: BodyPart
};


const Page = (props: Props) => {
  const [exercises, setExercises] = useState<ExerciseProps[]>([]);
  const [bodyParts, setBodyParts] = useState<BodyPart[]>([]);


  const {data, isError, isLoading } = useDataFetch<ExerciseProps[]>({keys: ['excercise'], url: Exercise.list})
  const {data:body, isError:bodyE, isLoading:bodyL } = useDataFetch<BodyPart[]>({keys: ['bodyPart'], url: Exercise.list})


  useEffect(() => {
    if (data) {
      setExercises(data)
    }
  
  }, [data])
  console.log(data)
  if (isError) {
    console.log(isError)
  }

  return (
    <MaxWidthWrapper>
      <div className='flex items-center justify-center'>
        <Image
          src='/exercise.jpg'
          width={1920}
          height={500}
          alt='banner'
          className='w-full md:w-[80%] h-80 rounded-lg transition-transform transform hover:scale-105 hover:cursor-pointer'
        />
      </div>
      <h1 className='text-2xl font-bold text-center tracking-tight lg:text-3xl mb-[50px]'>
        Exercises
      </h1>
      <p className='text-center mb-[50px]'>
        Choose from over 200 exercises to help you build your workout routine.
      </p>
      <SelectBodyPart bodyParts={bodyParts} />
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5'>
        {exercises.map((item: any) => (
          <ExerciseCard key={item.id} exercise={item} />
        ))}
      </div>
    </MaxWidthWrapper>
  );
};

export default Page;
