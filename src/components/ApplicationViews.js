import React, { Component } from 'react'
import { isAuthenticated } from './helpers/simpleAuth'
import { Route, Redirect } from 'react-router-dom'
import Home from './home/Home'
import TestAttachment from './testAttachment/TestAttachment'
import Register from './auth/Register'
import MyMatchList from './MyMatches/MyMatchList'
import Login from './auth/Login'
import MessageHistorySingleUser from './Messaging/MessageHistorySingleUser'
import MessageHistoryEveryone from './Messaging/MessageHistoryEveryone'
import NewMessage from './Messaging/NewMessage'
import UserProfile from './user_profile/UserProfile'


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
    <Route exact path="/messages" render={props => {  
        if (isAuthenticated()) {
            return <MessageHistoryEveryone {...props}/>
        } else {
            return <Redirect to="/login" />
        }
    }}/>
    {/* path="/products/:productId(\d+)" */}
    <Route exact path="/messages/:id(\d+)" render={props => {  
        if (isAuthenticated()) {
            return <MessageHistorySingleUser {...props}/>
        } else {
            return <Redirect to="/login" />
        }
    }}/>
    <Route exact path="/newmessage/:match_id(\d+)" render={props => {  
        if (isAuthenticated()) {
            return <NewMessage {...props}/>
        } else {
            return <Redirect to="/login" />
        }
    }}/>
    <Route exact path="/userprofile/" render={props => {  
        if (isAuthenticated()) {
            return <UserProfile {...props}/>
        } else {
            return <Redirect to="/login" />
        }
    }}/>
    </>
        )
    }
}