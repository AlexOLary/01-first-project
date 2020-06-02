import React from 'react';
import s from "./Header.module.css";
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return <header className={s.header}>
        <img
            src="https://avatars.mds.yandex.net/get-pdb/1016956/99c3cd00-d211-4de4-9c4e-1fdd59487041/s1200?webp=false"
            alt=""/>

            <div className={s.loginBlock}>
                { props.isAuth ? props.login
                : <NavLink to={'/login'}>Login</NavLink>}

            </div>
    </header>
}

export default Header;