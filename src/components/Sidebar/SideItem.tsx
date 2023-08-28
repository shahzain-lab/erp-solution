import Link from 'next/link'
import React, { FC } from 'react'


const SideItem = ({item}: any) => {
  return (
    <Link href={item.href}><div className='pl-5 flex items-center gap-2 bg-violet-800 py-3 rounded-lg'><item.Icon />{item.title}</div></Link>
  )
}

export default SideItem