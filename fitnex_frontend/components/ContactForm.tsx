import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
// import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <Card className="max-w-md mx-auto rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Contact Us</CardTitle>
        <CardDescription className="text-gray-500 dark:text-gray-400">We&aposd love to hear from you!</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input id="name" placeholder="Enter your name" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" placeholder="Enter your email" type="email" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="message">Message</Label>
          <Input className="rows:{4}" id="message" placeholder="Enter your message" />
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="terms-and-conditions" />
          <Label className="text-sm font-normal" htmlFor="terms-and-conditions">
            I agree to the
            <Link className="underline underline-offset-2" href="#">
              Terms & Conditions
            </Link>
          </Label>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full text-white">Submit</Button>
      </CardFooter>
    </Card>
  )
}