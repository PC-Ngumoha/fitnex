"use client"

import React, { useEffect, useState } from 'react';
import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import Detail from '@/components/Detail';
import ExerciseVideo from '@/components/ExerciseVideo';
import SimilarExercise from '@/components/SimilarExercise';
import { fetchData, youtubeOptions } from '@/lib/utils';
import { Exercise, Targets, Equipments } from '@/lib/network';
import { ExerciseProps, ExcerciseDetail, TargetProps, EquipmentProps, BodyPartProps } from '@/lib/types';
import { useDataFetch } from '@/components/hooks/useDataFetch';
import Loader from '@/components/Loader';

type Props = {
    params: {
        exerciseId: any;
    };
};

const Page = ({ params }: Props) => {
    const [exerciseDetail, setExerciseDetail] = useState<ExcerciseDetail | any>({});
    const [exerciseVideos, setExerciseVideos] = useState<any>({});
    const [target, setTarget] = useState<ExerciseProps[]>([]);
    const [equipment, setEquipment] = useState<ExerciseProps[]>([]);

    const { exerciseId } = params;

    const { data: exercise, isError: exerciseError, isLoading: exerciseLoading } = useDataFetch<ExerciseProps>({ keys: ['exercise'], url: `${Exercise.list}/${exerciseId}` });


    // Additional data fetching based on the exercise data
    const { data: targets, isError: targetsError, isLoading: targetsLoading } = useDataFetch<TargetProps | any>({
        keys: ['target'],
        url: `${Targets.list}/${exercise?.target_data!}`,
    });

    const { data: equipments, isError: equipmentsError, isLoading: equipmentsLoading } = useDataFetch<EquipmentProps | any>({
        keys: ['equipment'],
        url: `${Equipments.list}/${exercise?.equipment_data!}`,
    })
    const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';
    const { data: exerciseVideosData, isError, isLoading } = useDataFetch<any>({
        keys: ['youtubevide'],
        url: `${youtubeSearchUrl}/search?query=${exercise?.name} exercise`,
        options: youtubeOptions, 
    })

    console.log(targets)

    useEffect(() => {
        const fetchExerciseDetail = async () => {
            

            try {
                if (exercise) {
                    setExerciseDetail(exercise);

                    setExerciseVideos(exerciseVideosData.contents);
                }

                if (targets) {
                    // console.log(targets)
                    setTarget(targets);
                }

                if (equipments) {
                    // console.log(equipments)
                    setEquipment(equipments);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
                // Handle error (e.g., show an error message to the user)
            }
        };

        fetchExerciseDetail();
    }, [exerciseId, exercise, targets, equipments,exerciseVideosData]);

    if (exerciseLoading || targetsLoading || equipmentsLoading) {
        // Loading state
        return <Loader />;
    }


    return (
        <MaxWidthWrapper>
            <Detail exerciseDetail={exerciseDetail} />
            <ExerciseVideo exerciseVideos={exerciseVideos} name={exerciseDetail.name} />
            <SimilarExercise target={target} equipment={equipment} />
        </MaxWidthWrapper>
    );
};

export default Page;


// const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';
// const exerciseDetailData = await fetchData({ url: `${exerciseDbUrl}/exercises/exercise/${exerciseId}`, options: exerciseOptions })
// setExerciseDetail(exerciseDetailData);

// const targetMuscleExerciseData = await fetchData({ url: `${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`, options: exerciseOptions })
// setTarget(targetMuscleExerciseData);

// const equipmentExerciseData = await fetchData({ url: `${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`, options: exerciseOptions })
// setEquipment(equipmentExerciseData);