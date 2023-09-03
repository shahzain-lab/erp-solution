import Button from '@/components/Core/Button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between py-2'>
        <div className=''></div>
        <div className='flex items-center gap-2'>
            <Link href="/sale"><Button>Add Sale</Button></Link>
            <Link href="/purchase"><Button>Add Purchase</Button></Link>
            <Image src={"/user-1.jpg"} alt={""} width={40} height={40} style={{borderRadius: '50%'}} className='w-7 h-7'/>
        </div>
    </div>
  )
}

export default Navbar