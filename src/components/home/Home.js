import React, { Component } from 'react'
import './Home.css'

export default class Home extends Component {
    state = {
        test: 'test'
    }

    componentDidMount() {

    }

    render() {
        return (
            <div className="center">
            <h1>Matches</h1>
            </div>
        )
    }

}