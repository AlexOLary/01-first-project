const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

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
            messages_data: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How is your www?'},
                {id: 3, message: 'Yo'},
                {id: 4, message: 'oO'},
                {id: 5, message: 'Ho'},
                {id: 6, message: 'Ho'},
            ],
            dialogs_data: [
                {id: 1, name: 'Alex'},
                {id: 2, name: 'Lex'},
                {id: 3, name: 'Supermen'},
                {id: 4, name: 'Misha'},
                {id: 5, name: 'Vladimir'},
                {id: 6, name: 'Fiona'},
            ]
        },
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
        if (action.type === 'ADD-POST'){
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };

            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE-NEW-POST-TEXT'){
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }
    }
}



export const addPostActionCreator = () => {
    return{
        type: ADD_POST
    }

};

export const updateNewPostTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT, newText: text
    }
};

export default store;
window.store = store;