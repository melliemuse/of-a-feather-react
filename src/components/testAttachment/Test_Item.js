import React, { Component, useState } from 'react'
import './TestAttachment.css'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';


export default function TestItem(props) {
    const [value, setValue] = React.useState({});
    // debugger
    // const id = props.id
    const handleChange = (event) => {
        setValue(event.target.value)
        event.persist()
        let numvalue = event.target.value
        let value = props.values
        props.handleSelection(event, value, numvalue);
    };

    if (props.scoreType == "normal") {

    }
    else {

    }


    return (
        <>
                <div className="question">
                    <h6 className="question_title"> {props.id}. {props.high_avoidance_question || props.high_anxiety_question || props.low_avoidance_question || props.low_anxiety_question} </h6>
                <FormControl component="fieldset">
                <FormLabel component="legend">Choose Your Answer</FormLabel>
                <RadioGroup aria-label="attachment" name={String(props.id)} value={value} onChange={handleChange} id={props.id}>
                    <FormControlLabel value={String(props.scores[6])} control={<Radio />} label="Strongly Disagree" />
                    <FormControlLabel value={String(props.scores[5])} control={<Radio />} label="Disagree" />
                    <FormControlLabel value={String(props.scores[4])} control={<Radio />} label="Somewhat Disagree" />
                    <FormControlLabel value={String(props.scores[3])} control={<Radio />} label="Neutral" />
                    <FormControlLabel value={String(props.scores[2])} control={<Radio />} label="Somewhat Agree" />
                    <FormControlLabel value={String(props.scores[1])} control={<Radio />} label="Agree" />
                    <FormControlLabel value={String(props.scores[0])} control={<Radio />} label="Strongly Agree" />
                </RadioGroup>
                </FormControl>
                </div>
        </>
    )
}

