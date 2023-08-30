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

const AddParty = () => {
  const [isOpen, setIsOpen] = useState(false)
  const formik = useFormik({
    initialValues: {
        partyName: '',
        phoneNo: '',
        address: {
            partyEmailId: '',
            partyBilling: '' 
        },
        credit: {
          openedBalance: '',
          creditDate: '28/07/2023',
          toPay: true,
          toReceive: false
        },
        fields: {
          text: ''
        }
   },
   onSubmit: (values) => {
       console.log('values => ',values)
    }
   })
    const PartyAddress = () => {
        return (
            <div className='divide-x-2 divide-gray-300 flex gap-4'>
              <Input name={'partyEmailId'} value={formik.values.address.partyEmailId} labal='Email ID *' />
              <Textarea rows={4} LabalClass='ml-5' InputClass='ml-5' name={'partyBilling'} value={formik.values.address.partyBilling} labal='Billing Address *' />
            </div>
        )
    }
    const CreditDetails = () => {
        return (
          <div className=''>
            <div className='flex gap-4'>
                <Input name={'openedBalance'} value={formik.values.credit.openedBalance} labal='Opening Balance *' />
                <Input name={'creditDate'} value={formik.values.credit.creditDate} labal='As of Date' />
            </div>
            <div className='flex my-3 gap-4'>
                <Radio name={'toPay'} labal='To Pay' checked={formik.values.credit.toPay} />
                <Radio name={'toPay'} labal='To Receive' checked={formik.values.credit.toPay} />
            </div>
            <span>Credit Limit</span>
          </div>
        )
    }
    const Fields = () => {
        return (
          <div className=''>
              <Input name={'openedBalance'} value={formik.values.fields.text} labal='Additional Fields 1' />
              <Input name={'creditDate'} value={formik.values.fields.text} labal='Additional Fields 2' />
          </div>
        )
    }
  return (
    <div>
      <Button onClick={() => setIsOpen(true)}>Add Party</Button>
      <Modal className='max-w-4xl ' title='Add Party' isOpen={isOpen} setIsOpen={setIsOpen}>
         <Divider className='mt-2' />
        <div className='mt-3'>
            <div className='flex items-center gap-2'>
                <Input name={'partyName'} value={formik.values.partyName} labal='Party Name *' />
                <Input name={'phoneNo'} value={formik.values.phoneNo} labal='Phone Number' />
            </div>
           <TabPanel
             className='mt-16'
             tabNodes={[{name:'Address'},{name:'Credit & Balance'},{name:'Additional Fields'}]}
             panelNodes={[<PartyAddress key={1} />,<CreditDetails key={2} />,<Fields key={3} />]}
           />
        </div>
        <div className='flex justify-between w-full pt-7 '>
          <span></span>
          <div className='gap-2 flex'>
              <Button variant='outline'>Save & New</Button>
              <Button>Save</Button>
          </div>
        </div>
      </Modal>
    </div>
  )
}

export default AddParty

