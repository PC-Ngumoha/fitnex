import React from 'react'
import Image from 'next/image'

type Props = {}

const Customizable = (props: Props) => {


    return (
        <div className="flex p-10 flex-col md:flex-row md:justify-evenly">
            <div className="flex-col md:flex-row gap-6 flex items-center justify-center">
                <div className="w-full">
                    <video className="rounded-xl" autoPlay muted loop>
                        <source src="/content/video-3.mp4" type="video/mp4" />
                    </video>
                </div>

                
                <div className="flex-col border p-4 rounded-xl">
                    <div className="
                        text-4xl flex justify-center text-center
                        md:text-6xl
                        bg-gradient-to-l
                        from-yellow-300
                        to-blue-300
                        bg-clip-text
                        font-bold
                        text-transparent
                        mb-10
                    ">
                        Fully Customizable Experience
                    </div>

                    <div className="md:px-20 space-y-6 flex-col items-center justify-center">
                        <div className="text-lg flex items-center gap-5">
                            <Image
                                src="/images/icon-target3.png"
                                alt="feature-1"
                                width={70}
                                height={70}
                                className="md:order-2"
                            />
                            <div className="flex flex-col gap-2 md:order-1">
                                Choose from an incredible amount of exercises from weight lifting, cardio, boxing, and much more.
                            </div>
                        </div>

                        <div className="text-lg flex items-center gap-5">
                            <Image
                                src="/images/icon-dumbbell.png"
                                alt="feature-1"
                                width={70}
                                height={70}
                                className="md:order-2"
                            />
                            <div className="flex flex-col gap-2 md:order-1">
                            Build your workout plans around the equipment you have available.
                            </div>
                        </div>

                        <div className="text-lg flex items-center gap-5">
                            <Image
                                src="/images/icon-analytics.png"
                                alt="feature-1"
                                width={70}
                                height={70}
                                className="md:order-2"
                            />
                            <div className="flex flex-col gap-2 md:order-1">
                            Gain valuable insights into your stats page and keep track of your progress.
                            </div>
                        </div>

                        <div className="text-lg flex items-center gap-5">
                            <Image
                                src="/images/icon-body.png"
                                alt="feature-1"
                                width={70}
                                height={70}
                                className="md:order-2"
                            />
                            <div className="flex flex-col gap-2 md:order-1">
                            Pick your training based on the Body parts you want to work on today.
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Customizable