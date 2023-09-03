
import Link from 'next/link'
import React from 'react'
import { RenderItem } from './SideItemContent'


interface Props {
  item : {
    title?: string;
    Icon?: string;
    href: string;
    children: any[]
  }
}

const SideItem = ({item}: any) => {

  return (
    <>
      {item.href ? (
        <Link href={item.href}>
          <RenderItem item={item} />
        </Link>
      ) : (<RenderItem item={item} />)}
    </>
  )
}



export default SideItem

