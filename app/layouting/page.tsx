import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className='main'>
        <div className='grid-item header'>
          <ul className="nav">
            <li>Home</li>
            <li>
              <Link href={"/practiceagain"}>Practice</Link>
            </li>
            
            <li>About</li>
            <li>Services</li>
          </ul>
        </div>
        <div className="grid-item sidebar">Side Bar</div>
        <div className="grid-item content1">Content 1</div>
        <div className="grid-item content2">Content 2</div>
        <div className="grid-item content3">Content 3</div>
        <div className='grid-item footer'>Footer</div>
    </div>
  )
}

export default page
