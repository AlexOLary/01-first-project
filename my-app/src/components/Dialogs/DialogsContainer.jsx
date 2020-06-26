import React from "react";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAutoRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {sendMessage, updateNewMessageBody} from "../../redux/dialogs-reducer";

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (newMessageBody) => {
            dispatch(sendMessage(newMessageBody));
        },
        updateNewMessageBody: (body) => {
            dispatch(updateNewMessageBody(body));
        }
    }
}

export default compose(
    connect (mapStateToProps,mapDispatchToProps ),
    withAutoRedirect
)(Dialogs);

