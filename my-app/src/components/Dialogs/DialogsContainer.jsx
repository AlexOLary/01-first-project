import React from "react";
import {sendMessage, updateNewMessageBody} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAutoRedirect} from "../../hoc/withAuthRedirect";

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
    }
};


let AuthRedirectComponent = withAutoRedirect(Dialogs);


const DialogsContainer = connect (mapStateToProps,  {sendMessage, updateNewMessageBody}) (AuthRedirectComponent);

export default DialogsContainer;