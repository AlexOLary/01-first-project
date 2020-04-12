import React from "react";
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const Dialog_Item = (props) => {
    let path = "/dialogs/" + props.id;

    return <div className={s.dialog + ' ' + s.active}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
}

const Message = (props) => {
    return <div className={s.dialog}>{props.message}</div>
}

const Dialogs = (props) => {

    let dialogs_data = [
        {id: 1, name: 'Alex'},
        {id: 2, name: 'Lex'},
        {id: 3, name: 'Supermen'},
        {id: 4, name: 'Misha'},
        {id: 5, name: 'Vladimir'},
        {id: 6, name: 'Fiona'},
    ]

    let messages_data = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is your www?'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'oO'},
        {id: 5, message: 'Ho'},
        {id: 6, message: 'Ho'},
    ]

    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_item}>
                <Dialog_Item name={dialogs_data[0].name} id={dialogs_data[0].id}/>
                <Dialog_Item name={dialogs_data[1].name} id={dialogs_data[1].id}/>
                <Dialog_Item name={dialogs_data[2].name} id={dialogs_data[2].id}/>
                <Dialog_Item name={dialogs_data[3].name} id={dialogs_data[3].id}/>
                <Dialog_Item name={dialogs_data[4].name} id={dialogs_data[4].id}/>
                <Dialog_Item name={dialogs_data[5].name} id={dialogs_data[5].id}/>
            </div>
            <div className={s.messages}>
                <Message message={messages_data[0].message}/>
                <Message message={messages_data[1].message}/>
                <Message message={messages_data[2].message}/>
                <Message message={messages_data[3].message}/>
                <Message message={messages_data[4].message}/>
                <Message message={messages_data[5].message}/>

            </div>
        </div>);
}

export default Dialogs;