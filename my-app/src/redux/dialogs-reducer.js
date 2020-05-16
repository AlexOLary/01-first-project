const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    dialogs_data: [
        {id: 1, name: 'Alex'},
        {id: 2, name: 'Lex'},
        {id: 3, name: 'Supermen'},
        {id: 4, name: 'Misha'},
        {id: 5, name: 'Vladimir'},
        {id: 6, name: 'Fiona'},
    ],
    messages_data: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is your www?'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'oO'},
        {id: 5, message: 'Ho'},
        {id: 6, message: 'Ho'},
    ],
    newMessageBody: ''
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.body
            };
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            return {
                ...state,
                newMessageBody: '',
                messages_data: [...state.messages_data, {id: 7, message: body}]
            };
        default:
            return state;
    }
};

export const sendMessageCreator = () => ({type: SEND_MESSAGE});
export const updateNewMessageBodyCreator = (body) =>
    ({type: UPDATE_NEW_MESSAGE_BODY, body: body});

export default dialogsReducer;