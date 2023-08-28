import React from 'react'

const SaleOverview = () => {
  return (
    <div className='shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-4 rounded-lg mb-4'>
        
        <div className='flex items-center'>
            <div className='bg-gradient-to-b py-5 px-5 rounded-lg from-teal-200 to-cyan-300'>
               <span className='text-gray-800 text-2xl'>24,500</span> 
            </div>
            <span className='text-2xl'>+</span>
            <div className='bg-gradient-to-b py-5 px-5 rounded-lg from-teal-200 to-cyan-300'>
               <span className='text-gray-800 text-2xl'>24,500</span> 
            </div>
            <span className='text-2xl'>=</span>
            <div className='bg-gradient-to-b py-5 px-5 rounded-lg from-teal-200 to-cyan-300'>
               <span className='text-gray-800 text-2xl'>24,500</span> 
            </div>
        </div>
    </div>
  )
}

export default SaleOverview