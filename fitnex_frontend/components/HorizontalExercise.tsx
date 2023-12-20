import { BodyPartProps, EquipmentProps, ExerciseProps, TargetProps } from '@/lib/types'
import BodyPart from './BodyPart'
import ExerciseCard from './ExerciseCard'
import { ScrollArea, ScrollBar } from './ui/scroll-area'

type Props = {
  data: ExerciseProps[],
}

const HorizontalExercise = ({ data }: Props) => {
  // console.log(data)
  return (
    <ScrollArea className=" whitespace-nowrap rounded-md border">
      <div className="flex w-max space-x-4 p-4">
        {data.map((item, index) => (
          <div key={item.id}>
            <ExerciseCard exercise={item} />
          </div>
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  )
}

export default HorizontalExercise
