'use client'

import Image from 'next/image'
import React, { useState, Fragment, useCallback } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import {useDropzone} from 'react-dropzone'
import Modal from '../Shared/Modal'


export const SideHead = () => {
  let [isOpen, setIsOpen] = useState(false)

  const onDrop = useCallback((acceptedFiles: any) => {
     console.log('acceptedFiles',acceptedFiles)
  }, [])
  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

  return (
    <>
      <div
          onClick={() => setIsOpen(true)}
          className='flex items-center pb-2 justify-center gap-2 w-full cursor-pointer'>
          <Image
            src={'/rocket.png'}
            alt=""
            width={30}
            height={30}
          />
          ERP-FRONTEND
      </div>
      <Modal title='Edit Details' isOpen={isOpen} setIsOpen={setIsOpen}>
      <div className="mt-2">
                    <div className='flex gap-4'>
                          <div {...getRootProps()} className="flex items-center justify-center w-[50%]">
                            <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 hover:bg-gray-100">
                                <div className="flex flex-col items-center justify-center pt-3 pb-4">
                                {!isDragActive && (
                                  <>
                                      <svg className="w-8 h-8 mb-4 text-gray-500 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                                      </svg>
                                      <p className="mb-2 text-sm text-gray-500 "><span className="font-semibold">Click to upload</span> or drag and drop</p>
                                      <p className="text-xs text-gray-500 ">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                                  </>
                                )}
                                </div>
                                <input {...getInputProps()} className="hidden" />
                            </label>
                        </div> 
                          <div className='flex flex-col gap-4 w-[50%]'>
                               <div>
                                   <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-600">Business Name *</label>
                                   <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 outline-none text-gray-600 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="John" required />
                               </div>
                               <div>
                                   <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-600">Phone No *</label>
                                   <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 outline-none text-gray-600 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="John" required />
                               </div>
                               <div>
                                   <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-600">Email *</label>
                                   <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 outline-none text-gray-600 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="John" required />
                               </div>
                           </div>
                    </div>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={() => setIsOpen(false)}
                    >
                      Update
                    </button>
                  </div>
      </Modal>
     
    </>
  )
}
