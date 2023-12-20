// import Exercises from '@/components/Exercises'
import HeroBanner from '@/components/HeroBanner'
import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import SearchExcercise from '@/components/SearchExcercise'
import { BodyPartProps, ExerciseProps } from '@/lib/types'
import Image from 'next/image'

// new imports for the home page
import HeroSection from "./index/hero-section/page";
// import Navbar from "./index/navbar/page";
import OurFeatures from "./index/our-features/page";
import Customizable from "./index/customizable/page";
import MadeSimple from "./index/made-simple/page";
import MadeFor from "./index/made-for/page";
import Faqs from "./index/faqs/page";
import NeedHelp from "./index/need-help/page";


export default function Home() {

  //changes are reflected acrross the app
  const [exercises, setExercises] = useState<ExerciseProps[]>([])
  const [bodyPart, setBodyPart] = useState<BodyPartProps[]>([]);

  // console.log(bodyPart)

  return (
    <>
      <MaxWidthWrapper>
        <HeroBanner />

        <SearchExcercise />
      </MaxWidthWrapper>

      <div>
        <HeroSection />
        <OurFeatures />
        <Customizable />
        <MadeSimple />
        <MadeFor />
        <Faqs />
        <NeedHelp />
      </div>
    </>
  )
}
