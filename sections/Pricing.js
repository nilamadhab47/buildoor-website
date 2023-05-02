import Button from '@/components/Button'
import React from 'react'

const Pricing = () => {
  return (
    <div className='pricing my-16 mx-auto font-satoshi' id='pricing'>
        <h1 className='pricing--heading'>Pricing</h1>
        <div className='pricing-list'>
            <div className='neo'>
                <p><span className='font-bold md:text-[42px] text-[32px] text-white'>$99</span>/month</p>
                <h5 className='text-white font-medium text-[33px]'>neo</h5>
                <ul className='pricing-feature--list'>
                    <li className='mb-2'>Create upto 3 UserJourney</li>
                    <li className='mb-2'>Define User Journey</li>
                    <li className='mb-2'>Design Layovers</li>
                    <li className='mb-2'>Layovers Integration</li>
                    <li className='mb-2'> Access to Basic User Analytics<br/>
 <span className='text-xs'>(we will keep adding new features)</span></li>
                    <li className='mb-2'>Priority Waitlist to the No-code tool</li>
                    <li>No user limit for Alpha</li>
                </ul>
                <a href="#request"><div className='pricing--request-access cursor-pointer'>
                    Request Access
                </div></a>
            </div>
            <div className='infinity lg:mt-[-2rem] mt-16 lg:mr-24 mr-0'>
                <div className='lifetime--tag'>
                    Most Popular
                </div>
                <p><span className='font-bold md:text-[42px] text-[32px] text-white'>$499</span>/lifetime</p>
                <h5 className='text-white font-medium text-[33px]'>Infinity</h5>
                <ul className='pricing-feature--list' style={{color: "white"}}>
                    <li className='mb-2'>Create upto 3 UserJourney</li>
                    <li className='mb-2'>Define User Journey</li>
                    <li className='mb-2'>Design Layovers</li>
                    <li className='mb-2'>Layovers Integration</li>
                    <li className='mb-2'> Access to Basic User Analytics<br/>
 <span className='text-xs'>(we will keep adding new features)</span></li>
                    <li className='mb-2'>Priority Waitlist to the No-code tool</li>
                    <li>No user limit for Alpha</li>
                </ul>
                <a href='#request'><div className='pricing--request-access cursor-pointer' style={{opacity: "1"}}>
                    Request Access
                </div></a>
            </div>
        </div>
    </div>
  )
}

export default Pricing