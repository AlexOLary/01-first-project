import React from 'react';
import BasicForm from "../../utils/validators/BasicForm";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";


const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password)
    }
    return <div>
        <h1>LOGIN</h1>
        <BasicForm onSubmit={onSubmit}/>
    </div>
}

export default connect (null, {login}) (Login);