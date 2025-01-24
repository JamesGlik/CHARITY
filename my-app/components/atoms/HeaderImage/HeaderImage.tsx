import React from 'react'
import header from "@/public/header_image.svg"
import Image from 'next/image'

const HeaderImage = () => {
  return (
    <div>
        <Image src={header} width={550} height={550} alt='header image'/>
    </div>
  )
}

export default HeaderImage