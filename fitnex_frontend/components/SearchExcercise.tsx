"use client"
import React, { useEffect, useState } from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button'
import HorizontalScrollBar from './HorizontalScrollBar'
import { exerciseOptions, fetchData } from '@/lib/utils'

type Props = {
  setExercises: any,
  bodyPart: any,
  setBodyPart: any
}


const SearchExcercise = ({ setExercises, bodyPart, setBodyPart }: Props) => {

  const [search, setSearch] = useState('')

  const [bodyParts, setBodyParts] = useState<any>([])
  // fetch categories as soon as the page loads

  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData({
        url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
        options: exerciseOptions
      })
      setBodyParts(['all', ...bodyPartsData])
    }

    fetchExercisesData()
  }, [])


  const handleSearch = async (e: React.MouseEvent<HTMLButtonElement>) => {
    const searchTerm = e.target;

    if (searchTerm) {
      const exerciseData = await fetchData({
        url: 'https://exercisedb.p.rapidapi.com/exercises',
        options: exerciseOptions
      });
      // console.log(exerciseData)
      // const searchedExcercise = exerciseData.filter((exercise: any) =>
      //   exercise.name.toLowerCase().includes(searchTerm) ||
      //   exercise.target.toLowerCase().includes(searchTerm) ||
      //   exercise.bodyPart.toLowerCase().includes(searchTerm) ||
      //   exercise.equipment.toLowerCase().includes(searchTerm)
      // );

      // console.log(searchedExcercise)
      setExercises(exerciseData);
      setSearch('');
    }
  };


  return (
    <div className='mt-[37px] flex flex-col items-center justify-center p-[20px]'>
      <h1 className="scroll-m-20 text-2xl font-bold text-center tracking-tight lg:text-3xl mb-[50px]">
        Awesome Excercise You <br /> Should Know
      </h1>

      <div className="flex items-center justify-center mb-10 gap-2">
        <Input value={search} onChange={(e) => setSearch(e.target.value.toLowerCase())} type="text" placeholder='Search Excercise' className='w-full lg:w-[500px] lg:h-[50px] rounded-full space-x-2 border-2 p-[10px]' />
        <Button onClick={handleSearch} className='w-[100px] h-[50px] rounded-full bg-black opacity-2 text-white'>Search</Button>

      </div>

      <div className='w-[320px] md:w-[100%]'>
        <HorizontalScrollBar data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart} isBodyPart={true} />
      </div>
    </div>
  )
}

export default SearchExcercise