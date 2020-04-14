import React from "react";
import s from './Dialogs.module.css';
import Dialog_Item from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let dialogs_elements = props.state.dialogs_data
        .map(dialog => <Dialog_Item name={dialog.name} id={dialog.id}/>)

    let messages_elements = props.state.messages_data
        .map (message => <Message message={message.message}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_item}>
                {dialogs_elements}
            </div>
            <div className={s.messages}>
                {messages_elements}
            </div>
        </div>);
}

export default Dialogs;