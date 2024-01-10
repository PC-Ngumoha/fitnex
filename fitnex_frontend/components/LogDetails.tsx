"use client";

import { Exercise } from '@/lib/network';
import React, { useEffect, useState } from 'react';
import Loader from './Loader';
import { useDataFetch } from './hooks/useDataFetch';
import MaxWidthWrapper from './MaxWidthWrapper';
import { ExerciseProps } from '@/lib/types';
import { useRouter } from 'next/navigation';


interface Log {
    id: number;
    date_created: string;
}

const LogsDisplay: React.FC = () => {
    const [logs, setLogs] = useState<Log[]>([]);
    const { data: exerciseLogs, isError: exerciseLogsError, isLoading: exerciseLogsLoading } = useDataFetch<Log[]>(
        { keys: ['exercise_logs'], url: `${Exercise.logs}` }
    );


    useEffect(() => {
        const fetchLogs = () => {
            if (exerciseLogs) {
                setLogs(exerciseLogs);
            }
            if (exerciseLogsError) {
                console.log(exerciseLogsError);
            }
        };

        fetchLogs();
    }, [exerciseLogs, exerciseLogsError]);

    const router = useRouter()

    const handleRowClick = (logId: number) => {
        // console.log('Clicked on row:', logId);
        // Redirect to the log details page with the log ID as a query parameter
        router.push(`/exercise/logs/${logId}`)

    };

    if (exerciseLogsLoading) {
        return <Loader />;
    }

    return (
        <>

            <div className="py-4">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Year</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Month</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {Object.entries(logs).map(([year, months]) => (
                            Object.entries(months).map(([month, logEntries]) => (
                                logEntries.map((log: any) => (
                                    <tr key={log.id} onClick={() => handleRowClick(log.id)} className="cursor-pointer hover:bg-gray-100">
                                        <td className="px-6 py-4 whitespace-nowrap">{year}</td>
                                        <td className="px-6 py-4 whitespace-nowrap">{month}</td>
                                        <td className="px-6 py-4 whitespace-nowrap">{log.date_created}</td>
                                    </tr>
                                ))
                            ))
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};


export default LogsDisplay;
