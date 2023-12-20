import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { Button } from './ui/button'
import { BodyPartProps, ExerciseProps, TargetProps } from '@/lib/types'
import { useDataFetch } from './hooks/useDataFetch'
import { BodyParts, Targets } from '@/lib/network'
import Loader from './Loader'
type Props = {
    exercise: ExerciseProps;
}

const ExerciseCard = ({ exercise }: Props) => {
    // console.log("Exercise: ", exercise)

    return (
        <>
            <Link href={`/exercise/${exercise.id}`} className='w-full bg-white border-t-4 border-blue-500 rounded-bl-20 text-black no-underline flex flex-col justify-between pb-4 transform scale-75 transition-all duration-300 ease-in-out hover:scale-90 hover:shadow-lg'>
                <div>
                    <Image src={exercise?.gifUrl} alt={exercise.name} width={300} height={300} className='rounded-bl-20 object-cover' loading='lazy' />
                    <div className='flex flex-wrap justify-center sm:justify-start mx-2 mt-2'>
                        <Button className='m-1 bg-blue-500 text-slate-200 text-xs rounded-lg uppercase'>
                            {exercise.bodyPart_data}
                        </Button>
                        <Button className='m-1 bg-blue-300 text-black text-xs rounded-lg uppercase'>
                            {exercise.target_data}
                        </Button>
                        <Button className='m-1 bg-blue-800 text-slate-200 text-xs rounded-lg uppercase'>
                            {exercise.equipment_data}
                        </Button>
                    </div>
                    <h1 className='text-center capitalize text-md font-bold mt-2 overflow-hidden overflow-ellipsis'>{exercise.name}</h1>
                </div>
            </Link>
        </>
    )
}

export default ExerciseCard