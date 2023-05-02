import Input from '@/components/Input'
import Image from 'next/image'
import React, { useState } from 'react'
import icon from "@/assets/icon.png"

const Newsletter = () => {
  const [displaySuccessMessage, setDisplaySuccessMessage] = useState(false)

  return (
    <>
    {displaySuccessMessage ? <p className='text-center mb-8 mt-[12rem] md:mt-0'>Thank You for subscribing, have a good day</p> : 
    <div className='newsletter flex justify-center md:gap-20 gap-4 mb-8 flex-col md:flex-row mt-[14rem] md:mt-0 items-center'>
        <h1 className='text-white font-normal lg:text-3xl text-xl text-center'>Subscribe to our <span>Newsletter</span></h1>
       
       <Input placeholder="Email" inputStyles="md:w-[447px] w-[308px] h-[51px]"/><button onClick={()=>setDisplaySuccessMessage(true)}><Image src={icon} alt='icon' width="fill" height="fill" className='relative lg:left-[-8rem] left-[7rem] top-[-3.6rem] lg:top-0'/></button>
    </div>
    
  }
  </>
  )
}

export default Newsletter