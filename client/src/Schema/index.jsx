import * as Yup from 'yup'

export const signupSchema = Yup.object({
    name: Yup.string().required('Enter your name'),
    email: Yup.string().email().required('Enter your email'),
    phone: Yup.string().length(10).required('Enter your number'),
    password: Yup.string().required("Enter your password"),
    skills: Yup.string().min(3).required('Let us know your skills'),
})

export const loginSchema = Yup.object({
    name: Yup.string(),
    email: Yup.string().email().required('Enter your email'),
    phone: Yup.string(),
    password: Yup.mixed().required('Enter your password'),
    skills: Yup.string()

})