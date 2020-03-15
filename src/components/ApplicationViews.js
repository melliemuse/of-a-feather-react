import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Home from './home/Home'



export default class ApplicationViews extends Component {
    render() {
        return (
    <>
    <Route exact path="/" render={props => {  
        // if (this.props.isAuthenticated()) {
            return <Home />
        // } else {
        //     return <Redirect to="/login" />
        // }
    }}/>
    </>
        )
    }
}