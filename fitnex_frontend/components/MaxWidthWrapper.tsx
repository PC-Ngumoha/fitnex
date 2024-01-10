
import { cn } from '@/lib/utils'
import React from 'react'

type Props = {
    className?: string,
    children: React.ReactNode
}

const MaxWidthWrapper = ({ className, children }: Props) => {
    return (
        <div className={cn('mx-auto w-full mt-20 max-w-screen-xl px-2.5 md:p-5', className)}>
            {children}
        </div>

    )
}

export default MaxWidthWrapper