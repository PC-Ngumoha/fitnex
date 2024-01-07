"use client"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useStore } from '@/store'
import Link from 'next/link'
import React from 'react'
import { ThemeToggle } from './ThemeToggle'
import UserAccountNav from './UserAccountNav'
import SpotlightButton from "./customButton"
import { Button } from './ui/button'
// import { Separator } from "@/components/ui/separator"

type Props = {}

const Navbar = (props: Props) => {
    const [menuOpen, setMenuOpen] = React.useState(false)
    const [mounted, setMounted] = React.useState(false)
    const store = useStore(); //we can also destructure straight {authUser}
    const user = store.authUser;


    const handleMenuItemClick = () => {
        setMenuOpen(false);
    };

    // code to set mounted and put it in a useeffect due hydration errors
    React.useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <>
            <header className="flex h-20 w-full items-center justify-between fixed top-0 z-10 px-4 md:px-6 backdrop-blur-sm">
                <Link className="mr-6 flex rounded-lg p-4 py-1" href="/">
                    <h1 className='text-3xl font-bold transition-all hover:translate-y-[2px] md:block bg-gradient-to-r from-blue-500 to-blue-100 bg-clip-text text-transparent'>
                        Fitnex
                    </h1>
                    <p className='text-yellow-500'>beta</p>
                </Link>

                <Sheet >
                <SheetTrigger asChild>
                    <Button className="md:hidden" size="icon" variant="outline">
                        <MenuIcon className="h-6 w-6" />
                        <span className="sr-only">Toggle navigation menu</span>
                    </Button>
                </SheetTrigger>
                <SheetContent side="right">
                    <Link href="/">
                        <span className="sr-only">Fitnex</span>
                    </Link>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 space-y-16">
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

                <div className="hidden md:flex md:items-center md:justify-center space-x-10 border px-6 py-4 rounded-full border-neutral-800 bg-white/70 hover:scale-105">
                    <Link className="w-full h-full hover:text-blue-400 " href="/">
                        Home
                    </Link>

                    <Link className="w-full h-full hover:text-blue-400" href="/about">
                        About
                    </Link>

                    <Link className="w-full h-full hover:text-blue-400" href="/blog">
                        Blog
                    </Link>

                    <Link className="w-full h-full hover:text-blue-400" href="/faqs">
                        FAQs
                    </Link>

                    <Link className="w-full h-full hover:text-blue-400" href="/contact">
                        Contact
                    </Link>
                </div>

                <div className="flex items-center gap-4">
                    {mounted && user === null ? (<>

                        <Link href="/login">
                            <Button className="hidden md:flex" variant="outline">
                                Sign in
                            </Button>
                        </Link>
                        <Link href="/register">

                            <div className="hidden md:flex">

                                <SpotlightButton text="Sign Up" />
                            </div>
                        </Link>
                    </>
                    ) : (<>
                        <Link href="/exercise">
                            <Button className="hidden md:flex" variant="outline">
                                View Exercises
                            </Button>
                        </Link>
                        <UserAccountNav user={mounted && user} />
                    </>
                    )}

                    <ThemeToggle />

                </div>
            </header>
        </>
    )
}

function MenuIcon(props: any) {
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