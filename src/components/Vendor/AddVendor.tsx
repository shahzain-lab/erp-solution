'use client'

import React, { useState } from 'react'
import Button from '../Core/Button'
import Modal from '../Shared/Modal'
import Divider from '../Core/Divider'
import Input from '../Core/Input'
import { useFormik } from 'formik'
import TabPanel from '../Shared/Tabs'
import Textarea from '../Core/Textarea'
import Radio from '../Core/Radio'
import { partyFormEntries } from './lib/vendorParams'
import { useAddVendorMutation } from '@/redux/services/apiSlice'

const AddParty = () => {
  const [ addVendor ] = useAddVendorMutation()
  const [isOpen, setIsOpen] = useState(false)
  const formik = useFormik({
    initialValues: {
        ...partyFormEntries
   },
   onSubmit: (values, {setSubmitting}) => {
       setSubmitting(false)
       console.log('values => ',values)
       const vendor = {
        ...values,
        openedBalance: Number(values.openedBalance),
        limit: Number(values.limit),
        fields: JSON.stringify(values.fields)
       }
       addVendor(vendor)
    }
   })

   const handleTabChange = (tab: {name: string}) => {}

   const handleFieldsChange = (e: any, i: number) => {
      formik.setValues({...formik.values, fields: formik.values.fields.map((t, j) => j===i?{text:t.text+=e.target.value}:{text:t.text})})
    }

    const PartyAddress = () => {
        return (
            <div className='divide-x-2 divide-gray-300 flex gap-4'>
              <Input name={'email'} onChange={formik.handleChange} value={formik.values.email} labal='Email ID *' />
              <Textarea rows={4} LabalClass='ml-5' InputClass='ml-5' onChange={formik.handleChange} name={'billingAddress'} value={formik.values.billingAddress} labal='Billing Address *' />
            </div>
        )
    }
    const CreditDetails = () => {
        return (
          <div className=''>
            <div className='flex gap-4'>
                <Input name={'openedBalance'} onChange={formik.handleChange} value={formik.values.openedBalance} labal='Opening Balance *' />
                <Input name={'creditDate'} onChange={formik.handleChange} value={formik.values.creditDate} labal='As of Date' />
            </div>
            <div className='flex my-3 gap-4'>
                <Radio name={'toPay'} labal='To Pay' onChange={formik.handleChange} checked={formik.values.toPay} />
                <Radio name={'toPay'} labal='To Receive' checked={formik.values.toPay} />
            </div>
            <span>Credit Limit</span>
          </div>
        )
    }
    const Fields = () => {
        return (
          <div className=''>
            {formik.values.fields.map((field, i) => (
              <Input key={i} onChange={formik.handleChange} name={`fields[${i}].text`} value={field.text} labal={`Additional Fields ${i+1}`} />
            ))}
           </div>
        )
    }
  return (
    <div>
      <Button onClick={() => setIsOpen(true)}>Add Vendor</Button>
      <Modal className='max-w-4xl ' title='Add Vendor' isOpen={isOpen} setIsOpen={setIsOpen}>
         <Divider className='mt-2' />
         <form onSubmit={formik.handleSubmit}>
            <div className='mt-3'>
                <div className='flex items-center gap-2'>
                    <Input onChange={formik.handleChange} name={'name'} value={formik.values.name} labal='Party Name *' />
                    <Input onChange={formik.handleChange} name={'phoneNo'} value={formik.values.phoneNo} labal='Phone Number' />
                </div>
              <TabPanel
                className='mt-16'
                handleTabChange={handleTabChange}
                tabNodes={[{name:'Address'},{name:'Credit & Balance'},{name:'Additional Fields'}]}
                panelNodes={[<PartyAddress key={1} />,<CreditDetails key={2} />,<Fields key={3} />]}
              />
            </div>
            <div className='flex justify-between w-full pt-7 '>
              <span></span>
              <div className='gap-2 flex'>
                  <Button type='button' variant='outline'>Save & New</Button>
                  <Button type='submit'>Save</Button>
              </div>
            </div>
         </form>
      </Modal>
    </div>
  )
}

export default AddParty

