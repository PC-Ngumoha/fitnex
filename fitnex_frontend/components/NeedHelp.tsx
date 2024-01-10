import React from 'react'
import Link from 'next/link'
import MaxWidthWrapper from './MaxWidthWrapper'

type Props = {}

const NeedHelp = (props: Props) => {
    return (
        <MaxWidthWrapper>
            <div className="md:py-20 p-10 md:pt-2">
                <div className="border-[1px] md:w-2/3 mx-auto p-10 rounded-xl">
                    <div className="text-4xl font-bold mb-5">
                        Need Further Assistance?
                    </div>
                    <div>
                        Curious about how Fitnex can help you? Get in touch with our team to learn more about our platform and how Fitnex can help you achieve your fitness goals.

                    </div>

                    <Link href="/contact">
                        <button className="bg-blue-500 text-white px-6 py-3 md:w-1/4 mt-5 rounded-lg hover:bg-blue-600">
                            Contact Us

                        </button>
                    </Link>

                </div>

            </div>
        </MaxWidthWrapper>
    )
}

export default NeedHelp