import React, { Component } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { logout, isAuthenticated } from '../helpers/simpleAuth'
import './Nav.css'


export default function Nav(){

    const history = useHistory()

    const handleLogout = () => {
        logout()
        history.push('/')
    }

   
        return(
            <>
            <ul className="nav">
                <Link to='/'><li>Home</li></Link>
                <Link to='/mymatches'><li>My Matches</li></Link>
                <Link to='/userprofile'><li>My Profile</li></Link>
                {isAuthenticated ? 
                <Link to='/' onClick={handleLogout} ><li>Logout</li></Link>
                :
                <>
                <Link to='/login'><li>Login</li></Link>
                <Link to='/register'><li>Register</li></Link>
                </>}
            </ul>
            </>
        )
    }

