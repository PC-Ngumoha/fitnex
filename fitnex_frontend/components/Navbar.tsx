"use client"
import Link from 'next/link'
import React from 'react'
import { ThemeToggle } from './ThemeToggle'
import SignInButton from './SignInButton'
import UserAccountNav from './UserAccountNav'
import { X } from 'lucide-react'

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
                    <p className='rounded-lg border-2 border-b-4 border-r-4 border-black p-4 py-1 text-xl font-bold transition-all hover:translate-y-[2px] md:block dark:border-white'>
                        Fitnex
                    </p>
                </Link>
                <div className='flex items-center'>

                    {session && (

                        <>
                            
                            <Link href="/exercise" className='mr-3 rounded-lg border-2 border-b-4 border-r-4 border-slate-500 px-2 py-1 text-sm font-semibold transition-all hover:translate-y-[2px] md:block dark:border-white'>Excercise</Link>
                        </>
                    )}
                    <ThemeToggle className="mr-3" />
                    <div className='flex items-center'>
                        {session ? <UserAccountNav user={session} /> : <SignInButton />}
                    </div>
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