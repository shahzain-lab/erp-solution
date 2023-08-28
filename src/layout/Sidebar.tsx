import Divider from '@/components/Core/Divider'
import Menuitems from '@/components/Sidebar/MenuItems'
import SideGroup from '@/components/Sidebar/SideGroup'
import { SideHead } from '@/components/Sidebar/SideHead'
import SideItem from '@/components/Sidebar/SideItem'
import React from 'react'

const Sidebar = () => {
  return (
    <div className='p-2 w-60 bg-gradient-to-b from-cyan-600 to-violet-600 h-screen text-white fixed top-0 left-0'>
        <SideHead />
        <Divider />
        <ul className="space-y-1 list-inside text-white">
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