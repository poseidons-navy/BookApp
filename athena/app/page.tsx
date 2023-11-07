"use client"
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { GithubIcon } from "lucide-react"
import { signIn } from 'next-auth/react'

export default function Home() {

  const handleSignIn = async () => {
    signIn('github', {
      callbackUrl: "/dashboard"
    })
  }

  return (
    <div className="flex flex-col w-screen h-screen items-center justify-center">
      <Button onClick={handleSignIn} variant={'outline'} className='gap-x-3' >
        <span>
          Sign in with
        </span>
        <GithubIcon/>
      </Button>
    </div>
  )
}
