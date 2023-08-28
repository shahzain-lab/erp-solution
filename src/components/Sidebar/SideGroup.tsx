import React from 'react'

interface Props {
    subheader: string
}

const SideGroup = ({item}: {item: Props}) => {
  return (
    <div className='pt-6'>{item.subheader}</div>
  )
}

export default SideGroup