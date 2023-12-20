import { BodyPartProps } from '@/lib/types';
import { cn } from '@/lib/utils';
import Image from 'next/image';
type Props = {
  item: BodyPartProps,
  bodyPart: BodyPartProps[],
  setBodyPart: (bodyPart: BodyPartProps[]) => void,
  image: any,
}


const BodyPart = ({ image, item, bodyPart, setBodyPart }: Props) => {
  return (
    <figure
      onClick={() => {
        if (!bodyPart?.includes(item)) {
          setBodyPart([item]); // Wrap item in an array if it's not included
          window.scrollTo({ top: 1800, behavior: 'smooth' });
        }
      }}
      onMouseEnter={() => setBodyPart([item])}
      onMouseLeave={() => setBodyPart(bodyPart)}
      className={cn('overflow-hidden rounded-md shrink-0', {
        'cursor-pointer': !bodyPart?.includes(item),
        'cursor-default': bodyPart?.includes(item),
        'border-t': bodyPart?.includes(item),
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
          {item.name}
        </span>
      </figcaption>
    </figure>
  );
};

export default BodyPart;
