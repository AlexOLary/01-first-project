import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import Dialogs from "./components/Dialogs/Dialogs";
import Music from "./components/Music/Music";
import Friends from "./components/Friends/Friends";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/Dialogs'
                           render={ () => <Dialogs state = {props.state.dialogsPage}/> }/>
                    <Route path='/Profile'
                           render={ () => <Profile state={props.state.profilePage}/>}/>
                    <Route path='/News' render={ () => <News/> }/>
                    <Route path='/Music' render={ () => <Music/>}/>
                    <Route path='/Settings' render={ () => <Settings/>}/>
                    <Route path='/Friends' render={ () => <Friends props.state.friendLogo/>}/>
                </div>
            </div>
        </BrowserRouter>);
}

export default App;



