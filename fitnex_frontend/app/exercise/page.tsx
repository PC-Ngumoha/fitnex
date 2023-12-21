"use client"
import ExerciseCard from '@/components/ExerciseCard';
import Loader from '@/components/Loader';
import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import Pagination from '@/components/Pagination';
import SelectBodyPart from '@/components/SelectBodyPart';
import { useDataFetch } from '@/components/hooks/useDataFetch';
import { BodyParts, Exercise } from '@/lib/network';
import { BodyPartProps, ExerciseProps } from '@/lib/types';
import Image from 'next/image';
import { useEffect, useState } from 'react';

type Props = {
  exercise: ExerciseProps,
  body_part: BodyPartProps
};


const Page = (props: Props) => {
  const [exercises, setExercises] = useState<ExerciseProps[]>([]);
  const [bodyParts, setBodyParts] = useState<BodyPartProps[]>([]);

  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 15;

  const { data: exercise, isError: exerciseError, isLoading: exerciseLoading } = useDataFetch<ExerciseProps[]>({ keys: ['excercise', 'v2.exercisedb.io'], url: Exercise.list })
  const { data: bodyPart, isError: bodyPartError, isLoading: bodyPartLoading } = useDataFetch<BodyPartProps[]>({ keys: ['bodyPart'], url: BodyParts.list })

  // get exercise
  useEffect(() => {
    if (exercise) {
      setExercises(exercise)
    }

  }, [exercise])
  // get body parts
  useEffect(() => {
    if (bodyPart) {
      setBodyParts(bodyPart)
    }

  }, [bodyPart])
  if (exerciseError) {
    console.error(exerciseError);
  }

  if (bodyPartError) {
    console.error(bodyPartError);
  }

  const handleLoadMore = () => {
    setCurrentPage((prevPage) => prevPage + 1)
  }

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedExercises = exercises.slice(startIndex, endIndex);

  if (exerciseLoading) return (<Loader />)
  if (bodyPartLoading) return (<Loader />)

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
        {displayedExercises.map((item: ExerciseProps) => (
          <>
            <ExerciseCard key={item.id} exercise={item} />
          </>
        ))}
      </div>
      <div className="flex self-center justify-center mt-10">
      <Pagination onLoadMore={handleLoadMore} showLoadMore={exercises.length > endIndex} />
      </div>
    </MaxWidthWrapper>
  );
};

export default Page;
