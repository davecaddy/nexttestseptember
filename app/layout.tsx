import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { Button } from "@/components/ui/button"

import './globals.css'
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <SignedOut>
            <SignInButton>
              <Card>
                <CardHeader>
                  <CardTitle>Sign In To Get Started</CardTitle>
                  <CardDescription>Sign in to view the latest meeting rooms</CardDescription>
                </CardHeader>
                <CardContent>
                <Button className="w-full">Sign In</Button>
                </CardContent>
                </Card>

                  </SignInButton>

          </SignedOut>
          <SignedIn>
            <UserButton />
            {children}
          </SignedIn>
          </div>
        </body>
    </html>
    </ClerkProvider>
  )
}