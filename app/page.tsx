import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CalendarIcon, MapPinIcon, Users2Icon } from "lucide-react"
import Link from "next/link"
import Image from "next/image"


export default function Component() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <MapPinIcon className="h-6 w-6" />
          <span className="sr-only">Acme Booking</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            How It Works
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Properties
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Pricing
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-muted">
          <div className="container px-4 md:px-6 mx-auto"> {/* Added mx-auto */}
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Book Your Perfect Meeting Space
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Find and book professional meeting rooms across our properties. Easy, fast, and flexible.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <div className="container px-4 md:px-6 mx-auto"> {/* Added mx-auto */}
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Find Your Space</h2>
                <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl">
                  Search for available meeting rooms that fit your needs.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <form className="grid gap-4 w-full"> {/* Added w-full */}
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select location" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="new-york">New York</SelectItem>
                    <SelectItem value="london">London</SelectItem>
                    <SelectItem value="tokyo">Tokyo</SelectItem>
                    <SelectItem value="paris">Paris</SelectItem>
                  </SelectContent>
                </Select>
                <div className="grid gap-2">
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button variant="outline" className="w-full justify-start text-left font-normal">
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        <span>Pick a date</span>
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar mode="single" initialFocus />
                    </PopoverContent>
                  </Popover>
                </div>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Number of people" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1-5">1-5 people</SelectItem>
                    <SelectItem value="6-10">6-10 people</SelectItem>
                    <SelectItem value="11-20">11-20 people</SelectItem>
                    <SelectItem value="21+">21+ people</SelectItem>
                  </SelectContent>
                </Select>
                <Button type="submit">Search Available Rooms</Button>
              </form>
              <div className="flex flex-col items-start space-y-4">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Why choose us?</div>
                <ul className="grid gap-6">
                  <li className="flex items-center gap-2">
                    <Users2Icon className="h-5 w-5" />
                    <span>Wide range of room sizes</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <MapPinIcon className="h-5 w-5" />
                    <span>Prime locations worldwide</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CalendarIcon className="h-5 w-5" />
                    <span>Flexible booking options</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 mx-auto"> {/* Added mx-auto */}
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Featured Properties</h2>
                <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl">
                  Explore our top-rated meeting spaces in prime locations.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <Image
                    src="https://placehold.co/300x200"
                    alt="New York Office"
                    className="rounded-lg object-cover"
                    height={200}
                    width={300}
                  />
                </CardHeader>
                <CardContent>
                  <CardTitle>New York Office</CardTitle>
                  <CardDescription>Modern spaces in the heart of Manhattan</CardDescription>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">View Rooms</Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <Image
                    src="https://placehold.co/300x200"
                    alt="London Office"
                    className="rounded-lg object-cover"
                    height={200}
                    width={300}
                  />
                </CardHeader>
                <CardContent>
                  <CardTitle>London Office</CardTitle>
                  <CardDescription>Elegant meeting rooms in the City</CardDescription>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">View Rooms</Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <Image
                    src="https://placehold.co/300x200"
                    alt="Tokyo Office"
                    className="rounded-lg object-cover"
                    height={200}
                    width={300}
                  />
                </CardHeader>
                <CardContent>
                  <CardTitle>Tokyo Office</CardTitle>
                  <CardDescription>High-tech spaces with a view</CardDescription>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">View Rooms</Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">© 2023 Acme Booking Inc. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}