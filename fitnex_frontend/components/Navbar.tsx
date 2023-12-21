"use client"
import Link from 'next/link'
import React from 'react'
import { ThemeToggle } from './ThemeToggle'
import SignInButton from './SignInButton'
import UserAccountNav from './UserAccountNav'
import { X } from 'lucide-react'
import { Button } from './ui/button'
import { DropdownMenuTrigger, DropdownMenuItem, DropdownMenuContent, DropdownMenu, DropdownMenuSeparator } from "@/components/ui/dropdown-menu"
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet"
// import { Separator } from "@/components/ui/separator"

type Props = {}

const Navbar = (props: Props) => {
    const [menuOpen, setMenuOpen] = React.useState(false)

    const session = true

    const handleMenuItemClick = () => {
        setMenuOpen(false);
    };

    return (
        <header className="flex h-20 w-full shrink-0 items-center px-4 md:px-6">
        <Sheet>
            <SheetTrigger asChild>
            <Button className="lg:hidden" size="icon" variant="outline">
                <MenuIcon className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
            </Button>
            </SheetTrigger>
            <SheetContent side="left">
            <Link href="/">
                <span className="sr-only">Fitnex</span>
            </Link>
            <div className="grid gap-2 py-6">
                <Link className="flex w-full items-center py-2 text-lg font-semibold" href="/">
                Home
                </Link>
                <Link className="flex w-full items-center py-2 text-lg font-semibold" href="/about">
                About
                </Link>
                <Link className="flex w-full items-center py-2 text-lg font-semibold" href="/blog">
                Blog
                </Link>
                <Link className="flex w-full items-center py-2 text-lg font-semibold" href="/faqs">
                FAQs
                </Link>
                <Link className="flex w-full items-center py-2 text-lg font-semibold" href="/contact">
                Contact
                </Link>
            </div>
            </SheetContent>
        </Sheet>
        <Link className="mr-6 hidden lg:flex rounded-lg p-4 py-1" href="/">
            <span className='text-3xl font-bold transition-all hover:translate-y-[2px] md:block bg-gradient-to-r from-blue-500 to-blue-100 bg-clip-text text-transparent'>
                Fitnex
                </span>
            <p className='text-yellow-500'>beta</p>
        </Link>
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
            <Button variant="outline" className="hidden lg:flex">
                <MenuIcon className="h-6 w-6 mr-2" />
                Menu
            </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
            <DropdownMenuItem asChild>
                <Link className="w-full h-full" href="/">
                Home
                </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
                <Link className="w-full h-full" href="/about">
                About
                </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
                <Link className="w-full h-full" href="/blog">
                Blog
                </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
                <Link className="w-full h-full" href="/faqs">
                FAQs
                </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
                <Link className="w-full h-full" href="/contact">
                Contact
                </Link>
            </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
        <div className="ml-auto flex items-center gap-4">
            <Link href="/exercise">
            <Button className="hidden md:flex" variant="outline">
            View Exercises
            </Button>
            </Link>
            <ThemeToggle />
            <UserAccountNav />
        </div>
        </header>
  )
}

function MenuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}

export default Navbar