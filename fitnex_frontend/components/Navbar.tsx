"use client"
import Link from 'next/link'
import React from 'react'
import { ThemeToggle } from './ThemeToggle'
import SignInButton from './SignInButton'
import UserAccountNav from './UserAccountNav'
import { X } from 'lucide-react'
import { Button } from './ui/button'
// import { Separator } from "@/components/ui/separator"

type Props = {}

const Navbar = (props: Props) => {
    const [menuOpen, setMenuOpen] = React.useState(false)

    const session = true

    const handleMenuItemClick = () => {
        setMenuOpen(false);
    };

    return (
        <nav className="fixed inset-x-0 top-0 bg-white dark:bg-gray-900 z-[10] h-fit border-b border-zinc-300 py-2">
            <div className='flex items-center justify-center h-full gap-2 px-8 mx-auto sm:justify-between max-w-7xl'>
                <Link href="/" className='items-center hidden gap-2 sm:flex'>
                    <p className='rounded-lg p-4 py-1 text-3xl font-bold transition-all hover:translate-y-[2px] md:block bg-gradient-to-r from-blue-500 to-blue-100 bg-clip-text text-transparent'>
                        Fitnex
                    </p>
                    <p className='text-yellow-500'>beta</p>
                </Link>
                <div className='flex items-center'>
                    <Link href="/" className='mr-3 rounded-lg px-2 py-1 text-sm font-semibold transition-all hover:translate-y-[2px] md:block dark:border-white'>Home</Link>
                    <Link href="/about" className='mr-3 rounded-lg px-2 py-1 text-sm font-semibold transition-all hover:translate-y-[2px] md:block dark:border-white'>About Us</Link>
                    <Link href="/blog" className='mr-3 rounded-lg px-2 py-1 text-sm font-semibold transition-all hover:translate-y-[2px] md:block dark:border-white text-gray-400'>Blog</Link>
                    <Link href="/faqs" className='mr-3 rounded-lg px-2 py-1 text-sm font-semibold transition-all hover:translate-y-[2px] md:block dark:border-white'>FAQ</Link>
                    <Link href="/contact" className='mr-3 rounded-lg px-2 py-1 text-sm font-semibold transition-all hover:translate-y-[2px] md:block dark:border-white'>Contact</Link>

                    {session && (

                        <>
                            <Link href="/exercise">
                                    <Button variant="outline" className="bg-gradient-to-r from-blue-500 to-blue-800 justify-center flex rounded-lg hover:bg-blue-500">
                                    View Exercises
                                    </Button>
                            </Link>
                        </>
                    )}
                    <ThemeToggle className="mr-3" />
                    <div className='flex items-center'>
                        {session ? <UserAccountNav user={session} /> : <SignInButton />}
                    </div>
                    <Link href="/register">
                        <Button variant="secondary">Signup</Button>
                    </Link>
                    <Link href="/login">
                        <Button variant="outline" className='bg-blue-500 hover:bg-gradient-to-r from-blue-500 to-blue-800'>Login</Button>
                    </Link>
                </div>
            </div>

            {/* Hamburger icon for smaller screens */}
            {/* <div className='md:hidden'>
                <button onClick={() => setMenuOpen(!menuOpen)}>
                    <X className="h-6 w-6" aria-hidden="true"  />
                </button>
            </div> */}
            {/* Mobile menu */}
            {/* {menuOpen && (
                <MobileMenu
                    setMenuOpen={setMenuOpen}
                    
                    onItemClick={() => { handleMenuItemClick(); }}
                />
            )} */}
        </nav>
    )
}

const MobileMenu = ({ setMenuOpen, onItemClick }: { setMenuOpen: (i: boolean) => void, onItemClick: () => void }) => {
    return (
        <>
        
        </>
    )
}


export default Navbar