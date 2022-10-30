import React from 'react'

function Navbar() {
  return (
   <>
   <nav className='text-white flex justify-around items-center p-[40px]'>
    <div>
        <h1 className="text-2xl">CRONOS</h1>
    </div>

    <div>
        <ul className='flex gap-[50px] text-sm'>
            <li>Learn</li>
            <li>Build</li>
            <li>Explore</li>
        </ul>
    </div>
    <div>
    <h3 className="text-2xl">Get CRONOS</h3>
    </div>
   </nav>
   </>
  )
}

export default Navbar