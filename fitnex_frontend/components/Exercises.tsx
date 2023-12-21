"use client"
import React, { useEffect, useState } from 'react';
import ExerciseCard from './ExerciseCard';
import { BodyParts, Exercise } from '@/lib/network';
import { useDataFetch } from './hooks/useDataFetch';
import { BodyPartProps, ExerciseProps } from '@/lib/types';
import Loader from './Loader';
import Pagination from './Pagination';

type Props = {
  exercises: ExerciseProps[];
  setExercises: (exercise: ExerciseProps[]) => void;
  bodyPart: BodyPartProps[];
};

const Exercises = ({ exercises, setExercises, bodyPart }: Props) => {

  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 9;

  const { data: exercise, isError: exerciseError, isLoading: exerciseLoading } = useDataFetch<ExerciseProps[]>(
    { keys: ['excercise', 'v2.exercisedb.io'], url: Exercise.list }
  );

  const { data: bodyParts, isError: bodyPartError, isLoading: bodyPartLoading } = useDataFetch<BodyPartProps>(
    { keys: ['bodyPart'], url: BodyParts.list }
  );

  const { data: exercise_bodyParts, isError: exercise_bodyPartsError, isLoading: exercise_bodyPartsLoading } = useDataFetch<ExerciseProps[]>(
    { keys: ['exercise_bodyParts'], url: `${BodyParts.list}/${bodyPart[0]?.name}` }
  );
  // console.log(exercise)


  useEffect(() => {
    const fetchExerciseData = async () => {
      let exerciseData: ExerciseProps[] = [];

      if (bodyParts) {
        // Fetch exercises related to the selected body part
        exerciseData = exercise_bodyParts || [];
      }
      // Fetch all exercises
      if (exercise) {
        exerciseData = exercise || [];
      }

      setExercises(exerciseData);
      console.log(exerciseData);
    };

    // Check if bodyParts is not null and exercise is available before making the request
    if (bodyParts !== null && exercise !== null) {
      fetchExerciseData();
    }
  }, [bodyParts, exercise]);


  const handleLoadMore = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedExercises = exercises.slice(startIndex, endIndex);


  if (exerciseLoading || bodyPartLoading || exercise_bodyPartsLoading) {
    // Render loader while data is still loading
    return <Loader />;
  }

  return (
    <div id="exercises" className='mt-10 p-10 lg:mt-20'>
      <h1 className="scroll-m-20 text-2xl font-bold text-center tracking-tight lg:text-3xl mb-[50px]">
        Showing Results for <span className='text-blue-500'>{bodyPart ? bodyPart[0]?.name : 'All Exercises'}</span>
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-8">
        {displayedExercises.map((exercise: ExerciseProps) => (
          <div key={exercise.id} className="">
            <ExerciseCard key={exercise.id} exercise={exercise} />
          </div>
        ))}
      </div>
      {/* Handle pagination */}
      <div className="flex self-center justify-center mt-10">
      <Pagination onLoadMore={handleLoadMore} showLoadMore={exercises.length > endIndex} />
      </div>
    </div>
  );
};

export default Exercises

// let exerciseData = []
//       if (bodyPart === 'all') {
//         exerciseData = await fetchData({
//           url: 'https://exercisedb.p.rapidapi.com/exercises',
//           options: exerciseOptions
//         });
//       } else {
//         exerciseData = await fetchData({
//           url: `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
//           options: exerciseOptions
//         });
//       }
//       setExercises(exerciseData)
//     }