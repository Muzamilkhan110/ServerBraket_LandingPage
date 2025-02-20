import React from 'react'
import Image from 'next/image'
const Navbar = () => {
  return (
    <div className='container-custom m-auto'>
        <div className='bg-slate-200 shadow-lg flex justify-between px-5 rounded-lg my-2 p-4'>
        <Image src={"/Logo.png"} alt='Logo' width={30} height={50}/>
        <Image src={"/hamburger.svg"}  alt='Image' width={20} height={50}/>
        </div>
    </div>
  )
}

export default Navbar