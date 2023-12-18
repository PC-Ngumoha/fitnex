import React from 'react'
import HorizontalScrollBar from './HorizontalScrollBar'
import Loader from './Loader'

type Props = {
    target: any
    equipment: any
}

const SimilarExercise = ({ target, equipment }: Props) => {
    return (
        <div className='mt-10'>
            <h2 className="scroll-m-20 border-b pb-2 text-3xl capitalize font-semibold tracking-tight first:mt-0">
                Exercise that target the same muscle group
            </h2>
            <div className='flex p-3'>
                {target.length ? <HorizontalScrollBar data={target} isBodyPart={false} /> : <Loader />}
            </div>

            <div className='mt-10' aria-label='hidden' />

            <h2 className="scroll-m-20 border-b pb-2 text-3xl capitalize font-semibold tracking-tight first:mt-0">
                Exercise that use the same equipment
            </h2>
            <div className='flex p-3'>
                {equipment.length ? <HorizontalScrollBar data={equipment} isBodyPart={false} /> : <Loader />}
            </div>
        </div>
    )
}

export default SimilarExercise