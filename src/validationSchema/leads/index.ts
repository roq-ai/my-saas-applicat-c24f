import * as yup from 'yup';

export const leadValidationSchema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().required(),
  phone: yup.string(),
  status: yup.string().required(),
  sales_representative_id: yup.string().nullable(),
  company_id: yup.string().nullable().required(),
});
