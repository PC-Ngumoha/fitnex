import { BodyPartProps, EquipmentProps, ExerciseProps, TargetProps } from '@/lib/types'
import BodyPart from './BodyPart'
import ExerciseCard from './ExerciseCard'
import { ScrollArea, ScrollBar } from './ui/scroll-area'

type Props = {
  data: BodyPartProps[] | TargetProps[] | EquipmentProps[],
  bodyParts: BodyPartProps[],
  setBodyParts?: any,
  isBodyPart?: boolean
}

type PartsImage = {
  id: number,
  image: string,
}

const partImage: PartsImage[] = [

  {
      id: 0,
      image: '/parts/all.jpg',
  },

  {
      id: 1,
      image: '/parts/back.jpg',
  },
  {
      id: 2,
      image: '/parts/cardio.jpg',
  },
  {
      id: 3,
      image: '/parts/chest.jpg',
  },
  {
      id: 4,
      image: '/parts/lower-arms.jpg',
  },
  {
      id: 5,
      image: '/parts/lower-legs.jpg',
  },
  {
      id: 6,
      image: '/parts/nexk.jpg',
  },
  {
      id: 7,
      image: '/parts/shoulders.jpg',
  },
  {
      id: 8,
      image: '/parts/upper-arm.jpg',
  },
  {
      id: 9,
      image: '/parts/upper-leg.jpg',
  },
  {
      id: 10,
      image: '/parts/waist.jpg',
  },
]

const HorizontalScrollBar = ({ data, setBodyParts, bodyParts, isBodyPart }: Props) => {
  // console.log(data)
  return (
    <ScrollArea className=" whitespace-nowrap rounded-md border">
      <div className="flex w-max space-x-4 p-4">
        {data.map((item, index) => (
          <div key={item.id}>
             <BodyPart item={item} bodyPart={bodyParts} setBodyPart={setBodyParts} image={partImage[index]?.image} /> 
          </div>
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  )
}

export default HorizontalScrollBar
