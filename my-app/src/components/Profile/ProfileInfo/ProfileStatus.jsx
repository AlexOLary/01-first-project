import React from "react";
import s from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";

class ProfileStatus extends React.Component {
    render() {
        /*if (!props.profile) {
            return <Preloader/>
        }*/
        return (
            <div>
                <div>
                    <span>{this.props.status}</span>
                </div>
                <div>
                    <input value={this.props.status}/>
                </div>

            </div>
        )
    }
};

export default ProfileStatus;
