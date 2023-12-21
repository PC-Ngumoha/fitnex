import { Separator } from '@radix-ui/react-dropdown-menu';
import { GitPullRequestArrowIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type Props = {};

const Footer = (props: Props) => {
  const currentYear = () => {
    const date = new Date();
    return date.getFullYear();
  };

  return (
    <footer className='flex flex-col md:flex-row items-center justify-evenly p-8 bottom-0 w-full border-t-[2px]'>
      
      <div className='flex flex-col items-center justify-center gap-4 text-slate-900 dark:text-white relative z-10'>
        <GitPullRequestArrowIcon className='h-5 w-5 animate-bounce' />
        <h3 className='text-2xl md:text-3xl font-bold pb-4 mt-4'>Made by ALX Students</h3>
        <p className='text-sm font-semibold opacity-80'>&copy; {currentYear()} FitNex. All rights reserved.</p>
        <div className='flex gap-2'>
          <Link href='#' className='text-sm opacity-80 hover:underline'>
            Terms of Service
          </Link>
          <span className='text-sm opacity-80'>|</span>
          <Link href='#' className='text-sm opacity-80 hover:underline'>
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
