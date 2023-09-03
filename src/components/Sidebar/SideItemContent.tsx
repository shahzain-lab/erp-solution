'use client'

import { useState } from "react"
import { BiChevronDown } from 'react-icons/bi'
import { usePathname } from 'next/navigation'
import Link from "next/link"

export const RenderItem = ({item}: any) => {
    const [isOpen, setIsOpen] = useState(false)
    const pathname = usePathname()
  
  return(
    <div className={`flex flex-col gap-2 cursor-pointer`}>
        <div onClick={() => item.children ? setIsOpen(!isOpen) : {}} className={`py-1 px-1 flex items-center justify-between bg-violet-800  rounded-lg gap-2 ${(item.children ? item.children.find((a:any) => a.href===pathname) : pathname === item.href) ? 'bg-bg_primary rounded-md text-white' : 'text-txt_layout'}`}>
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
              {item.children && item.children.map((child: any, i: number) => (
                <Link key={i} href={child.href} className={`w-full ${pathname === child.href ? 'text-bg_primary bg-layout_light py-1 rounded-md ' : 'text-txt_layout'}`}>
                    <div className='bg-violet-800 flex items-center px-2 w-full gap-2 rounded-lg'>
                    
                    <child.Icon />{child.title}
                  </div>
                </Link>
              ))}
            </div>
        )}
      </div>
  )
  }

  