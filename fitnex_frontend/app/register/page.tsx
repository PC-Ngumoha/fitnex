import RegisterUserForm from '@/components/RegisterUserForm'
import { InfoIcon } from 'lucide-react'
import React from 'react'

type Props = {}

const Page = (props: Props) => {
    return (
        <div className='flex flex-col items-center max-w-xl px-8 mx-auto my-16 sm:px-0'>
            <h1 className="text-4xl font-bold text-center sm:text-6xl text-primary mb-8">
                Sign Up
            </h1>
            <div className="flex items-center justify-center p-4 border-none bg-secondary rounded-md shadow-md w-full">
                <InfoIcon className='w-8 h-8 mr-3 text-gray-400' />
                <div className="text-gray-800">
                    Enter your details to register for Fitnex
                </div>
            </div>

            <RegisterUserForm />

        </div>

    )
}

export default Page