import React from "react";
import {Field, reduxForm} from "redux-form";
import { createForm } from 'final-form'
import {validate} from "json-schema";

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                {/*<label htmlFor="Login">Login</label>*/}
                <Field placeholder="Login" name="login" component="input"/>
            </div>
            <div>
                {/*<label htmlFor="Password">Password</label>*/}
                <Field placeholder="Password" name="password" component="input"/>
            </div>
            <div>
                <Field component="input" name="rememberMe" type="checkbox"/> remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: 'Login'})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        console.log(formData)
    }
    return <div>
        <h1>LOGIN</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}



/*// Create Form // Final Form
const form = createForm({
    initialValues,
    onSubmit, // required
    validate
})

// Subscribe to form state updates
const unsubscribe = form.subscribe(
    formState => {
        // Update UI
    },
    { // FormSubscription: the list of values you want to be updated about
        dirty: true,
        valid: true,
        values: true
    }
})

// Subscribe to field state updates
const unregisterField = form.registerField(
    'username',
    fieldState => {
        // Update field UI
        const { blur, change, focus, ...rest } = fieldState
        // In addition to the values you subscribe to, field state also
        // includes functions that your inputs need to update their state.
    },
    { // FieldSubscription: the list of values you want to be updated about
        active: true,
        dirty: true,
        touched: true,
        valid: true,
        value: true
    }
)

// Submit
form.submit() // only submits if all validation passes*/

export default Login;