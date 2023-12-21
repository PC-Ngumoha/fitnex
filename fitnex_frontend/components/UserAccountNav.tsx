"use client"

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from './ui/dropdown-menu'

import { LogOut, User } from 'lucide-react'
import UserAvatar from './UserAvatar'

import { useRouter } from "next/navigation"
import { User as UserProps } from '@/lib/types'

type Props = {
  user: UserProps | any | null
}


const UserAccountNav = ({ user }: Props) => {

  const router = useRouter();

  const logout = async () => {
    try {
      router.push("/login");
      router.refresh();
      return;
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  const goToAccount = () => {
    router.push("/account/me");
  };

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
          <DropdownMenuItem onSelect={logout}
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