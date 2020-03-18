import React, { Component } from 'react'
import './Home.css'
import APIManager from '../helpers/APIManager'

export default class Home extends Component {
    state = {
        attachment_style: null,
        filter_id: 0,
        matches: {}
    }

    componentDidMount() {
        APIManager.getAll("daters")
        .then(response => {
            const attachment_style = response[0].attachment_style_id
            if (attachment_style !== 1) {
                this.setState({filter_id: 1})
            } 
            else {
                this.setState({filter_id: `1&2&3`})
            }
            this.setState({attachment_style: attachment_style})
        })
        .then(() => {
            if (this.state.filter_id !== null) {
                APIManager.getAll(`daters?attachment_style_id=${this.state.filter_id}`)
                .then(response => this.setState({matches: response}))
            }
        })
    }

    render() {
        return (
            <div className="center">
            <h1>Matches</h1>
            </div>
        )
    }

}