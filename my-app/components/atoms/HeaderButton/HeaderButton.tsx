import React from 'react'

type Button = {
    button: string,
}

const HeaderButton = ({button}: Button) => {
  return (
    <div className='font-rowdies text-[14px] uppercase rounded-[24px] border border-[rgba(126,138,184,0.30)] px-[35px] py-[15px] text-[#7E8AB8] cursor-pointer'>{button}</div>
  )
}

export default HeaderButton