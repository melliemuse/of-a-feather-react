import React, { Component } from 'react'
import APIManager from '../helpers/APIManager'

export default class NewMessage extends Component {
    state = {
        message_body: ''
    }

    handleFieldChange = () => {

    }

    handleSubmit = (event) => {
        event.preventDefault()

        if (this.state.message_body) {
            let message = {
                message_body: this.state.message_body,
                match_id: this.props.match.params.match_id
            }
            console.log(message)
            // APIManager.createNew('messages?match_id=', message)
            // .then(() => this.props.history.push(`messages/${match_id}`))
        }

    }

    render() {
        return (
            <>
            <form>
                <label htmlFor="message_body">Say something nice</label>
                <input id="message_body" onChange={this.handleFieldChange}>Message</input>
            </form>
            <button onClick={this.handleSubmit}></button>
            </>
        )
    }
}