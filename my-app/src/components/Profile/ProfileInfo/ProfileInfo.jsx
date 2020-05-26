import React from "react";
import s from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";

const ProfileInfo = (props) => {
    debugger
    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div>
            <div>
                <img
                    src="http://img5.arrivo.ru/eccb/34/38694/0/Seychelles-La-Digue-Beach-Petite-Anse(flickr.com-Robin_S_Photography).jpg"
                    alt=""/>
            </div>
            <div className={s.description_block}>
                <img src={props.profile.photos.large} />
                ava+description
            </div>

        </div>
    )

};

export default ProfileInfo;
