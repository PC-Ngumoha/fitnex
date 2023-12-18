"use client"

import Detail, { ExcerciseDetail } from '@/components/Detail'
import ExerciseVideo from '@/components/ExerciseVideo'
import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import SimilarExercise from '@/components/SimilarExercise'
import { exerciseOptions, fetchData, youtubeOptions } from '@/lib/utils'
import React, { useEffect, useState } from 'react'

type Props = {
    params: {
        exerciseId: any
    }
}

const Page = ({ params }: Props) => {
    // console.log(params)
    const [exerciseDetail, setExerciseDetail] = useState<ExcerciseDetail | any>({})
    const [exerciseVideos, setExerciseVideos] = useState<any>({})
    const [target, setTarget] = useState<any>({})
    const [equipment, setEquipment] = useState<any>({})


    const { exerciseId } = params

    useEffect(() => {
        const fetchExerciseDetail = async () => {
            const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';
            const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';

            const exerciseDetailData = await fetchData({ url: `${exerciseDbUrl}/exercises/exercise/${exerciseId}`, options: exerciseOptions })
            setExerciseDetail(exerciseDetailData);

            const exerciseVideosData = await fetchData({ url: `${youtubeSearchUrl}/search?query=${exerciseDetailData.name} exercise`, options: youtubeOptions })
            setExerciseVideos(exerciseVideosData.contents);


            const targetMuscleExerciseData = await fetchData({ url: `${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`, options: exerciseOptions })
            setTarget(targetMuscleExerciseData);

            const equipmentExerciseData = await fetchData({ url: `${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`, options: exerciseOptions })
            setEquipment(equipmentExerciseData);
        }

        fetchExerciseDetail()
    }, [exerciseId])


    return (
        <MaxWidthWrapper>
            <Detail exerciseDetail={exerciseDetail} />
            <ExerciseVideo exerciseVideos={exerciseVideos} name={exerciseDetail.name} />
            <SimilarExercise target={target} equipment={equipment}  />
        </MaxWidthWrapper>
    )
}

export default Page