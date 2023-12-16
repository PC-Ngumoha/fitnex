import Exercises from '@/components/Exercises'
import HeroBanner from '@/components/HeroBanner'
import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import SearchExcercise from '@/components/SearchExcercise'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <MaxWidthWrapper>
        <HeroBanner />

        <SearchExcercise />

        <Exercises />
      </MaxWidthWrapper>
    </>
  )
}
