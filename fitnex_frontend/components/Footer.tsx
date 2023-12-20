import { GitPullRequestArrowIcon } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

type Props = {}

const Footer = (props: Props) => {

    const currentYear = () => {
        const date = new Date();
        return date.getFullYear();
    }
    return (
        <footer className='flex flex-col md:flex-row items-center justify-center p-8 relative bottom-0' style={{ backgroundImage: "url('/footer.jpg')", backgroundSize: "cover", backgroundPosition: "center", position: "relative" }}>
            <div className='absolute inset-0 bg-black opacity-50'></div>
            <div className='flex flex-col items-center justify-center gap-4 text-white relative z-10'>
                <GitPullRequestArrowIcon className='h-5 w-5 animate-bounce' />
                <h3 className='text-3xl font-bold pb-4 mt-4'>Made by AlX Students</h3>
                <p className='text-sm font-semibold opacity-80'>&copy; {new Date().getFullYear()} FitNex. All rights reserved.</p>
                <div className='flex gap-2'>
                    <a href='#' className='text-sm opacity-80 hover:underline'>Terms of Service</a>
                    <span className='text-sm opacity-80'>|</span>
                    <a href='#' className='text-sm opacity-80 hover:underline'>Privacy Policy</a>
                </div>
            </div>
        </footer>


    );
}


export default Footer

{/* <div className='w-full md:w-1/3 md:mx-8'>
//                 <div className='w-full h-32 md:h-48 bg-opacity-80 bg-cover bg-center rounded-full overflow-hidden mb-4 md:mb-0'>
//                 </div>
//             </div> */}

            