"use client"

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from './ui/dropdown-menu'

import { LogOut, User } from 'lucide-react'
import UserAvatar from './UserAvatar'

import { useRouter } from "next/navigation"
import { User as UserProps } from '@/lib/types'
import { useStore } from '@/store'
import { useEffect } from 'react'

type Props = {
  user: UserProps | any | null
}


const UserAccountNav = ({ user }: Props) => {

  const router = useRouter();
  const store = useStore()

  const logoutUser = async () => {
    store.logout();
    router.push("/login");
    router.refresh()
  };

  const goToAccount = () => {
    router.push("/profile");
  };

  useEffect(() => {
    if (user === null) {
      router.refresh
    }

  }, [user, router])


  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <UserAvatar user={user} />
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-40">
          {/* <div className="flex items-center justify-start gap-2 p-2"> */}
          {/* user details */}
          {/* </div> */}
          <DropdownMenuItem onSelect={goToAccount} className="flex items-center justify-center cursor-pointer">
            <User className="mr-2 h-4 w-4" />
            <span>My Account</span>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem onSelect={logoutUser}
            className="flex items-center justify-center text-red-600 cursor-pointer"
          >
            Sign Out
            <LogOut className='w-4 h-4 ml-2' />
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  )
}

export default UserAccountNav