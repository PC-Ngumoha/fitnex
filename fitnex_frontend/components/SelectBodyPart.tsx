import React from 'react'
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from './ui/select'

type Props = {
    bodyParts: any
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
                            bodyParts.map((bodyPart: any, index: any) => (
                                <SelectItem key={index} value={bodyPart}>{bodyPart}</SelectItem>
                            ))
                        }
                    </SelectGroup>
                </SelectContent>
            </Select>
        </div>
    )
}

export default SelectBodyPart