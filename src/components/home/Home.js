import React, { Component } from 'react'
import './Home.css'
import APIManager from '../helpers/APIManager'

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