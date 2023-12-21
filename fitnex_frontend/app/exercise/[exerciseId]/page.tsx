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
import { useStore } from '@/store';
import { redirect } from 'next/navigation';
import { toast } from '@/components/ui/use-toast';

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

    const store = useStore()

    if (store.authUser === null) {
        redirect('/login')   
    }
    

    const { data: exercise, isError: exerciseError, isLoading: exerciseLoading } = useDataFetch<ExerciseProps>({ keys: ['exercises'], url: `${Exercise.list}/${exerciseId}` });


    // Additional data fetching based on the exercise data
    const { data: targets, isError: targetsError, isLoading: targetsLoading } = useDataFetch<TargetProps | any>({
        keys: ['targets'],
        url: `${Targets.list}/${exercise?.target_data!}`,
    });

    const { data: equipments, isError: equipmentsError, isLoading: equipmentsLoading } = useDataFetch<EquipmentProps | any>({
        keys: ['equipments'],
        url: `${Equipments.list}/${exercise?.equipment_data!}`,
    })
    const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';
    const { data: exerciseVideosData, isError, isLoading } = useDataFetch<any>({
        keys: ['youtubevideo'],
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
    }, [exerciseId, exercise, targets, equipments, exerciseVideosData]);

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