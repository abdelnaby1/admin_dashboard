import "./newUser.css"
function NewUser() {
    return (
        <div className="newUser">
            <h1 className="newUserTitle">New User</h1>
            <form  className="newUserForm">
                <div className="newUserItem">
                    <label>Username</label>
                    <input type="text" placeholder="abdelnay" />
                </div>
                <div className="newUserItem">
                    <label>Username</label>
                    <input type="text" placeholder="abdelnay" />
                </div>
                <div className="newUserItem">
                    <label>Full Name</label>
                    <input type="text" placeholder="ahmed abdelnay" />
                </div>
                <div className="newUserItem">
                    <label>Password</label>
                    <input type="password" placeholder="password" />
                </div>
                <div className="newUserItem">
                    <label>Phone</label>
                    <input type="text" placeholder="+201150893242" />
                </div>
                <div className="newUserItem">
                    <label>Address</label>
                    <input type="text" placeholder="Egpyt | Cairo" />
                </div>
                <div className="newUserItem">
                    <label>Gender</label>
                    <div className="newUserGender">
                        <input type="radio" name="gender" value="male" />
                        <label for="male">Male</label>
                        <input type="radio" name="gender" value="female" />
                        <label for="female">Female</label>
                        <input type="radio" name="gender" value="other" />
                        <label for="other">Other</label>
                    </div>

                </div>
                <div className="newUserItem">
                    <label>Active</label>
                    <select className="newUserSelect" name="active" id="active">
                        <option value="yse">Yes</option>
                        <option value="no">No</option>

                    </select>
                </div>
                <button className="newUserButton">Create</button>
            </form>
        </div>
    )
}

export default NewUser
