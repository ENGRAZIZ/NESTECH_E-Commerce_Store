
import React from 'react'
import img1 from '../Logo.jpg'

function Logo() {
  return (
    <div>
        <img src={img1} alt="NESTECH Pvt. Ltd Logo" className="w-[100px] h-[40px] sm:w-[150px] sm:h-[50px] md:w-[100px] md:h-[50px] lg:w-[200px] lg:h-[60px]"/>
    </div>
  )
}

export default Logo
