import React from 'react'
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from './ui/select'
import { BodyPartProps } from '@/lib/types'

type Props = {
    bodyParts: BodyPartProps[]
}

const SelectBodyPart = ({ bodyParts }: Props) => {
    return (
        <div className="flex items-center justify-center">


            <Select>
                <SelectTrigger className='w-[280px]'>
                    <SelectValue placeholder='Select a body part' />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectLabel>Body Parts</SelectLabel>
                        {
                            bodyParts.map((bodyPart: BodyPartProps, index: any) => (
                                <SelectItem key={bodyPart.id} value={bodyPart.name}>{bodyPart.name}</SelectItem>
                            ))
                        }
                    </SelectGroup>
                </SelectContent>
            </Select>
        </div>
    )
}

export default SelectBodyPart