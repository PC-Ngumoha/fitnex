import React from 'react'
import Link from 'next/link'
import { Button, buttonVariants } from './ui/button'
import { cn } from '@/lib/utils'
import MaxWidthWrapper from './MaxWidthWrapper'

type Props = {}

const HeroSection = (props: Props) => {


    return (
        <MaxWidthWrapper>
            <section className="md:py-20 py-10 bg-gradient-to-r from gray-00 to-gray-200 spacey-10">
                <div className="container mx-auto text-center">
                    <div className="text-6xl flex justify-center font-bold md:px-20 pb-10
            text-gradient
            bg-gradient-to-r
            from-blue-500
            to-green-300
            bg-clip-text
            text-transparent


            
            ">
                        Start Your Fitness Journey with Fitnex

                    </div>

                    <p className="text-lg md:text-xl md-10
            bg-gradient-to-r
            from-gray-200
            to-gray-500
            bg-clip-text
            text-transparent
            font-bold
            
            "
                    >
                        Take the first step towards a healthier, stronger you! Get started today and discover the power to shape lives through the art of exercise.
                    </p>
                    <div className="flex gap-4 justify-center pt-10">

                        <Link href="/exercise" className={buttonVariants({ variant: 'default' })}>Get Started</Link>

                        <Link href="/about" className={buttonVariants({ variant: 'learnMore' })}>Learn More
                        </Link>

                    </div>

                    <div className="pt-10">



                        <video className="rounded-xl" autoPlay muted loop>
                            <source src="/content/hero-1.mp4" type="video/mp4" />

                        </video>

                    </div>

                </div>

            </section>
        </MaxWidthWrapper>
    )
}

export default HeroSection