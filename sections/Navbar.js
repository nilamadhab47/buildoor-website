import Button from '@/components/Button'
import { useTheme } from 'next-themes'
import Image from 'next/image'
import React from 'react'
import logo from "@/assets/logo.png"
import Link from 'next/link'


const Navbar = () => {

  function scrollToSection(id) {
    setTimeout(() => {
      const section = document.getElementById(id);
      section.scrollIntoView({ behavior: 'smooth' });
    }, 10);
  }
  const handleScroll = (e) => {
    // first prevent the default behavior
    e.preventDefault();
    // get the href and remove everything before the hash (#)
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    // get the element by id and use scrollIntoView
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className='navbar flex justify-between'>
      <div className='navbar-logo'>
      <Image src={logo} alt='logo' height={190} width={320} className='w-[180px] h-[108px] lg:w-[320px] lg:h-[190px]'/>
      </div>
      <div className='sub-navbar md:block hidden'>
        <ul className='flex gap-16 mt-16 cursor-pointer'>
          <li><Link href="#home" onClick={handleScroll} >Home</Link></li>
          <li><Link href="#feature" onClick={handleScroll}>Feature</Link></li>
          <li><Link href="#pricing" onClick={handleScroll}>Pricing</Link></li>
          <li><Link href="#docs" onClick={handleScroll}>Docs</Link></li>
        </ul>

      </div>
      <div className='navbar-cta md:block hidden'>
        <Button text="schedule Demo"btnStyle="mr-20 mt-12 px-8 py-4"/>
        
      </div>

    </div>
  )
}

export default Navbar