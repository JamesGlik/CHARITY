import React from 'react'

type Logo = {
    logo: string
}

const HeaderLogo = ({logo}: Logo) => {
  return (
    <p className='text-[#3A1700] font-rowdies text-[40px] font-light leading-[48px] tracking-[-1px] cursor-pointer relative z-[1]'>{logo}</p>
  )
}

export default HeaderLogo