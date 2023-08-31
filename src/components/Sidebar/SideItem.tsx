'use client'

import Link from 'next/link'
import React, { useState } from 'react'
import { BiChevronDown } from 'react-icons/bi'

interface Props {
  item : {
    title?: string;
    Icon?: string;
    href: string;
    children: any[]
  }
}

const SideItem = ({item}: any) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <Link href={item.href?item.href:''}>
      <div className='pl-5 flex flex-col py-1 gap-2'>
        <div onClick={() => setIsOpen(!isOpen)} className=' flex items-center justify-between bg-violet-800 px-2 rounded-lg gap-2'>
          <div className='flex items-center gap-4'>
              
                <item.Icon />
              {item.title}

          </div>
              {item.children && (
                <BiChevronDown className="" />
              )} 
        </div>
        {isOpen && (
            <div className='flex items-center mx-2 gap-2'>
              {item.children && item.children.map((child: any) => (
                <Link href={child.href} className='w-full'>
                    <div className='bg-violet-800 flex items-center px-2 w-full gap-2 rounded-lg'>
                    
                    <child.Icon />{child.title}
                  </div>
                </Link>
              ))}
            </div>
        )}
      </div>
    </Link>
  )
}

export default SideItem