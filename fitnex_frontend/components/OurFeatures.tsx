import React from 'react'
import Image from 'next/image'
import { OurFeaturesData } from '@/lib/constatData'
import Link from 'next/link'

type Props = {}

const OurFeatures = (props: Props) => {
  return (

    <div className="">
      <div className="flex flex-col md:flex-row items-center justify-center pb-10">
        <div className="p-5 justify-center">
          <div className="
                bg-gradient-to-r
                from-blue-800
                to-green-300
                bg-clip-text
                text-transparent
                text-4xl
                md:text-6xl
                font-bold
                pb-10 ">
            Fitnex is made to &lsquo;Fit&lsquo; your needs, and help you achieve your goals!

          </div>
          <div className="text-2xl mb-8">
            Providing high-quality instructional content for exercises and nutrition to ensure trainer safety and effectiveness in achieving their fitness goals.

          </div>
        
        </div>


        <video className="rounded-xl md:w-2/5 md:p-0 " autoPlay muted loop >
          <source src="/content/video-2.mp4" type="video/mp4" />

        </video>

      </div>

      <div className="flex-col items-center justify-center">
        <h2 className="
                text-3xl
                flex
                justify-center
                md:text-5xl
                font-bold
                pt-5
                pb-10
                bg-gradient-to-r
                from-purple-400
                to-blue-800
                bg-clip-text
                text-transparent
                ">
          Our Features


        </h2>

        <div className="grid grid-cols-1 p-4 md:grid md:grid-cols-3 gap-4">
          {OurFeaturesData.map((feature, index) => (
            <div
              key={index}
              className="flex-col space-y-6 pb-10 border
                        
                        p-8 rounded-xl items-center justify-center w-full hover:scale-105 transform transition-all duration-500 ease-in-out
                        "
            >
              <div className="
                            text-gray-600 text-3xl font-bold
                            ">
                <Image
                  src={feature.image as string}
                  alt={feature.alt as string}
                  width={300}
                  height={300}
                  className="object-contain h-20 w-20 items-center justify-center flex mb-10"
                />
                <div>
                  <div className="text-2xl pb-4 bg-gradient-to-t
                                    from-white
                                    to-gray-400
                                    bg-clip-text
                                    text-transparent
                                    ">{
                      feature.name}
                  </div>

                  <div className="bg-gradient-to-r from-blue-300 to-white bg-clip-text text-transparent text-lg">
                    {feature.description}




                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default OurFeatures