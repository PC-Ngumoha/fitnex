import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { Button } from './ui/button'

type Props = {
    exercise: any
}

const ExerciseCard = ({ exercise }: Props) => {
    return (
        <Link href={`/exercise/${exercise.id}`} className='w-full bg-white border-t-4 border-red-600 rounded-bl-20 text-black no-underline flex flex-col justify-between pb-4 transform scale-75 transition-all duration-300 ease-in-out hover:scale-90 hover:shadow-lg'>
            <Image src={exercise.gifUrl} alt={exercise.name} width={300} height={300} className='rounded-bl-20 object-cover' loading='lazy' />
            <div className='flex flex-wrap justify-center sm:justify-start mx-2 mt-2'>
                <Button className='m-1 bg-amber-800 text-slate-200 text-xs rounded-lg uppercase'>
                    {exercise.bodyPart}
                </Button>
                <Button className='m-1 bg-slate-600 text-slate-200 text-xs rounded-lg uppercase'>
                    {exercise.target}
                </Button>
            </div>
            <h1 className='text-center capitalize text-md font-bold mt-2 overflow-hidden overflow-ellipsis'>{exercise.name}</h1>
        </Link>

    )
}

export default ExerciseCard