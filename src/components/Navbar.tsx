"use client"
import React from 'react'
import { DropDownRanking } from './DropDownNavbar'
import { ModeToggle } from './ui/theme-change-button'
function Navbar() {
  return (
    <div className='flex justify-around'>
      <DropDownRanking></DropDownRanking>
      <ModeToggle></ModeToggle>        
    </div>
  )
}

export default Navbar