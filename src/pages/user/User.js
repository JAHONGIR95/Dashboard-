import { CalendarToday, LocationSearching, MailOutline, PermIdentity, PhoneAndroid, Publish } from '@material-ui/icons'
import React from 'react'
import './user.scss'
import UserSingleInfo from './UserSingleInfo.js'
import { Link } from 'react-router-dom'

function User() {
    return (
        <div className="user">
            <div className="user-header-container">
                <h1 className="header-title">Edit User</h1>
                <Link to="/newUser">
                    <button className="create-button">Create</button>
                </Link>
            </div>
            <div className="user-container">
                <div className="user-show">
                    <div className="user-show-top">
                        <img src="https://celebsupdate.com/wp-content/uploads/2020/01/Fan-Bingbing-Top-Most-Beautiful-Models.jpg" alt="" className="user-show-img" />
                        <div className="user-show-info">
                            <span className="user-show-name">Anna Deo</span>
                            <span className="user-show-position">Software Engineer</span>
                        </div>
                    </div>
                    <div className="user-show-bottom">
                        <span className="bottom-title">Account Details</span>
                        <UserSingleInfo icon={<PermIdentity className="bottom-icon" />} infoTitle="annabeck99" />
                        <UserSingleInfo icon={<CalendarToday className="bottom-icon" />} infoTitle="11.12.1999" />
                        <span className="bottom-title">Contact Details</span>
                        <UserSingleInfo icon={<PhoneAndroid className="bottom-icon" />} infoTitle="+998997133032" />
                        <UserSingleInfo icon={<MailOutline className="bottom-icon" />} infoTitle="annabeck99@gmail.com" />
                        <UserSingleInfo icon={<LocationSearching className="bottom-icon" />} infoTitle="New York | USA" />
                    </div>
                </div>
                <div className="user-update">
                    <span className="user-update-title">Edit</span>
                    <form className="update-form">
                        <div className="update-left">
                            <div className="update-item">
                                <label>Username</label>
                                <input type="text" placeholder="annabeck99" className="user-update-input" />
                            </div>
                            <div className="update-item">
                                <label>Full name</label>
                                <input type="text" placeholder="Anna Deo" className="user-update-input" />
                            </div>
                            <div className="update-item">
                                <label>Email</label>
                                <input type="text" placeholder="annabeck99@gmail.com" className="user-update-input" />
                            </div>
                            <div className="update-item">
                                <label>Phone</label>
                                <input type="text" placeholder="+998997133032" className="user-update-input" />
                            </div>
                            <div className="update-item">
                                <label>Address</label>
                                <input type="text" placeholder="New Your | USA" className="user-update-input" />
                            </div>
                        </div>
                        <div className="upload-right">
                            <div className="update-upload">
                                <img src="https://celebsupdate.com/wp-content/uploads/2020/01/Fan-Bingbing-Top-Most-Beautiful-Models.jpg" alt="" className="user-img-upload" />
                                <label htmlFor="file"><Publish /></label>
                                <input type="file" id="file" style={{display: "none"}}/>
                            </div>
                            <button className="user-upload-button">Upload</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default User
