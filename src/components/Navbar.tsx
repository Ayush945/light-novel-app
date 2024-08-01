"use client"
import React from 'react'
import { Button } from './ui/button'
import { ModeToggle } from './ui/theme-change-button'
function Navbar() {
  return (
    <div >
        <div className='flex justify-evenly p-4'>
            <p className=' cursor-pointer'>Home</p>
            <p className=' cursor-pointer'>Browse</p>
            <p className=' cursor-pointer'>Ranking</p>
            <p className=' cursor-pointer'>Search</p>
            <p className=' cursor-pointer'>SignIn</p>
            <ModeToggle></ModeToggle> 
                   
        </div>
    </div>
  )
}

export default Navbar