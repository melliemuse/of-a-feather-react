import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Home from './home/Home'
import TestAttachment from './testAttachment/TestAttachment'
import Register from './auth/Register'



export default class ApplicationViews extends Component {
    render() {
        return (
    <>
    <Route exact path="/" render={props => {  
        // if (this.props.isAuthenticated()) {
            return <Home {...props}/>
        // } else {
        //     return <Redirect to="/login" />
        // }
    }}/>
    <Route path="/assessment/" render={props => {  
        // if (this.props.isAuthenticated()) {
            return <TestAttachment {...props}/>
        // } else {
        //     return <Redirect to="/login" />
        // }
    }}/>
    <Route path="/register" render={props => {  
        // if (this.props.isAuthenticated()) {
            return <Register {...props}/>
        // } else {
        //     return <Redirect to="/login" />
        // }
    }}/>
    </>
        )
    }
}