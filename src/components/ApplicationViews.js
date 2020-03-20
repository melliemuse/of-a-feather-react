import React, { Component } from 'react'
import { isAuthenticated } from './helpers/simpleAuth'
import { Route, Redirect } from 'react-router-dom'
import Home from './home/Home'
import TestAttachment from './testAttachment/TestAttachment'
import Register from './auth/Register'
import MyMatchList from './MyMatches/MyMatchList'
import Login from './auth/Login'



export default class ApplicationViews extends Component {
    render() {
        return (
    <>
    <Route exact path="/" render={props => {  
        if (isAuthenticated()) {
            return <Home {...props}/>
        } else {
            return <Redirect to="/login" />
        }
    }}/>
    <Route path="/assessment/" render={props => {  
        if (isAuthenticated()) {
            return <TestAttachment {...props}/>
        } else {
            return <Redirect to="/login" />
        }
    }}/>
    <Route path="/register" render={props => {  
            return <Register {...props}/>
        }}/>
    <Route path="/login" render={props => {
               return <Login {...props} />
           }}/>
    <Route exact path="/mymatches" render={props => {  
        if (isAuthenticated()) {
            return <MyMatchList {...props}/>
        } else {
            return <Redirect to="/login" />
        }
    }}/>
    </>
        )
    }
}