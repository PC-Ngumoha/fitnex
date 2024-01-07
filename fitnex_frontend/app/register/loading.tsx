import { PuffLoader } from '@/components/spinners'
import React from 'react'


type Props = {}

const LoadingComponent = (props: Props) => {
  return (
    <PuffLoader className="w-10 h-10" />)
 
}

export default LoadingComponent