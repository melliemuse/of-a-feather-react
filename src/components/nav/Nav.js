import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'

export default class Nav extends Component {

    render() {
        return(
            <>
            <ul className="nav">
                <Link to='/'><li>Home</li></Link>
                <Link to='/mymatches'><li>My Matches</li></Link>
                <Link to='/'><li>Messages</li></Link>
                <Link to='/'><li>My Profile</li></Link>
                <Link to='/'><li>Register</li></Link>
                <Link to='/'><li>Login</li></Link>
                <Link to='/'><li>Logout</li></Link>
            </ul>
            </>
        )
    }
}