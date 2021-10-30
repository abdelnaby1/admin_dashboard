import { NotificationsNone,Language,Settings } from "@material-ui/icons"
import "./topbar.css"

import avatar from '../../assets/3bnby.jpg'
export default function Topbar() {
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topLeft">
                    <span className="logo">
                        3bnbyadmin
                    </span>
                </div>
                <div className="topRight">
                    <div className="topbarIconContainer">
                        <NotificationsNone />
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <Language />
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <Settings />
                    </div>
                    <img src={avatar} alt="" className="topAvatar" />
                </div>
            </div>
        </div>
    )
}
