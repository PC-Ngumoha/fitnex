import React from 'react'
import { Button, buttonVariants } from './ui/button'
import { ChevronRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import Exercises from '@/components/Exercises';

type Props = {}

const HeroBanner = (props: Props) => {
    return (
        <div className='mt-[120px] lg:mt-[212px] sm:ml-[50px] relative p-[20px]'>
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent">
                FITNEX<br />Training Platform
            </h1>
            <blockquote className="mt-6 border-l-2 pl-6 italic">
                Sweat, Smile and Repeat 😉
            </blockquote>

            <h1 className="text-9xl font-extrabold tracking-tight opacity-30 text-gray-500 hidden md:block">
                Exercise<br />Now
            </h1>
            <Image src="/hero-banner.jpg" alt="hero-banner" width={500} height={500} className='absolute right-[40px] top-0 w-[500px] h-[600px] -mt-[200px] rounded-bl-3xl hidden md:block' />

        </div>
    )
}

export default HeroBanner