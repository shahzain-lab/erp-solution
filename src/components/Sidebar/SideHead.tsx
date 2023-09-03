'use client'

import Image from 'next/image'
import React, { useState, Fragment, useCallback } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import {useDropzone} from 'react-dropzone'
import Modal from '../Shared/Modal'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import Button from '../Core/Button'
import { useUpdateBusinessProfileMutation } from '@/redux/services/apiSlice'

export const SideHead = () => {
  let [isOpen, setIsOpen] = useState(false)
  const [ updateBusinessProfile ] = useUpdateBusinessProfileMutation()

  const onDrop = useCallback((acceptedFiles: any) => {
     console.log('acceptedFiles',acceptedFiles)
     const imageFile = acceptedFiles[0];

     const reader = new FileReader();
     reader.onload = (e) => {
      formik.setFieldValue('imgURL', e.target?.result)
      console.log(e.target?.result)
     }
     reader.readAsDataURL(imageFile)
  }, [])
  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

  const formik = useFormik({
    initialValues: {
      businessName: 'ERP Frontend',
      phoneNo: '',
      email: '',
      imgURL: ''
    },
    onSubmit: (values) => {
      console.log(values)
      updateBusinessProfile(values)
    }
  })

  const handleImageChange = () => {
    formik.setFieldValue('imgURL', '')
  }

  return (
    <>
      <div
          onClick={() => setIsOpen(true)}
          className='flex items-center pb-2 justify-start gap-3 w-full cursor-pointer'>
          {formik.values.imgURL ? (
            <Image
              src={formik.values.imgURL}
              alt=""
              width={30}
              height={30}
              className='w-[100px] h-[100px] object-cover'
            />
          ) : (
            <Image
              src={'/rocket.png'}
              alt=""
              width={30}
              height={30}
            />
          )}
          <span className='font-semibold'>{formik.values.businessName}</span>
      </div>
      <Modal title='Edit Details' isOpen={isOpen} setIsOpen={setIsOpen}>
           <form onSubmit={formik.handleSubmit}>
              <div className="mt-2">
                    <div className='flex gap-4'>
                        {formik.values.imgURL ? (
                          <div className='flex group relative items-center justify-center w-[50%]'>
                            <div className='absolute group-hover:flex rounded-lg w-full hidden justify-center items-center h-full bg-[#00000054] z-10'>
                              <Button onClick={handleImageChange}>Change</Button>
                            </div>
                            <Image
                              src={formik.values.imgURL}
                              alt='Business Logo'
                              width={20}
                              height={20}
                              className='w-full h-full'
                            />
                          </div>
                        ): (
                          <div {...getRootProps()} className="flex items-center justify-center w-[50%]">
                            <label htmlFor="dropzone-file" className="flex outline-none flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 hover:bg-gray-100">
                                <div className="flex flex-col items-center outline-none justify-center pt-3 pb-4">
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
                        )}
                          <div className='flex flex-col gap-4 w-[50%]'>
                               <div>
                                   <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-600">Business Name *</label>
                                   <input name='businessName' onChange={formik.handleChange} value={formik.values.businessName} type="text" className="bg-gray-50 border border-gray-300 outline-none text-gray-600 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Enter Name ..." />
                               </div>
                               <div>
                                   <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-600">Phone No *</label>
                                   <input name='email' onChange={formik.handleChange} value={formik.values.email} type="text" className="bg-gray-50 border border-gray-300 outline-none text-gray-600 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Enter Phone ..." />
                               </div>
                               <div>
                                   <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-600">Email *</label>
                                   <input name='phoneNo' onChange={formik.handleChange} value={formik.values.phoneNo} type="text" className="bg-gray-50 border border-gray-300 outline-none text-gray-600 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Enter Email ..." />
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
           </form>
      </Modal>
     
    </>
  )
}
