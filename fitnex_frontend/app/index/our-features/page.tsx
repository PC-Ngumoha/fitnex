

'use client'

import React from "react"
import Image from "next/image"


const features = [
    {
        name: "Personalization",
        description:
          "Choose from over 1300+ Exercises, and personalize your whole experience.",
        image: "/images/icon-personalize.png",
        alt: "Customizable",
        color: "blue"
      },
      {
        name: "Accessibility",
        description:
          "Fitnex made workout accessible to all, regardless of location, time constraints, or financial limitations.",
        image: "/images/icon-access2.png",
        alt: "Customizable",
      },
      {
        name: "Engagement",
        description:
          "Fitnex has a perfect trainer experience that encourages trainers to interact with the exercises. And practice every day.",
        image: "/images/icon-puzzle.png",
        alt: "Customizable",
      },
      {
        name: "Guidance",
        description:
          "Fitnex provides comprehensive information on exercises, proper techniques, and nutritional guidance to educate users on holistic well-being.",
        image: "/images/icon-guidance.png",
        alt: "Customizable",
      },
      {
        name: "Variety",
        description:
          "Fitnex offers diverse workout routines catering to different objectives such as weight loss, muscle building, and overall fitness.",
        image: "/images/icon-layer.png",
        alt: "Customizable",
      },
      {
        name: "Support",
        image: "/images/icon-support-1.png",
        description: "Get 24/7 support from our team to help you with any issues you have.",
        alt: "Customizable",
      },
    ]

const OurFeatures = () => {
    return ( 
    <div className="">
        <div className="
md:flex-row
      
flex-col
items-center
flex  justify-center pb-10
        
        ">
            <div className="p-5 justify-center md:w-1/3">
                <div className="
                bg-gradient-to-r
                from-blue-800
                to-green-300
                bg-clip-text
                text-transparent
                text-4xl
                md:text-6xl
                font-bold
                pb-10
                
                ">
                    Fitnex is made to 'Fit' your needs, and help you achieve your goals!

                </div>
                <div className="text-2xl mb-8">
                Providing high-quality instructional content for exercises and nutrition to ensure trainer safety and effectiveness in achieving their fitness goals.

                </div>
                <button className="bg-blue-500 text-white p-4 justify-center flex md:w-1/3 rounded-lg hover:bg-blue-600">
                        Get Started
                </button>
                </div>
                

                <video className="rounded-xl md:w-2/5 p-4 md:p-0 "  autoPlay muted loop >
                    <source src="/content/video-2.mp4" type="video/mp4" />

                </video>

            </div>

            <div className="flex-col items-center justify-center">
                <div className="
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


                </div>

                <div className="grid grid-cols-1 p-4 md:grid md:grid-cols-3 gap-4 md:px-40">
                    {features.map((feature, index) => (
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
                                src={feature.image}
                                alt={feature.alt}
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



  );
}
 
export default OurFeatures;