import React from "react";
import s from './Dialogs.module.css';
import Dialog_Item from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogs_elements = state.dialogs_data
        .map(d => <Dialog_Item name={d.name} id={d.id} key = {d.id}/>);

    let messages_elements = state.messages_data
        .map(m => <Message message={m.message} key = {m.id}/>);

    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.sendMessage();

    };

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body);
    };

    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_item}>
                {dialogs_elements}
            </div>
            <div className={s.messages}>
                <div>{messages_elements}</div>
                <div>
                    <div><textarea value={newMessageBody}
                                   onChange={onNewMessageChange}
                                   placeholder='Enter your message'/>
                    </div>
                    <div>
                        <button onClick={onSendMessageClick}>Send</button>
                    </div>
                </div>
            </div>
        </div>);
};

export default Dialogs;