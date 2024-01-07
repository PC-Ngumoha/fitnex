import { MadeForFeatures } from '@/lib/constatData'
// import { Link } from 'lucide-react'
import React from 'react'
import Link from 'next/link'
import MaxWidthWrapper from './MaxWidthWrapper'

type Props = {}



const MadeFor = (props: Props) => {
    return (
        <MaxWidthWrapper>
            <div className="flex flex-col justify-center items-center mt-16">
                <div className="text-4xl text-center md:text-6xl font-bold bg-gradient-to-r from-white to-gray-500 bg-clip-text
     text-transparent md:pb-10  ">
                    Who&apos;s Fitnex Made For?
                    <div className="text-2xl text-center md:text-4xl font-bold md:py-10">
                        Individuals seeking gentle, tailored exercises for maintaining health and mobility.

                    </div>

                </div>

                <div className="md:flex">
                    {MadeForFeatures.map((feature, index) => (
                        <div
                            key={index}
                            className="p-4"

                        >
                            <div
                                className="
                grid
                justify-center
                items-center
                gap-4
                border
                rounded-xl
                p-4
                w-96
                h-96
                ">

                                <div className="text-2xl text-blue-500 pb-4">{feature.name}</div>
                                <div className="text-xl ">{feature.time}</div>
                                <div className="text-xl text-blue-300">{feature.exp}</div>
                                <div className="text-xl">{feature.description}</div>

                                <Link href="/register">
                                    <div className="bg-blue-500 text-white p-4 border rounded-xl items-center justify-center text-center hover:bg-blue-600">
                                        Get Started
                                    </div>
                                </Link>
                            </div>
                        </div>
                    ))}

                </div>

            </div>
        </MaxWidthWrapper>
    )
}

export default MadeFor