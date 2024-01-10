"use client"

import React, { useEffect, useState } from 'react'
import MaxWidthWrapper from './MaxWidthWrapper'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import Image from 'next/image'
import { Button } from './ui/button'
import { CalendarDays } from 'lucide-react'
import moment from "moment";
import { EditProfile } from './EditProfile'
import { useDataFetch } from './hooks/useDataFetch'
import { User } from '@/lib/types'
import { Profile } from '@/lib/network'

type Props = {}

const ProfileCard = (props: Props) => {
    const [user, setUser] = useState<User | null>(null);
    
    // fetch user
    const { data, isError: userError, isLoading: userLoading } = useDataFetch<User>(
        { keys: ['user'], url: Profile.me }
      );

    useEffect(() => {
      if (data) {
        // console.log(data);
        setUser(data);
      }
    }, [data])
    if (userLoading) return <div>Loading...</div>

    
    const coverImage = true
    return (
        <>
            <MaxWidthWrapper className='h-screen'>
                <div className='w-full h-40 bg-gradient-to-r from-blue-500 to-blue-200 relative rounded-tl-[3rem]'>
                    {user?.avatar && (
                        <Image src="/footer.jpg" alt='Cover Image' fill className='object-cover object-fit rounded-tl-[3rem]' />
                    )}
                    <div className='absolute -bottom-14 left-4 rounded-full border-white border-4'>
                        <Avatar className="w-20 h-20">
                            <AvatarImage src="https://github.com/shadcn.png" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                    </div>
                </div>
                <div>
                    <div className='flex justify-end p-2'>

                        <EditProfile />


                    </div>
                    <div className='mt-8 px-4'>
                        <div className='flex flex-col'>
                            <h3 className='text-blue-500 text-2xl font-semibold'>
                                {user?.name}
                            </h3>
                            <p className='text-md text-neutral-800'>{user?.email}</p>
                        </div>

                        <div className='flex flex-col'>
                            <p className='text-blue-300'> User bio Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
                            <div className='flex flex-row items-center gap-2 mt-4 text-neutral-500'>
                                <CalendarDays size={24} />
                                <p>Joined {moment(user?.date_joined).fromNow()}</p>
                            </div>
                        </div>


                    </div>
                </div>
            </MaxWidthWrapper>
        </>
    )
}

export default ProfileCard