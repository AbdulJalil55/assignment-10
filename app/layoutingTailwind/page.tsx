import React from 'react'

const page = () => {
  return (
    <div>
      <div className="grid grid-cols-5 grid-rows-4 grid-span h-screen gap-[5px]">
        <div className="bg-orange-400 flex justify-center items-center col-start-1 col-end-6">Header</div>
        <div className="bg-orange-400 flex justify-center items-center row-start-2 row-end-4">Siderbar</div>
        <div className="bg-orange-400 flex justify-center items-center col-start-2 col-end-4">Content 1</div>
        <div className="bg-orange-400 flex justify-center items-center col-start-4 col-end-6">Content 2</div>
        <div className="bg-orange-400 flex justify-center items-center col-start-2 col-end-6">Content 3</div>
        <div className="bg-orange-400 flex justify-center items-center col-start-1 col-end-6">Footer</div>
      </div>
    </div>
  )
}

export default page
