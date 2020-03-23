import React, { Component } from 'react'
import APIManager from '../helpers/APIManager'
import MessageEach from './MessageEach'
import NewMessage from './NewMessage'

export default class MessageHistorySingleUser extends Component {
    state = {
        messages: []
    }

    componentDidMount = () => {
        APIManager.getAll(`messages?match_id=${this.props.match.params.id}`)
        .then(response => this.setState({messages: response}))
    }

    postMessage = (message) => {
        APIManager.createNew('messages', message)
            .then(() => APIManager.getAll(`messages?match_id=${this.props.match.params.id}`)
        .then(response => this.setState({messages: response})))
    }

    deleteMessage = (id) => {
        APIManager.delete('messages', id)
        .then(() => APIManager.getAll(`messages?match_id=${this.props.match.params.id}`)
        .then(response => this.setState({messages: response})))
    }

    editMessage = (message, id) => {
        APIManager.patch2('messages', message, id)
        .then(() => APIManager.getAll(`messages?match_id=${this.props.match.params.id}`)
        .then(response => {
            console.log(response)
            this.setState({messages: response})
        }))
    }

    render() {
        console.log(this.state.messages)
        return (
            <>
            
            {this.state.messages.map(message => {
                return <MessageEach message={message} key={message.id} editMessage={this.editMessage} deleteMessage={this.deleteMessage} {...this.props}/>
            })}
            <NewMessage message={this.state.message} postMessage={this.postMessage} {...this.props}/>
            </>
        )
    }
}