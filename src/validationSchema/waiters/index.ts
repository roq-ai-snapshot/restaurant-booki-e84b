import * as yup from 'yup';

export const waiterValidationSchema = yup.object().shape({
  shift_start_time: yup.date().required(),
  shift_end_time: yup.date().required(),
  user_id: yup.string().nullable().required(),
  restaurant_id: yup.string().nullable().required(),
});
