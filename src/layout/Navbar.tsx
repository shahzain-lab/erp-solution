import Button from '@/components/Core/Button'
import Image from 'next/image'
import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between py-2 shadow-md'>
        <div className=''></div>
        <div className='flex items-center gap-2'>
            <Button text="Add Sale" />
            <Image src={"/user-1.jpg"} alt={""} width={40} height={40} style={{borderRadius: '50%'}} className='w-7 h-7'/>
        </div>
    </div>
  )
}

export default Navbar