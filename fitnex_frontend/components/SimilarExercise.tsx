import { ExerciseProps } from '@/lib/types'
import HorizontalExercise from './HorizontalExercise'
import MaxWidthWrapper from './MaxWidthWrapper'

type Props = {
    target: ExerciseProps[]
    equipment: ExerciseProps[]
}

const SimilarExercise = ({ target, equipment }: Props) => {



    return (
        <MaxWidthWrapper>
            <div className='mt-10'>
                <h2 className="scroll-m-20 border-b pb-2 text-xl md:text-2xl text-left capitalize font-semibold tracking-tight first:mt-0">
                    Exercise that target the same muscle group
                </h2>
                <div className='flex p-3'>
                    {target.length ? <HorizontalExercise data={target} /> : "No Similar Muscle groups"}
                </div>

                <div className='mt-10' aria-label='hidden' />

                <h2 className="scroll-m-20 border-b pb-2 text-xl md:text-2xl text-left capitalize font-semibold tracking-tight first:mt-0">
                    Exercise that use the same equipment
                </h2>
                <div className='flex p-3'>
                    {equipment.length ? <HorizontalExercise data={equipment} /> : "No available Equipments"}
                </div>
            </div>
        </MaxWidthWrapper>
    )
}

export default SimilarExercise