'use client'

import React from 'react'
import ReadonlyInput from '../Core/ReadonlyInput'
import CustomerSelect from '../Shared/CustomerSelect'
import Divider from '../Core/Divider'
import { BiChevronDown } from 'react-icons/bi'
import Button from '../Core/Button'
import { useFormik } from 'formik';
import { validationSchema } from '@/lib/Validation.yup'
import { v4 as uuidv4 } from 'uuid';
import TabPanel from '../Shared/Tabs'
import FormTable from '../Shared/FormTable'


const SaleForm = () => {

    // init
    const rowValue = {
        id: uuidv4(),
        item: '',
        quantity: '',
        unit: '',
        amount: ''
    }
    // useFormik
    const formik = useFormik({
        initialValues: {
            rows: [rowValue],
            discount: '',
            discountToPKR: '',
            total: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            console.log('Submitted Values', values)
        } 
    })

    const handleAddRow = () => {
        const newRow = { ...rowValue, id: uuidv4() };
        formik.setFieldValue('rows', [...formik.values.rows, newRow]);
    };
    
    const handleRemoveRow = (index: number) => {
        const updatedRows = formik.values.rows.filter((_, i) => i !== index);
        const _total = updatedRows.map(row => row.amount).reduce((acc, curr) => Number(acc) + Number(curr), 0)
        if(formik.values.discount) {
            const discount = Math.round(Number(_total) * (Number(formik.values.discount)/100));
            formik.setValues({...formik.values, rows: updatedRows, discountToPKR: `${discount}`, total: `${Number(_total) - discount}`});
        } else {
            formik.setValues({...formik.values, rows: updatedRows, total: `${_total}`});
        }
    };

    
    const updateHandle = (value: string, index?: number) => {
        const updatedRows = [...formik.values.rows];
        
        if(index === 0 || index) {            
            updatedRows[index].amount = value;
            const _total = updatedRows.map(row => row.amount).reduce((acc, curr) => Number(acc) + Number(curr), 0)
            const discount = Math.round(Number(_total) * (Number(formik.values.discount)/100));
            formik.setValues({ ...formik.values, rows: updatedRows, discountToPKR: `${discount}`, total: `${Number(_total) - discount}` });
        } else {
            const _total = updatedRows.map(row => row.amount).reduce((acc, curr) => Number(acc) + Number(curr), 0)
            const discount = Math.round(Number(_total) * (Number(value)/100));
            formik.setValues({ ...formik.values, discountToPKR: `${discount}`, total: `${Number(_total) - discount}` });
        }
    }

  return (
    <form onSubmit={formik.handleSubmit} className='flex flex-col justify-between min-h-[90vh]'>

      <div>
            {/* /Cash Switch/  */}
            <div className='flex items-center pb-3'>
              <TabPanel
                 tabNodes={[{name: 'Credit'}, {name: 'Cash'}]}
                 panelNodes={[
                    <div key={1} className='flex items-center py-2 w-full gap-3'>
                        <ReadonlyInput
                            value="232323"
                            divClass="w-[20%]"
                            label="Customer ID"
                            />
                        <CustomerSelect 
                            divClass='w-[50%]'
                            label="Select Party"
                            />
                    </div>,
                    <div key={2}>
                            <div>
                                <label htmlFor="first_name" className="block text-sm font-medium text-gray-600">Billing Name</label>
                                <input type="text" className="bg-gray-50 border border-gray-300 outline-none text-gray-600 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2" placeholder="Billing Name" required />
                            </div>
                        <div>
                            <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Billing Message</label>
                            <textarea id="message" rows={3} className="block outline-none p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Billing Address"></textarea>
                        </div>
                    </div>
                 ]}
              />
             </div>
            {/*  */}

        </div>
        <div className="flex flex-col">
            <div className="-m-1.5 overflow-x-auto">
                <div className="p-1.5 min-w-full inline-block align-middle">
                <div className="overflow-hidden">
                    <FormTable
                       columns={[
                        {value: '#'},
                        {value: 'item'},
                        {value: 'quantity', class: 'px-2'},
                        {value: 'price/unit', class: 'px-2'},
                        {value: 'Amount', class: 'px-2'},
                        {value: 'action', class: 'text-right'}
                     ]}
                    >
                      <tbody>
                            {formik.values.rows.map((row, i) => (
                                <tr className="bg-gray-100" key={i}>
                                    <td className="w-16 px-6 py-2 whitespace-nowrap text-sm font-medium border border-gray-200 text-gray-800 ">{i+1}</td>
                                    <td className="w-96 whitespace-nowrap text-sm text-gray-800 border border-gray-200">
                                    <input name={`rows[${i}].item`} value={row.item} onChange={formik.handleChange} type={'text'} className={"bg-inherit border-none px-6 outline-none text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 "}/>
                                    </td>
                                    <td className="w-12 whitespace-nowrap text-sm text-gray-800 border border-gray-200">
                                    <input name={`rows[${i}].quantity`} value={row.quantity} onChange={(e) => {
                                        updateHandle(`${Number(e.target.value) * Number(row.unit)}`, i);
                                        formik.handleChange(e);
                                        }} type={'number'} className={"bg-inherit border-none px-2 outline-none text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 "}/>
                                    </td>
                                    <td className="w-12 whitespace-nowrap text-sm text-gray-800 border border-gray-200">
                                    <input name={`rows[${i}].unit`} 
                                    value={row.unit} onChange={(e) => {
                                        updateHandle(`${Number(row.quantity) * Number(e.target.value)}`, i);
                                        formik.handleChange(e);
                                        }} type={'number'} className={"bg-inherit border-none px-2 outline-none text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 "}/>
                                    </td>
                                    <td className="w-12 px-2 whitespace-nowrap text-sm text-gray-800 border border-gray-200">
                                    <input name={`rows[${i}].amount`} value={row.amount} readOnly className={"bg-inherit px-2 border-none outline-none text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 "}/>
                                    </td>
                                    <td className="w-16 px-6 py-2 whitespace-nowrap text-right text-sm font-medium border border-gray-200">
                                    {formik.values.rows.length > 1 && (
                                        <span onClick={() => handleRemoveRow(i)} className="cursor-pointer text-blue-500 hover:text-blue-700">Delete</span>
                                    )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                        <tfoot>
                            <tr className='border border-gray-200'>
                                <td></td>
                                <td className="px-6 py-2 clear-both w-full block text-left  text-xs font-medium text-gray-500 uppercase">
                                    <span onClick={handleAddRow} className='text-purple-600 border cursor-pointer border-purple-600 rounded-md py-1 px-2 text-[12px]'>+ Add Row</span>
                                </td>
                            </tr>
                        </tfoot>
                    </FormTable>
                </div>
                </div>
            </div>
        </div>
        <div>
            <div className='w-full flex justify-between'>
                   <div className='flex flex-col gap-3'>
                      <select id="countries" className="bg-gray-50 border outline-none border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2">
                        <option value="check" selected>Check</option>
                        <option value="cash">Cash</option>
                        </select>
                        <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 outline-none text-gray-600 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2" placeholder="Add Description" required />
                    </div>
                <div>
                    <div className='flex items-center justify-center'>
                        <span>
                        <label className='mb-2 text-sm font-medium text-gray-900'>Discount %</label>
                        <input type={'number'} name={'discount'} value={formik.values.discount}  onChange={(e) => {
                                updateHandle(e.target.value);
                                formik.handleChange(e);
                            }} placeholder='%' className={"w-[100px] bg-gray-50 border outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2 py-1"}/>
                        </span>
                          <span className='pt-5'>-</span>
                        <span>
                            <label className='text-sm font-medium text-gray-900'>PKR</label>
                            <input type={'number'} name={'discountToPKR'} value={formik.values.discountToPKR} placeholder='-/PKR' className={"w-[100px] bg-gray-50 border outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2 py-1"} readOnly/>
                        </span>
                    </div>
                    <div className='my-3'>
                     <label htmlFor={'label'} className="block text-sm font-medium text-gray-900">{'Total'}</label>
                    <input type={'number'} name={'total'} value={formik.values.total} className={"w-full bg-gray-50 border outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2"} readOnly />
                    </div>
                </div>
            </div>
            <Divider />
            <div className='my-2 flex justify-between'>
                <div></div>
                <div className='flex gap-2'>
                    <button type='button' className='border-2 border-purple-600 rounded-md py-1 px-4 text-purple-600 flex items-center'>Share <BiChevronDown className="text-[20px] font-bold" /></button>
                    <Button type='submit'>Save</Button>
                </div>
            </div>
        </div>
    </form>
  )
}

export default SaleForm