import React from 'react'

type Props = {}

const MadeSimple = (props: Props) => {
    return (


        <div className="items-center flex justify-center md:mt-10">
            <div className="text-center md:text-6xl text-4xl 
        bg-gradient-to-r
        from-blue-800
        to-purple-300
        bg-clip-text
        text-transparent
        font-bold
        
        ">
                Training Made Simple.

                <div className='mt-16' aria-label='hidden' />

                <div className="justify-center items-center flex">
                    <video className="rounded-xl md:w-2/3" autoPlay muted loop>
                        <source src="/content/video-4.mp4" type="video/mp4" />

                    </video>

                </div>

            </div>
        </div>
    )
}

export default MadeSimple