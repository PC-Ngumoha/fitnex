import { Loader2 } from 'lucide-react'
import React from 'react'

type Props = {}

const Loader = (props: Props) => {
    return (
        <div className='flex items-center justify-center w-full'>
            <Loader2 className='w-10 h-10 animate-spin' />
        </div>

    )
}

export default Loader