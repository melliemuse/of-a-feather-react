import React, { Component } from 'react'
import APIManager from '../helpers/APIManager'

export default class NewMessage extends Component {
    state = {
        message_body: ''
    }

    handleFieldChange = (event) => {
        event.preventDefault()
        this.setState({message_body: event.target.value})
    }

    handleSubmit = () => {
        console.log(this.props.match.params.id)
        if (this.state.message_body) {
            let message = {
                message_body: this.state.message_body,
                match_id: parseInt(this.props.match.params.id)
            }
            console.log(message)
            this.props.postMessage(message)
        }
    }
    

    clearField = (event) => {

    }

    render() {
        return (
            <>
            <form>
                <textarea id="message_body" placeholder="Type your message" autoFocus onChange={this.handleFieldChange}/>
            </form>
            <button onClick={this.handleSubmit}>Send message</button>
            </>
        )
    }
}