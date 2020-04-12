import React from 'react'
import {useHistory, setState} from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';
import Paper from '@material-ui/core/Paper';
import Collapse from '@material-ui/core/Collapse';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const useStyles = makeStyles(theme => ({
  root: {
    // height: 1000,
  },
  container: {
    display: 'flex',
    padding: '0 30px 30px',
    margin: '0 0 40px'
  },
  paper: {
    margin: theme.spacing(3),
    'width': '445px',
    'height': '1000px'
  },
}));
    
    
    
    export default function MyMatchItem(props) {
        const classes = useStyles();
        const [checked, setChecked] = React.useState(true);
      
        const handleChange = () => {
          setChecked(prev => !prev);
        };

    const history = useHistory()

    const handleClick = () => {
      history.push(`/messages/${props.match_id}`)
      if (props.viewMessage) {
        props.viewMessage()
      }
    }

    return (
        <div className={classes.root}>
      {/* <FormControlLabel
        control={<Switch checked={checked} onChange={handleChange} />}
        label="Show"
      /> */}
      <div className={classes.container}>
        
        {/* <Collapse in={checked} collapsedHeight={600}> */}
          <Paper elevation={4} className={classes.paper}>
              <div style={{padding: "50px"}}>
          <img id="profile_pic" src={props.match.profile_pic} alt='avatar'></img>
                <h3>{props.match.user.first_name}</h3>
                <button onClick={handleClick}>View Messages</button>
                <button onClick={() => props.handleUnmatch(props.i)}>Unmatch</button>
                <p>{props.match.age}</p>
                <p>{props.match.location}</p>
                <div style={{"maxWidth": "280px"}}>
                <p style={{"lineHeight": 1.25}}>"{props.match.tagline}"</p>
                </div>
                {props.match.smoker && <p>Smoker</p>}
                {props.match.kids && <p>Has kids</p>}
                <h4>Looking for</h4>
                <p> {props.match.looking_for}</p>
                <h4>Interests include </h4>
                <p>{props.match.interests}</p>
                <h4>Bio</h4>
                <p style={{"lineHeight": 1.25}}>{props.match.bio}</p>
              </div>
            
                

          </Paper>
        {/* </Collapse> */}
      </div>
    </div>
            // <div className="main flex">
                
            // </div>
        // </div>
    )
}


