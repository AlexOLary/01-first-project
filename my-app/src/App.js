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
import {addPost} from "./redux/store";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

const App = (props) => {
    return (

        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Route path='/Dialogs'
                       render={() => <DialogsContainer store = {props.store} />}/>

                <Route path='/Profile'
                       render={() => <Profile store = {props.store}/>}/>

                <Route path='/News' render={() => <News/>}/>
                {/*<Route path='/Music' render={ () => <Music/>}/>
                    <Route path='/Settings' render={ () => <Settings/>}/>
                    <Route path='/Friends' render={ () => <Friends props.state.friendLogo/>}/>*/}
            </div>
        </div>
    );
}

export default App;



