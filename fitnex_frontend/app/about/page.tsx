import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CardHeader, CardContent, Card } from "@/components/ui/card"
import { Avatar } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

export default function Component() {
  return (
    <>
      <main className="container mx-auto py-12 px-4 sm:px-6 lg:py-24 lg:px-8">
        <div className="lg:text-center">
          <p className="text-base text-center text-indigo-600 font-semibold tracking-wide uppercase">About us</p>
          <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            A team dedicated to your fitness goals
          </h3>
          <p className="mt-4 max-w-2xl text-xl text-gray-400 lg:mx-auto">
            We are a dedicated team of developers and fitness enthusiasts committed to helping you achieve your fitness goals.
          </p>
        </div>
        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            <div className="relative">
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <DumbbellIcon className="h-6 w-6" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-white">Expert Trainers</p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-500">
                All our trainers are certified and have years of experience in the fitness industry.
              </dd>
            </div>
            <div className="relative">
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <ClockIcon className="h-6 w-6" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-white">Flexible Schedule</p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-500">
                We offer a variety of classes at different times to accommodate your busy schedule.
              </dd>
            </div>
          </dl>
        </div>
        <section className="space-y-8 md:py-20">
          <h2 className="text-3xl font-bold text-center">Meet Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card>
              <CardContent className="flex items-center space-x-4 md:py-10">
                <Avatar alt="Team member" className="w-24" src="/images/fitdev.png" />
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">Chukwuemeka Ngumoha</h3>
                  <Badge>Backend Developer</Badge>
                  <p className="text-gray-600 dark:text-gray-400">
                    ALX Student & Fitness Enthusiast.
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex items-center space-x-4 md:py-10">
                <Avatar alt="Team member" className="w-24" src="/images/fitdev.png" />
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">Aliyu Timilehin</h3>
                  <Badge>Backend Developer</Badge>
                  <p className="text-gray-600 dark:text-gray-400">
                    ALX Student & Fitness Enthusiast.
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex items-center space-x-4 md:py-10">
                <Avatar alt="Team member" className="w-24" src="/images/fitdev.png" />
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">Kyrillos Maher</h3>
                  <Badge>Backend Developer</Badge>
                  <p className="text-gray-600 dark:text-gray-400">
                    ALX Student & Fitness Enthusiast.
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex items-center space-x-4 md:py-10">
                <Avatar alt="Team member" className="w-24" src="/images/fitdev.png" />
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">Ibrahim Abdulazeez</h3>
                  <Badge>Backend Developer</Badge>
                  <p className="text-gray-600 dark:text-gray-400">
                    ALX Student & Fitness Enthusiast.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
        <section className="text-center">
          <h2 className="text-3xl font-bold mb-8">Join us on our journey to fitness</h2>
          <Link href="/register">
            <Button className="px-6 py-3 text-lg">Get Started</Button>
            </Link>
        </section>
      </main>
    </>
  )
}


function ClockIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  )
}


function DumbbellIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m6.5 6.5 11 11" />
      <path d="m21 21-1-1" />
      <path d="m3 3 1 1" />
      <path d="m18 22 4-4" />
      <path d="m2 6 4-4" />
      <path d="m3 10 7-7" />
      <path d="m14 21 7-7" />
    </svg>
  )
}