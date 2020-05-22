import React from "react";
import s from "./Navbar.module.css";
import {NavLink} from "react-router-dom";
//console.log(s)

const Navbar = () => {
    return <nav className={s.nav}>
        <div className={s.item}>
            <NavLink to="/profile" activeClassName={s.active}>Profile</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to="/Dialogs" activeClassName={s.active}>Messages</NavLink>
        </div>
        <div className={`${s.item} ${s.active}`}>
            <NavLink to="/News" activeClassName={s.active}>News</NavLink>
        </div>
        <div className={`${s.item} ${s.active}`}>
            <NavLink to="/users" activeClassName={s.active}>Users</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to="/Music" activeClassName={s.active}>Music</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to="/Settings" activeClassName={s.active}>Settings</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to="/Friends" activeClassName={s.active}>Friends</NavLink>
        </div>
    </nav>
}

export default Navbar;
