import { ExcerciseDetail } from '@/lib/types';
import Image from 'next/image';


type Props = {
    exerciseDetail: ExcerciseDetail
}

const Detail = ({ exerciseDetail }: Props) => {
    const { bodyPart_data, equipment_data, target_data, gifUrl, name, target_id, instructions, secondaryMuscles } = exerciseDetail;


    const extraDetail = [
        {
            icon: '/assets/icons/body-part.png',
            name: bodyPart_data,
        },
        {
            icon: '/assets/icons/target.png',
            name: equipment_data,
        },
        {
            icon: '/assets/icons/equipment.png',
            name: target_data,
        }
    ]
    return (
        <>
            <div className='flex flex-col gap-5 md:flex-row p-2 items-center justify-center'>
                <div className='w-full flex items-center justify-center'>
                    <Image src={gifUrl} alt={name} width={320} height={400} loading='lazy' className='mb-6 sm:mb-0 sm:mr-6' />
                </div>

                <div className='gap-5'>
                    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                        {name}
                    </h2>
                    <p className="leading-7 [&:not(:first-child)]:mt-6 ">
                        Exercise &quot;Keep You Strong&quot; {name} is one of the most effective workouts for targeting your {target_data}. Engaging in this exercise not only enhances your physical strength but also contributes to mood improvement and increased energy levels.
                    </p>

                    <p className="leading-7 [&:not(:first-child)]:mt-6 prose">
                        {instructions}
                    </p>

                    <p className="leading-7 [&:not(:first-child)]:mt-6 prose">
                        {secondaryMuscles}
                    </p>
                    {
                        extraDetail.map((item, index) => (
                            <div key={index} className='flex items-center gap-2 mb-2 self-center'>
                                <div className='flex items-center w-fit p-2 rounded-full bg-orange-100'>
                                    <Image src={item.icon} alt={item.name} width={20} height={20} />

                                </div>
                                <span className='self-center capitalize ml-2'>{item.name}</span>
                            </div>
                        ))
                    }
                </div>
            </div>


        </>
    )
}

export default Detail