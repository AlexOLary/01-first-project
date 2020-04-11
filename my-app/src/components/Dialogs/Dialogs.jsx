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
    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_item}>
                <Dialog_Item name="Alex" id="1"/>
                <Dialog_Item name="Lex" id="2"/>
                <Dialog_Item name="Supermen" id="3"/>
                <Dialog_Item name="Misha" id="4"/>
                <Dialog_Item name="Vladimir" id="5"/>
                <Dialog_Item name="Fiona" id="6"/>
            </div>
            <div className={s.messages}>
                <Message message="Hi"/>
                <Message message="How is your www?"/>
                <Message message="Yo"/>
                <Message message="Yo"/>
                <Message message="Yo"/>
                <Message message="Yo"/>
            </div>
        </div>);
}

export default Dialogs;