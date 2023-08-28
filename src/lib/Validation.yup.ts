
import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
    rows: Yup.array().of(
      Yup.object().shape({
        item: Yup.string().required('Item is required'),
        quantity: Yup.number().required('quantity is required'),
        unit: Yup.number().required('unit is required'),
        amount: Yup.number(),
        discount: Yup.number(),
        discountToPKR: Yup.number(),
        total: Yup.number()
      })
    ),
  })