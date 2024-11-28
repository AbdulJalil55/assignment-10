import { Button } from '@/components/ui/button'
import React from 'react'

const page = () => {
  return (
    <div
    // className="flex justify-center items-center h-screen bg-slate-300 hover:duration-1000 hover:transform-all"
    // className="flex justify-center items-center h-screen hover:duration-1000 hover:transform-all"
    className="flex justify-center items-center h-screen"
    >
      <Button variant={'outline'} className="hover:rounded-full bg-slate-300">Button</Button>
      <Button variant={'secondary'} className="hover:rounded-full bg-slate-300">Button</Button>
      <Button variant={'destructive'}>Button</Button>
      <Button variant={'ghost'}>Button</Button>
      <Button variant={'link'}>Button</Button>
      <Button variant={'default'}>Button</Button>
    </div>
  )
}

export default page
