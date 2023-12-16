"use client"

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from './ui/dropdown-menu'

import { LogOut } from 'lucide-react'
import UserAvatar from './UserAvatar'

import { useRouter } from "next/navigation"

type Props = {
  user: any
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
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <UserAvatar user={user} />
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          {/* <div className="flex items-center justify-start gap-2 p-2"> */}
          {/* user details */}
          {/* </div> */}
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