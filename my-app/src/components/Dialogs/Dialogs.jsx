import React from "react";
import s from './Dialogs.module.css';
import Dialog_Item from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";

const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogs_elements = state.dialogs_data
        .map(dialog => <Dialog_Item name={dialog.name} id={dialog.id}/>);

    let messages_elements = state.messages_data
        .map(message => <Message message={message.message}/>);

    let newMessageBody = state.newMessageBody;

    let newMessageElement = React.createRef();

    let addMessage = () => {
        let text = newMessageElement.current.value;
        alert(text);
    };

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
                                   placeholder='Enter your message'></textarea></div>
                    <div><button onClick={onSendMessageClick}>Send</button></div>
                </div>
            </div>
        </div>);
};

export default Dialogs;