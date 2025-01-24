import React from 'react'
import header from "@/public/header_image.svg"
import Image from 'next/image'

const HeaderImage = () => {
  return (
    <div>
        <Image src={header} width={400} height={400} alt='header image' className=''/>
    </div>
  )
}

export default HeaderImage