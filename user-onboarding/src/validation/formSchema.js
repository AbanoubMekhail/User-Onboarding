import * as yup from 'yup';

const formSchema = yup.object().shape({
    username: yup
        .string()
        .trim()
        .required('Username is required!')
        .min(3, "Username must be 3 charactrs long or more!!"),
    email: yup
        .string()
        .required('Email is required!')
        .email("Must be a valid Email address!!"),
    password: yup
        .string()
        .required('Password is required!')
        .min(6, "Password must be 6 charactrs long or more!!"),
    tos: yup
        .boolean()
        .oneOf([true], 'Must accept the terms ' )

})

export default formSchema;