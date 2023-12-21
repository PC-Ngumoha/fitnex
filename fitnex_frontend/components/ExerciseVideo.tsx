import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import MaxWidthWrapper from './MaxWidthWrapper'

type Props = {
    exerciseVideos: any,
    name: string,
}

const ExerciseVideo = ({ exerciseVideos, name }: Props) => {
    if (!exerciseVideos.length) return 'Loading....'

    return (
        <MaxWidthWrapper>
            <div className='mt-10'>
                <h2 className="scroll-m-20 border-b text-xl pb-2 md:text-2xl capitalize font-semibold tracking-tight first:mt-0">
                    Watch <span className='text-blue-500 capitalize'>{name}</span> exercise video
                </h2>
                <div className='max-w-full flex flex-col lg:flex-row flex-wrap items-center gap-5 mt-5'>
                    {
                        exerciseVideos?.slice(0, 5).map((item: any, index: number) => (
                            <Link className='flex flex-col gap-10' href={`https://www.youtube.com/watch?v=${item.video.videoId}`} target='_blank' rel='noreferrer' key={index}>
                                <Image src={item.video.thumbnails[0].url} alt={item.video.title} width={320} height={180} className='rounded-lg' />
                                <div>
                                    <h4 className='text-sm text-clip overflow-hidden'>{item.video.title}</h4>
                                    <h6 className='text-sm'>{item.video.channelName}</h6>
                                </div>
                            </Link>
                        ))
                    }
                </div>
            </div>
        </MaxWidthWrapper>
    )
}

export default ExerciseVideo