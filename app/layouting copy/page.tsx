import React from 'react'

const page = () => {
  return (
    <div>
      <div>Header</div>
      <div>
        <div className="left">Side Bar</div>
        <div className="right">
            <div className="top">Content 1</div>
            <div className="buttom">
                <div className="left">Content 2</div>
                <div className="right">Content 3</div>
            </div>
        </div>
      </div>
      <div>Footer</div>
    </div>
  )
}

export default page
