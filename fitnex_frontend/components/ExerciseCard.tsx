import React from 'react';
import Image from 'next/image';
import { ExerciseProps } from '@/lib/types';
import Link from 'next/link';
import { Button } from './ui/button';

type Props = {
    exercise: ExerciseProps;
    onClick?: () => void;
    showButton?: boolean;
};

const ExerciseCard = ({ exercise, onClick, showButton = false }: Props) => {
    return (
        <div className="w-full border-t-4 border-blue-500 rounded-bl-20 no-underline flex flex-col items-center justify-between pb-4 transform scale-75 transition-all duration-300 ease-in-out hover:scale-90 hover:shadow-lg">
            <Link
                href={`/exercise/${exercise.id}`}
            >
                <div className='flex flex-col items-center justify-center rounded-bl-20 '>
                    <Image
                        src={exercise?.gifUrl}
                        alt={exercise.name}
                        width={300}
                        height={300}
                        className="object-cover"
                        loading="lazy"
                    />
                    <div className="flex flex-wrap justify-center sm:justify-start mx-2 mt-2">
                        <div className="p-2.5 m-1 cursor-pointer transform transition-all duration-300 ease-in-out hover:scale-110 bg-blue-500 text-slate-200 text-xs rounded-lg capitalize dark:bg-gray-800 dark:text-gray-300">
                            {exercise.bodyPart_data}
                        </div>
                        <div className="p-2.5 m-1 cursor-pointer transform transition-all duration-300 ease-in-out hover:scale-110 bg-blue-300 text-black text-xs rounded-lg capitalize dark:bg-gray-700 dark:text-gray-200">
                            {exercise.target_data}
                        </div>
                        <div className="p-2.5 m-1 cursor-pointer transform transition-all duration-300 ease-in-out hover:scale-110 bg-blue-800 text-slate-200 text-xs rounded-lg capitalize dark:bg-gray-900 dark:text-gray-300">
                            {exercise.equipment_data}
                        </div>
                    </div>
                    <h1 className="text-center capitalize text-md font-bold mt-2 overflow-hidden overflow-ellipsis text-">
                        {exercise.name}
                    </h1>
                </div>
            </Link>
            <div className='mt-3'>
                {showButton && <Button variant="outline" className='hover:bg-blue-500 hover:text-white' size="sm" onClick={onClick}>
                    Add to Log
                </Button>}
            </div>

        </div>
    );
};

export default ExerciseCard;
