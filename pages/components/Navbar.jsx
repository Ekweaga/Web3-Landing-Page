import React,{useState} from 'react'
import Image from 'next/image'

function Navbar() {
    const [open,setOpen]= useState(false)
  return (
   <>
   <nav className='text-white flex md:justify-around items-center p-[40px] justify-between'>
    <div>
        <h1 className="text-2xl">CRONOS</h1>
    </div>

    <div>
        <ul className='md:flex gap-[50px] text-sm hidden'>
            <li>Learn</li>
            <li>Build</li>
            <li>Explore</li>
        </ul>
    </div>
    <div>
    <h3 className="text-2xl md:block hidden">Get CRONOS</h3>
    </div>

    <div
          onClick={() => setOpen(!open)}
          className={`z-[500px]  ${
            open ? "text-gray-900" : ""
          } text-3xl md:hidden `}
        >
          <Image src={open ? "/icon-close.svg" :"/icon-hamburger.svg"} alt="icon" width={20} height={20}></Image>
        </div>

        <div
          className={`md:hidden text-white absolute w-2/3 h-screen z-10
      px-7 py-2 font-medium bg-[#141414] top-0 duration-300 ${
        open ? "left-0 block" : "right-0 hidden"
      }`}
        >
          <ul className="flex flex-col justify-center h-[300px] gap-10 py-2 text-lg mt-[200px]">
          <li  onClick={() => setOpen(!open)}>Retail</li>
                
                <li  onClick={() => setOpen(!open)}>Get Started</li>
                <li  onClick={() => setOpen(!open)}>Our Solutions</li>
                <li  onClick={() => setOpen(!open)}>COVID 19</li>
                <li  onClick={() => setOpen(!open)}>CAMPAIGNS</li>
                <li  onClick={() => setOpen(!open)}>RETAIL</li>
                <li  onClick={() => setOpen(!open)}>ABOUT US</li>
               
              
          </ul>
        </div>
   </nav>
   </>
  )
}

export default Navbar