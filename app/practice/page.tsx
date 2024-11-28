import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogDescription } from '@/components/ui/dialog'
import { DialogClose, DialogOverlay, DialogPortal, DialogTitle, DialogTrigger } from '@radix-ui/react-dialog'
import React from 'react'

const page = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <Button variant={'destructive'}>Hello</Button>
      <Dialog>
          <DialogTrigger>Open</DialogTrigger>
          {/* <DialogOverlay>But Why</DialogOverlay> */}
          <DialogClose>Bye</DialogClose>
          <DialogContent className='bg-white'>
            <p>Welcome to the Dialog Content...</p>
            <Button variant={'destructive'} className='bg-orange-300'>Hello Button</Button>
          </DialogContent>
          {/* <DialogDescription>Hello Description</DialogDescription> */}
      </Dialog>
    </div>
  )
}

export default page
