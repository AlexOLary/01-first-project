import React from "react";
import s from './Dialogs.module.css';
import Dialog_Item from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Field, reduxForm} from "redux-form";


const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogs_elements = state.dialogs_data
        .map(d => <Dialog_Item name={d.name} id={d.id} key = {d.id}/>);

    let messages_elements = state.messages_data
        .map(m => <Message message={m.message} key = {m.id}/>);

    let newMessageBody = state.newMessageBody;

    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_item}>
                {dialogs_elements}
            </div>
            <div className={s.messages}>
                <div>{messages_elements}</div>

            </div>
            <AddMessageFormRedux onSubmit={addNewMessage}/>
        </div>);
};

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component="textarea"
                       placeholder="Enter your message"
                       name="newMessageBody"/>
            </div>
            <div>
                <button >Send</button>
            </div>
        </form>
    )
}

const AddMessageFormRedux = reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm)

export default Dialogs;