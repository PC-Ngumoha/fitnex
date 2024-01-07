import React from 'react'
import { Avatar, AvatarFallback } from './ui/avatar'
import Image from 'next/image'
import { User2 } from 'lucide-react'
import { User } from '@/lib/types'
import { AvatarImage } from '@radix-ui/react-avatar'

type Props = {
    user: User
}

const UserAvatar = ({ user }: Props) => {
    return (
        <div>
            <Avatar>

                <div className="flex items-center justify-center w-full h-full aspect-square">
                    <AvatarImage src={user.image} alt='user-profile' />
                    <AvatarFallback>
                        <User2 className='w-4 h-4' />
                    </AvatarFallback>
                </div>

            </Avatar>
        </div>
    )
}

export default UserAvatar
