import React from 'react'

const page = () => {
  return (
    <div className='flex sm:flex-row flex-col justify-center items-center h-screen'>
      <div className="bg-orange-300 h-[400px] w-[400px] text-6xl flex justify-center items-center sm:w-[200px] sm:h-[200px] sm:text-3xl">BOX 1</div>
      <div className="bg-blue-300 h-[400px] w-[400px] text-6xl flex text-center flex justify-center items-center sm:w-[200px] sm:h-[200px] sm:text-3xl">BOX 2</div>
      <div className="bg-blue-300 h-[400px] w-[400px] text-sm flex text-center flex justify-center items-center sm:w-[200px] sm:h-[200px] max-lg:text-8xl">BOX 2</div>
    </div>
  )
}

export default page
