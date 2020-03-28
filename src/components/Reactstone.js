import React, { Component } from 'react'
import Nav from './nav/Nav'
import ApplicationViews from './ApplicationViews'
import { logout, isAuthenticated } from './helpers/simpleAuth'
import './Reactstone.css'

export default class Reactstone extends Component{

    
  

    render() {
        return (
            <>
            <Nav></Nav>
            <ApplicationViews></ApplicationViews>
            </>
        )
    }
}


