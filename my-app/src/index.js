import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

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

let posts = [
    {id: 1, message: 'Hi, how are you?', likesCount: 23},
    {id: 2, message: 'it\`s my first post', likesCount: 12},

]

ReactDOM.render(<App posts={posts} messages_data={messages_data} dialogs_data={dialogs_data}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
