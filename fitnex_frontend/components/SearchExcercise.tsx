import React from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button'
import HorizontalScrollBar from './HorizontalScrollBar'

type Props = {}


const SearchExcercise = (props: Props) => {
  
  return (
    <div className='mt-[37px] flex flex-col items-center justify-center p-[20px]'>
      <h1 className="scroll-m-20 text-2xl font-bold text-center tracking-tight lg:text-3xl mb-[50px] bg-gradient-to-r
        from-white
        to-gray-500 
         bg-clip-text
         text-transparent">
        Awesome Excercises Every Trainer Should Know!
      </h1>

      <div className="flex items-center justify-center mb-10 gap-2">
        <Input type="text" placeholder='Search Excercise' className='w-full lg:w-[500px] lg:h-[50px] rounded-full space-x-2 border-2 p-[10px]' />
        <Button className='w-[100px] h-[50px] rounded-full bg-black opacity-2 text-white'>Search</Button>
      
      </div>

      <div className=''>
        <HorizontalScrollBar />
      </div>
    </div>
  )
}

export default SearchExcercise