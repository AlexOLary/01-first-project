import React from "react";
import {Form} from "formik";
import {createField, Input, Textarea} from "../../common/FormsControls/FormsControls";
import {reduxForm} from "redux-form";

const ProfileDataForm = ({profile}) => {
    return <Form>
        <div>
            <button onClick={()=> {}}>save</button>
        </div>}
        <div>
            <b>Full name</b>: {createField("Full Name","fullName", [], Input)}
        </div>
        <div>
            <b>Looking Looking for a job</b>: {createField("","lookingForAJob", [], Input, {type: "checkbox"})}
        </div>
        <div>
            <b>My professional skills</b>: {createField("","lookingForAJobDescription", [], Textarea)}
        </div>
        <div>
            <b>About me</b>:
            {createField("About me","AboutMe", [], Textarea)}
        </div>
        {/*<div>
            <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
            return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
        })}
        </div>*/}
    </Form>
}

const ProfileDataFormReduxForm = reduxForm({form: 'edit-profile'})(ProfileDataForm)

export default ProfileDataFormReduxForm