import React from 'react'

type Header = {
    text: string
}

const HeaderText = ({text}: Header) => {
  return (
    <p className='text-[#3A1700] leading-[32px] cursor-pointer'>{text}</p>
  )
}

export default HeaderText