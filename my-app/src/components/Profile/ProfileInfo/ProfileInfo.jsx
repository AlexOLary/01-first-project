import React from "react";
import s from "./ProfileInfo.module.css";


const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img
                    src="http://img5.arrivo.ru/eccb/34/38694/0/Seychelles-La-Digue-Beach-Petite-Anse(flickr.com-Robin_S_Photography).jpg"
                    alt=""/>
            </div>
            <div className={s.description_block}>
                ava+description
            </div>

        </div>
    )

}

export default ProfileInfo;
