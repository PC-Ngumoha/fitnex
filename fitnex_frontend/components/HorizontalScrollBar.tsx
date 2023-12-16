import React from 'react'

type Props = {
    // data: {
    //     id: string,
    //     title: string,
    //     image?: string
    // }
}

const data = [
    {
      id: 1,
      title: "Barbell Squat",
      image: "imageUrl",
    },
    {
      id: 2,
      title: "Barbell Bench Press",
      image: "imageUrl",
    },]
    

const HorizontalScrollBar = ({}: Props) => {
  return (
    <div>
        {data.map((item: any) => (
            <div key={item.id}>
                <></>
            </div>
        ))}
    </div>
  )
}

export default HorizontalScrollBar