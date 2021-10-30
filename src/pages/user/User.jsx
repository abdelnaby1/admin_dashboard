import "./user.css"
import avatar from '../../assets/3bnby.jpg'
import { CalendarToday, LocationSearching, MailOutline, PermIdentity, PhoneAndroid, Publish } from "@material-ui/icons"
import { Link } from "react-router-dom"

export default function User() {
    return (
        <div className="user">
            <div className="userTitleContainer">
                <h1 className="userTitle">Edit User</h1>
                <Link to="/newUser">
                <button className="userAddButton">Create</button>
 
                </Link>

            </div>
            <div className="userContainer">
                <div className="userShow">
                    <div className="userShowTop">
                        <img src={avatar} alt="" className="userShowImg" />
                        <div className="userShowTopTitle">
                            <span className="userShowUsername">Ahmed Abdelnaby</span>
                            <span className="userShowUserTitle">Software Engineer</span>
                        </div>
                    </div>
                    <div className="userShowBottom">
                        <span className="userShowTitle">Account Details</span>
                       <div className="userShowInfo">
                        <PermIdentity className="userShowIcon"/>
                        <span className="userShowInfoTitle">abdelnaby47</span>
                       </div>
                       <div className="userShowInfo">
                        <CalendarToday className="userShowIcon"/>
                        <span className="userShowInfoTitle">26.08.1998</span>
                       </div>
                       <span className="userShowTitle">Contact Details</span>

                       <div className="userShowInfo">
                        <PhoneAndroid className="userShowIcon"/>
                        <span className="userShowInfoTitle">+2 01150893242</span>
                       </div>
                       <div className="userShowInfo">
                        <MailOutline className="userShowIcon"/>
                        <span className="userShowInfoTitle">abdelnaby47@gmail.com</span>
                       </div>
                       <div className="userShowInfo">
                        <LocationSearching className="userShowIcon"/>
                        <span className="userShowInfoTitle">Egypr | Cairo</span>
                       </div>

                    </div>
                </div>
                <div className="userUpdate">
                <span className="userUpdateTitle">Edit</span>
                <form className="userUpdateForm">
                    <div className="userUpdateLfet">
                        <div className="userUpdateItem">
                            <label>Username</label>
                            <input type="text" placeholder="abdelnaby47" className="userUpdateInput" />
                        </div>
                        <div className="userUpdateItem">
                            <label>Full Name</label>
                            <input type="text" placeholder="Ahmed Abdelnaby" className="userUpdateInput" />
                        </div>
                        <div className="userUpdateItem">
                            <label>Email</label>
                            <input type="text" placeholder="abdelnaby47@gmail.com" className="userUpdateInput" />
                        </div>
                        <div className="userUpdateItem">
                            <label>Phone</label>
                            <input type="text" placeholder="+2 01150893242" className="userUpdateInput" />
                        </div>
                        <div className="userUpdateItem">
                            <label>Address</label>
                            <input type="text" placeholder="Egypt | Cairo" className="userUpdateInput" />
                        </div>
                    </div>
                    <div className="userUpdateRight">
                        <div className="userUpdateUplaod">
                            <img src={avatar} alt="" className="userUpdateImg" />
                            <label htmlFor="file"><Publish className="userUpdateIcon" /></label>
                            <input type="file" id="file" style={{display:"none"}} />
                        </div>
                        <button className="userUpdateButton">Update</button>

                    </div>
                </form>
                </div>
            </div>
        </div>
    )
}
