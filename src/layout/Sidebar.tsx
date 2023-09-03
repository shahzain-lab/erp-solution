'use client'

import Divider from '@/components/Core/Divider'
import Menuitems from '@/components/Sidebar/MenuItems'
import SideGroup from '@/components/Sidebar/SideGroup'
import { SideHead } from '@/components/Sidebar/SideHead'
import SideItem from '@/components/Sidebar/SideItem'
import React from 'react'

const Sidebar = () => {
  return (
    <div className='py-2 px-4 w-60 bg-white h-screen text-txt_primary fixed top-0 left-0'>
        <SideHead />
        <ul className="space-y-1 list-inside pr-4 text-txt_primary">
            {Menuitems.map((item, i) => (
               <li key={i}>
                   {item.subheader ? (<SideGroup item={item} />) : (<SideItem item={item} />)}
               </li>
            ))}
        </ul>
    </div>
  )
}

export default Sidebar


{/* ------------------------------------------- */}
{/* Sidebar for desktop */}
{/* ------------------------------------------- */}