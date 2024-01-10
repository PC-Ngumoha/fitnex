"use client"

import ExerciseCard from '@/components/ExerciseCard';
import Loader from '@/components/Loader';
import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import { useDataFetch } from '@/components/hooks/useDataFetch';
import { Exercise } from '@/lib/network';
import { ExerciseProps } from '@/lib/types';
import { useEffect, useState } from 'react';
import moment from 'moment';

type Props = {
    params: {
        logId: string;
    };
};

type LogsExercise = {
    date_created: string;
    exercises: ExerciseProps[];
}
const Page = ({ params }: Props) => {
    const [logs, setLogs] = useState<LogsExercise | null>(null);

    const { logId } = params;
    // console.log("LOGS", logId)


    const { data: log, isError: logError, isLoading: logLoading } = useDataFetch<LogsExercise>({
        keys: ['logs'],
        url: `${Exercise.logs}/${logId}`,
    });


    useEffect(() => {
        const fetchLogDetails = async () => {
            try {
                if (log) {
                    setLogs(log);
                }
            } catch (error) {
                console.error("LOGS ERROR", error)

            }
        }

        fetchLogDetails()
    }, [log])

    // console.log("LOGS", logs)

    if (logLoading) {

    }

    return (
        <>
            <MaxWidthWrapper>
                <h1 className='text-2xl text-center font-bold'>Log Details for {moment(logs?.date_created).fromNow()}</h1>

                {logLoading ? (
                    <div className='w-full h-full flex items-center justify-center'><Loader /></div>

                ) : (
                    <>
                        {logs?.exercises.map((exercise: ExerciseProps) => (
                            <>
                                <ExerciseCard key={exercise.id} exercise={exercise} showButton={false} />
                            </>
                        ))}
                    </>
                )}
            </MaxWidthWrapper>
        </>
    );
};

export default Page;
