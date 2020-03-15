import React, { Component } from 'react'
import Nav from './nav/Nav'
import ApplicationViews from './ApplicationViews'

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


