/*
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';


const Login = () => (
    <div>
        <h1>LOGIN</h1>
        <Formik
            //инициализируем значения input-ов
            initialValues={{ email: '', password: '' }}
            validate={values => {
                const errors = {};
                if (!values.email) {
                    errors.email = 'Required';
                } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                    errors.email = 'Invalid email address';
                }
                return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                }, 400);
            }}
        >
            {({ isSubmitting }) => (
                <Form>
                    <div>
                        <Field placeholder={"Login"} type="email" name="email" />
                        <ErrorMessage name="email" component="div" />
                    </div>
                    <div>
                        <Field placeholder={"Password"} type="password" name="password" />
                        <ErrorMessage name="password" component="div" />
                    </div>
                    <div>

                    </div>
                    <div>
                        <button type="submit" disabled={isSubmitting}>
                            submit
                        </button>
                    </div>

                </Form>
            )}
        </Formik>
    </div>
);

export default Login;
*/
