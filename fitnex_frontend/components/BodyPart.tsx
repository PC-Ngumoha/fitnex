import React from 'react'
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { Button } from './ui/button';
type Props = {
    item: any,
    bodyPart: any,
    setBodyPart: any,
    image: any,
}


const BodyPart = ({image, item, bodyPart, setBodyPart }: Props) => {
    return (
      <figure
        onClick={() => {
          if (bodyPart !== item) {
            setBodyPart(item);
            window.scrollTo({ top: 1800, behavior: 'smooth' });
          }
        }}
        onMouseEnter={() => setBodyPart(item)}
        onMouseLeave={() => setBodyPart(bodyPart)}
        className={cn('overflow-hidden rounded-md shrink-0', {
          'cursor-pointer': bodyPart !== item,
          'cursor-default': bodyPart === item,
          'border-t': bodyPart === item,
        })}
      >
        <div className='flex space-x-2 overflow-x-auto'>
            <div className='w-32'>
              <Image
                src={image}
                alt={`Photo by Timmy`}
                className="aspect-[3/4] h-full w-full object-cover bg-no-repeat"
                width={300}
                height={400}
              />
            </div>
        </div>
        <figcaption className="pt-2 text-xs text-muted-foreground">
          Photo by{" "}
          <span className="font-semibold text-foreground">
            {item}
          </span>
        </figcaption>
      </figure>
    );
  };
  
  export default BodyPart;
  