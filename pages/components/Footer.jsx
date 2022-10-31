import React from 'react'

function Footer() {
  return (
   <>
   <footer className='md:h-[300px] mt-[50px] flex md:items-center md:justify-center px-4 md:px-0'>

    <div className="grid grid-cols-1 md:grid-cols-5 gap-[120px] p-3">
        <div>
            <h2 className='font-bold mb-[20px]'>Learn</h2>
            <ul className='flex flex-col gap-[20px] text-sm'>
                <li>Introduction</li>
                <li>Features</li>
                <li>Staking</li>
                <li>Get HEDRON</li>
                <li>FAQ</li>
            </ul>
        </div>

        <div>
            <h2 className='font-bold mb-[20px]'>Build</h2>
            <ul className='flex flex-col gap-[20px] text-sm'>
                <li>Developer portal</li>
                <li>Ignite CLI</li>
                <li>Cronos SDK</li>
                <li>IBC Protocol</li>
                
            </ul>
        </div>


        <div>
            <h2 className='font-bold mb-[20px]'>Explore</h2>
            <ul className='flex flex-col gap-[20px] text-sm'>
                <li>Tokens</li>
                <li>Apps & Services</li>
                <li>Wallet</li>
                <li>introduction</li>
                <li>Blog</li>
            </ul>
        </div>

        <div>
            <h2 className='font-bold mb-[20px]'>Participate</h2>
            <ul className='flex flex-col gap-[20px] text-sm'>
                <li>Community</li>
                <li>Contributors</li>
                <li>Events</li>
                <li>Newsletters</li>
               
            </ul>
        </div>


        <div>
            <h2 className='font-bold mb-[20px]'>Resources</h2>
            <ul className='flex flex-col gap-[20px] text-sm'>
                <li>About</li>
                <li>Press Kit</li>
                <li>Design</li>
                <li>Resources</li>
               
            </ul>
        </div>
    </div>

   </footer>
   </>
  )
}

export default Footer