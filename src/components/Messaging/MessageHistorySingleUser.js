import React, { Component } from 'react'
import APIManager from '../helpers/APIManager'
import MessageEach from './MessageEach'

export default class MessageHistorySingleUser extends Component {
    state = {
        messages: []
    }

    componentDidMount = () => {
        APIManager.getAll(`messages?match_id=${this.props.match.params.id}`)
        .then(response => this.setState({messages: response}))
    }

    render() {
        return (
            <>
            
            {this.state.messages.map(message => {
                return <MessageEach message={message} key={message.id}/>
            })}
            </>
        )
    }
}