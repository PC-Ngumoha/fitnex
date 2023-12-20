import { MadeForFeatures } from '@/lib/constatData'
import React from 'react'

type Props = {}



const MadeFor = (props: Props) => {
    return (
        <div className="flex flex-col justify-center items-center">
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
                ">

                            <div className="text-2xl text-blue-500 pb-4">{feature.name}</div>
                            <div className="text-xl ">{feature.time}</div>
                            <div className="text-xl text-blue-300">{feature.exp}</div>
                            <div className="text-xl">{feature.description}</div>

                            <div className="bg-blue-500 text-white p-4 border rounded-xl items-center justify-center text-center">
                                Get Started
                            </div>



                        </div>

                    </div>
                ))}

            </div>

        </div>
    )
}

export default MadeFor