const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likesCount: 23},
                {id: 2, message: 'it\`s my first post', likesCount: 12},
                {id: 3, message: 'it\`s my 2 post', likesCount: 11},
                {id: 4, message: 'it\`s my 3 post', likesCount: 1},

            ],
            newPostText: 'Введите ваше сообщение!'
        },
        dialogsPage: {
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
        },
        sidebar: {}
    },
    _callSubscriber() {
        console.log('State changed');
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action){
        if (action.type === ADD_POST){
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };

            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT){
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_MESSAGE_BODY){
            this._state.dialogsPage.newMessageBody = action.body;
            this._callSubscriber(this._state);
        } else if (action.type === SEND_MESSAGE){
            let body = this._state.dialogsPage.newMessageBody;
            this._state.dialogsPage.newMessageBody = '';
            this._state.dialogsPage.messages_data.push({id: 7, message: body});
            this._callSubscriber(this._state);
        }
    }
}



export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text) =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text});

export const sendMessageCreator = () => ({type: SEND_MESSAGE});
export const updateNewMessageBodyCreator = (body) =>
    ({type: UPDATE_NEW_MESSAGE_BODY, body: body});

export default store;
window.store = store;