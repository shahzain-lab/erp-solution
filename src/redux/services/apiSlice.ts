import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
  reducerPath: 'apiSlice',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
  endpoints: (builder) => ({
    addSale: builder.mutation({
      query: (values) => {
        console.log('Values reaches in service ', values)
        return 'todos'
      },
    }),
    addPurchase: builder.mutation({
      query: (values) => {
      console.log('Values reaches in service ', values)
        return 'todos'
      } 
    }),
    addExpense: builder.mutation({
      query: (values) => {
        console.log('Values reaches in service ', values)
        return 'todos'
      }
    }),
    addParty: builder.mutation({
      query: (values) => {
        console.log('Values reaches in service ', values)
        return 'todos'
      }
    }),
    addItem: builder.mutation({
      query: (values) => {
        console.log('Values reaches in service ', values)
        return 'todos'
      }
    })
  }),
})
export const { 
  useAddSaleMutation,
  useAddPurchaseMutation,
  useAddExpenseMutation,
  useAddPartyMutation,
  useAddItemMutation
 } = apiSlice;