"use client"
import { BodyParts, Exercise } from '@/lib/network'
import { BodyPartProps, ExerciseProps } from '@/lib/types'
import { useEffect, useState } from 'react'
import HorizontalScrollBar from './HorizontalScrollBar'
import { useDataFetch } from './hooks/useDataFetch'
import { Button } from './ui/button'
import { Input } from './ui/input'

type Props = {
  setExercises: (exercise: ExerciseProps[]) => void,
  bodyPart: BodyPartProps[],
  setBodyPart: (bodyPart: BodyPartProps[]) => void
}


const SearchExcercise = ({ setExercises, bodyPart, setBodyPart }: Props) => {


  // fetch categories as soon as the page loads
  const [bodyParts, setBodyParts] = useState<BodyPartProps[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');

  const { data: exercise, isError: exerciseError, isLoading: exerciseLoading } = useDataFetch<ExerciseProps[]>({ keys: ['exercise', 'v2.exercisedb.io'], url: Exercise.list });
  const { data: bodyPartList, isError: bodyPartsError, isLoading: bodyPartLoading } = useDataFetch<BodyPartProps[]>({ keys: ['bodyPart'], url: BodyParts.list });


  useEffect(() => {
    if (bodyPartList) {
      setBodyParts(bodyPartList);
    }
  }, [bodyPartList]);

  const handleSearch = () => {
    if (exercise) {
      const searchedExercise = exercise.filter((exercise) =>
        exercise.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        exercise.target_data.toLowerCase().includes(searchTerm.toLowerCase()) ||
        exercise.bodyPart_data.toLowerCase().includes(searchTerm.toLowerCase()) ||
        exercise.equipment_data.toLowerCase().includes(searchTerm.toLowerCase())
      );

      setExercises(searchedExercise);
      setSearchTerm('')
    }
  };


  return (
    <div className=' flex flex-col items-center justify-center p-[20px]'>
      <h1 className="scroll-m-20 text-2xl font-bold text-center tracking-tight lg:text-3xl mb-[50px] bg-gradient-to-r
        from-gray-400
        to-gray-600 
         bg-clip-text
         text-transparent">
        Awesome Excercises Every Trainer Should Know!
      </h1>

      <div className="flex items-center justify-center mb-10 gap-2">
        <Input value={searchTerm} onChange={(e) => setSearchTerm(e.target.value.toLowerCase())} type="text" placeholder='Search Excercise' className='w-full lg:w-[500px] lg:h-[50px] rounded-full space-x-2 border-2 p-[10px]' />
        <Button onClick={handleSearch} className='w-[100px] h-[50px] rounded-full bg-black opacity-2 text-white'>Search</Button>

      </div>

      <div className='w-[320px] md:w-[100%]'>
        <HorizontalScrollBar data={bodyParts} bodyParts={bodyPart} setBodyParts={setBodyPart} isBodyPart={true} />
      </div>
    </div>
  )
}

export default SearchExcercise