import React from 'react'
import header from "@/public/header_image.svg"
import Image from 'next/image'

const HeaderImage = () => {
  return (
    <div>
        <Image src={header} width={600} height={600} alt='header image'/>
    </div>
  )
}

export default HeaderImage