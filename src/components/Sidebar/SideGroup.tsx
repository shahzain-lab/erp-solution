import React from 'react'

interface Props {
    subheader: string
}

const SideGroup = ({item}: {item: Props}) => {
  return (
    <div className='pt-6 font-semibold text-txt_layout text-sm'>{item.subheader}</div>
  )
}

export default SideGroup