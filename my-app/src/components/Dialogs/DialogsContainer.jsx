import React from "react";
import {sendMessage, updateNewMessageBody} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
};

/*let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: () => {
            dispatch(sendMessageCreator());
        },
        updateNewMessageBody: (body) => {
        dispatch(updateNewMessageBodyCreator(body));
        }
    }
};*/
const DialogsContainer = connect (mapStateToProps, {sendMessage, updateNewMessageBody}) (Dialogs);

export default DialogsContainer;