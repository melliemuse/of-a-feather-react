import React, { Component } from 'react'
import './TestAttachment.css'
import TestItem from './Test_Item'
import APIManager from '../helpers/APIManager'
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import Paper from '@material-ui/core/Paper';

export default class TestAttachment extends Component {
    state = {
        dater: [],
        avoidant: [],
        anxious: [],
        anxiousCalc: {},
        avoidantCalc: {},
        questions: {
            high_anxiety_questions: ["I'm afraid that I will lose my partner's love.", "I often worry that my partner will not want to stay with me.", "I often worry that my partner doesn't really love me.", "I worry that romantic partners won’t care about me as much as I care about them.", "I often wish that my partner's feelings for me were as strong as my feelings for him or her.", "I worry a lot about my relationships.", "When my partner is out of sight, I worry that he or she might become interested in someone else.", "When I show my feelings for romantic partners, I'm afraid they will not feel the same about me.", "My romantic partner makes me doubt myself.", "I find that my partner(s) don't want to get as close as I would like.", "Sometimes romantic partners change their feelings about me for no apparent reason.", "My desire to be very close sometimes scares people away.", "I'm afraid that once a romantic partner gets to know me, he or she won't like who I really am.", "It makes me mad that I don't get the affection and support I need from my partner.", "I worry that I won't measure up to other people.", "My partner only seems to notice me when I’m angry."],
            high_avoidance_questions: ["I prefer not to show a partner how I feel deep down.", "I find it difficult to allow myself to depend on romantic partners.", "I don't feel comfortable opening up to romantic partners.", "I prefer not to be too close to romantic partners.", "I get uncomfortable when a romantic partner wants to be very close.", "I am nervous when partners get too close to me."],
            low_anxiety_questions: ["I rarely worry about my partner leaving me.", "I do not often worry about being abandoned."
            ],
            low_avoidance_questions: ["I feel comfortable sharing my private thoughts and feelings with my partner.", "I am very comfortable being close to romantic partners.", "I find it relatively easy to get close to my partner.", "It's not difficult for me to get close to my partner.", "I usually discuss my problems and concerns with my partner.", " It helps to turn to my romantic partner in times of need.", "I tell my partner just about everything.", "I talk things over with my partner.", "I feel comfortable depending on romantic partners.", "I find it easy to depend on romantic partners.", "It's easy for me to be affectionate with my partner.", "My partner really understands me and my needs."],
        },
        values: ["anxiousValue", "avoidantValue"],
        scores: [7, 6, 5, 4, 3, 2, 1],
        scores_reversed: [1, 2, 3, 4, 5, 6, 7],
        responses: ["Strongly Agree", "Agree", "Somewhat Agree", "Neutral", "Somewhat Disagree", "Disagree"]
    }

    componentDidMount = () => {
        APIManager.getAll('daters')
            .then(response => this.setState({ 'dater': response[0] }))
    }

    handleSelection = (event, value, numvalue) => {

        let anxiousCalc = {}
        let avoidantCalc = {}
        let avoidantscore = null
        let anxiousscore = null
        let score = numvalue;
        let values = value.split('-')[0]
        //  If question carries an avoidant value, check to see if question has already been answered
        //  If it has, reassign value in calculation object

        if (values === 'avoidantValue' && !this.state.avoidantCalc[event.currentTarget.name]) {
            avoidantCalc[event.currentTarget.name] = parseInt(score)
            const combo = Object.assign(this.state.avoidantCalc, avoidantCalc)
            this.setState({
                avoidantCalc: combo
            })
            Object.values(avoidantCalc).forEach((score) =>
                avoidantscore = + score
            )
            if (this.state.avoidant !== null) {
                let newScore = parseInt(avoidantscore) + this.state.avoidant
                this.setState({ avoidant: parseInt(newScore) })
            }
            else {
                this.setState({ avoidant: avoidantscore })
            }

        }
        if (values === 'anxiousValue' && !this.state.anxiousCalc[event.currentTarget.name]) {
            anxiousCalc[event.currentTarget.name] = parseInt(score)
            const combo = Object.assign(this.state.anxiousCalc, anxiousCalc)
            this.setState({
                anxiousCalc: combo
            })
            Object.values(anxiousCalc).forEach((score) =>
                anxiousscore = + score
            )
            if (this.state.anxious !== null) {
                let newScore = parseInt((anxiousscore) + this.state.anxious)
                this.setState({ anxious: newScore })
            }
            else {
                this.setState({ anxious: anxiousscore })
            }
        }
    }


    handleSubmit = () => {
        console.log("handle submit fired")

        const secure_id = 1
        const anxious_id = 2
        const avoidant_id = 3
        const threshold = 63
        const anxious_score = this.state.anxious
        const avoidant_score = this.state.avoidant
        let dater_attachment_id = null

        if (anxious_score < threshold && avoidant_score < threshold) {
            dater_attachment_id = secure_id
        } else if (anxious_score > avoidant_score && anxious_score > threshold) {
            dater_attachment_id = anxious_id
        } else if (avoidant_score > anxious_score && avoidant_score > threshold) {
            dater_attachment_id = avoidant_id
        }


        let updater = this.state.dater
        console.log(this.state.dater)
        updater.attachment_style_id = dater_attachment_id
        updater.username = this.state.dater.user.username
        updater.first_name = this.state.dater.user.first_name
        updater.last_name = this.state.dater.user.last_name
        updater.email = this.state.dater.user.email
        updater.password = this.state.dater.user.password
        console.log(updater)
        console.log(updater.id)

        APIManager.update("daters", updater)
            .then(this.props.history.push("/"))

    }

    render() {
        return (
            <main >
                <div className="main top-margin">
                    <h1 className="attachmentTitle">What is My Attachment Style?</h1>
                    <h5 className="subtitle">Based on your <em>most common</em> relationships</h5>
                </div>

                <div className="center flex-center">


                    <form >
                        <Card>

                            <Paper elevation={4} style={{padding: '5px', 'margin': '10px'}}>
                                {this.state.questions.high_anxiety_questions.map((high_anxiety_question, i) => {
                                    return <TestItem
                                        key={i}
                                        id={i + 1}
                                        scoreType={"normal"}
                                        scores={this.state.scores}
                                        values={this.state.values[0] + "-" + i + 1}
                                        high_anxiety_question={high_anxiety_question}
                                        handleSelection={this.handleSelection}
                                        {...this.props}
                                    />
                                })}
                                {/* {this.state.questions.high_anxiety_questions.map((high_anxiety_question, i) => {
                        return <TestItem
                            key={i}
                            id={i + 1}
                            scores={this.state.scores}
                            values={this.state.values[0]}
                            high_anxiety_question={high_anxiety_question}
                            handleSelection={this.handleSelection}
                        />
                    })} */}
                                {this.state.questions.high_avoidance_questions.map((high_avoidance_question, i) => {
                                    return <TestItem
                                        key={i}
                                        id={this.state.questions.high_anxiety_questions.length + i + 1}
                                        scores={this.state.scores}
                                        values={this.state.values[1] + "-" + this.state.questions.high_anxiety_questions.length + i + 1}
                                        high_avoidance_question={high_avoidance_question}
                                        handleSelection={this.handleSelection}
                                    />
                                })}
                                {this.state.questions.low_avoidance_questions.map((low_avoidance_question, i) => {
                                    return <TestItem
                                        key={i}
                                        id={this.state.questions.high_anxiety_questions.length + this.state.questions.high_avoidance_questions.length + i + 1}
                                        scores={this.state.scores_reversed}
                                        values={this.state.values[1] + "-" + this.state.questions.high_anxiety_questions.length + this.state.questions.high_avoidance_questions.length + i + 1}
                                        low_avoidance_question={low_avoidance_question}
                                        handleSelection={this.handleSelection}
                                    />
                                })}
                                {this.state.questions.low_anxiety_questions.map((low_anxiety_question, i) => {
                                    return <TestItem
                                        key={i}
                                        id={this.state.questions.high_anxiety_questions.length + this.state.questions.high_avoidance_questions.length + this.state.questions.low_avoidance_questions.length + i + 1}
                                        scores={this.state.scores_reversed}
                                        values={this.state.values[0] + "-" + i + 1}
                                        low_anxiety_question={low_anxiety_question}
                                        handleSelection={this.handleSelection}
                                    />
                                })}
                            </Paper>
                        </Card>
                    </form>
                </div>
                <div className="center">
                    <Button
                        onClick={() => this.handleSubmit()}
                        variant="contained"
                        color="secondary"
                    >See Your Results</Button>
                </div>
            </main>
        )
    }

}