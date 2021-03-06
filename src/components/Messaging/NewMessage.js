import React, { Component } from 'react'
import APIManager from '../helpers/APIManager'
import TextField from '@material-ui/core/TextField';



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
            this.clearField()
            this.props.postMessage(message)
        }
    }
    

    clearField = (event) => {
        this.setState({message_body: ''})
    }

    render() {
        return (
            <>
            <form style={{'margin': '30px 0 30px'}}>
            <TextField
          style={{width: '400px'}}
          id="message_body"
          label="New Message"
          multiline
          rows="4"
          variant="filled"
          color="primary"
          value={this.state.message_body}
        //   placeholder="Type your message"
          autoFocus
          onChange={this.handleFieldChange} 
        //   variant="outlined"
          
        />
          </form>
            <button onClick={this.handleSubmit}>Send message</button>
            </>
        )
    }
}