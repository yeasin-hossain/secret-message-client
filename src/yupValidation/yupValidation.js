import * as yup from 'yup';

export const yupUserSchema = yup.object().shape({
    name: yup.string().trim().min(3).max(50).required('This Felid is required'),
    userName: yup.string().trim().min(5).max(25).required('This Felid is required'),
    password: yup
        .string()
        .min(6)
        .max(200)
        .matches(/[^A-Za-z0-9]/)
        .matches(/[A-Z]/)
        .matches(/[a-z]/)
        .matches(/[0-9]/)
        .required('This Felid is required'),
});

export const yupUserName = yup.object().shape({
    userName: yup.string().trim().min(5).max(25).required({ error: 'This Felid is required' }),
});

export const yupLoginUser = yup.object().shape({
    userName: yup.string().trim().min(5).max(25).required({ error: 'This Felid is required' }),
    password: yup
        .string()
        .min(6)
        .max(200)
        .matches(/[^A-Za-z0-9]/)
        .matches(/[A-Z]/)
        .matches(/[a-z]/)
        .matches(/[0-9]/)
        .required('This Felid is required'),
});
