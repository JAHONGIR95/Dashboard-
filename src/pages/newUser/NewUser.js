import React from 'react'
import './newUser.scss'

function NewUser() {
    return (
        <div className="new-user">
            <h1 className="new-user-title">New User</h1>
                <form className="new-user-form">
                    <div className="form-item">
                        <label htmlFor="username">Username</label>
                        <input type="text" placeholder="john" id="username" />
                    </div>
                    <div className="form-item">
                        <label htmlFor="full_name">Full Name</label>
                        <input type="text" placeholder="John Smith" id="full_name" />
                    </div>
                    <div className="form-item">
                        <label htmlFor="email">Email</label>
                        <input type="email" placeholder="john@gmail.com" id="email" />
                    </div>
                    <div className="form-item">
                        <label htmlFor="password">Password</label>
                        <input type="password" placeholder="Password" id="password" />
                    </div>
                    <div className="form-item">
                        <label htmlFor="phone">Phone</label>
                        <input type="text" placeholder="+998997133032" id="phone" />
                    </div>
                    <div className="form-item">
                        <label htmlFor="address">Address</label>
                        <input type="text" placeholder="New Your | USA" id="address" />
                    </div>
                    <div className="form-item">
                        <label>Gender</label>
                        <div className="new-user-gender">
                            <input type="radio" name="gender" id="male" />
                            <label htmlFor="male">Male</label>
                            <input type="radio" name="gender" id="female" />
                            <label htmlFor="female">Female</label>
                            <input type="radio" name="gender" id="other" />
                            <label htmlFor="other">Other</label>
                        </div>
                    </div>
                    <div className="form-item">
                        <label>Active</label>
                        <select name="active" id="active" className="active-select">
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </div>
                    <button type="submit" className="new-user-button">Create</button>
                </form>
        </div>
    )
}

export default NewUser
