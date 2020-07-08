import React from "react";
import { Formik, Field, Form } from "formik";
import BasicFormSchema from "./BasicFormSсhema";

const BasicForm = (props) => (

    <div className="container">

        <Formik
            //инициализируем значения input-ов
            initialValues={{
                email: "",
                username: "",
                password: ""
            }}
            //подключаем схему валидации, которую описали выше
            validationSchema={BasicFormSchema}
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
            //определяем, что будет происходить при вызове onsubmit
            onSubmit={values => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                }, 500);
            }}
            //свойство, где описывыем нашу форму
            //errors-ошибки валидации формы
            //touched-поля формы, которые мы "затронули",
            //то есть, в которых что-то ввели
            render={({ errors, touched }) => (
                <Form className="form-container">
                    <label htmlFor="email">Email</label>
                    <Field
                        name="email"
                        placeholder="email"
                        type="email"
                    />

                    {//если в этом поле возникла ошибка и
                        //если это поле "затронуто, то выводим ошибку
                        errors.email &&
                        touched.email && <div className="field-error">{errors.email}</div>}

                    <label htmlFor="username">Username</label>
                    <Field name="username" placeholder="username" type="text" />

                    {errors.username &&
                    touched.username && (
                        <div className="field-error">{errors.username}</div>
                    )}

                    <label htmlFor="password">Password</label>
                    <Field name="password" placeholder="password" type="password" />

                    {errors.password &&
                    touched.password && (
                        <div className="field-error">{errors.password}</div>
                    )}

                    <button type="submit">Submit</button>
                </Form>
            )}
        />
    </div>
);

export default BasicForm;