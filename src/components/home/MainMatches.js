import React, { Component } from 'react'
import FavoriteIcon from '@material-ui/icons/Favorite';
import BlockTwoToneIcon from '@material-ui/icons/BlockTwoTone';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';
import Paper from '@material-ui/core/Paper';
import Collapse from '@material-ui/core/Collapse';
import FormControlLabel from '@material-ui/core/FormControlLabel';

export default function MainMatches(props) {
  const useStyles = makeStyles(theme => ({
    // root: {
    //   height: 1000,
    //   display: 'flex',
    //   alignItems: 'center',
    //   justifyContent: 'center',
    // },
    // container: {
    //   display: 'flex',
    //   padding: '30px',
    //   margin: '0 0 40px',
      
    // },
    // paper: {
    //   margin: theme.spacing(1),
    //   marginTop: "25px",
    //   width: '500px',
    //   // height: '1100px',
    //   padding: '10px 10px 10px 0',
    //   display: 'flex',
    //   justifyContent: 'center',
    //   alignItems: 'flex-start',
    //   flexDirection: 'column',
    //   flexWrap: 'wrap'
    // },
    // content: {
    //   margin: ' 0 auto',
    //   width: '500px',
    //   padding: '0 40px 0'
    // }
    root: {
      height: 1000,
    },
    container: {
      display: 'flex',
      padding: '30px',
      margin: '0 0 40px'
    },
    paper: {
      margin: theme.spacing(3),
    },
  }));

  const classes = useStyles();
  
  const [checked, setChecked] = React.useState(false);
      
  const handleChange = () => {
    setChecked(prev => !prev);
  };


  return (
    < >
      <div className={classes.root}>
      <FormControlLabel
        control={<Switch checked={checked} onChange={handleChange} />}
        label="Full Profile"
      />
      <Collapse in={checked} collapsedHeight={655}>
      <Paper elevation={8} className={classes.paper}>
        {/* <div className={classes.content} > */}
        <div style={{padding: "50px"}}>
        <img id="profile_pic" src={props.match.profile_pic}></img>
        <h3>{props.match.user.first_name}</h3>
        <p>{props.match.age}</p>
        {props.match.smoker && <p>Smoker</p>}
        {props.match.kids && <p>Has kids</p>}
        <h4>Lives in </h4>
        <p>{props.match.location}</p>
        <h4>Looking for</h4>
        <p> {props.match.looking_for}</p>
        <h4>Tagline</h4>
        <div style={{"maxWidth": "280px"}}>
          <p style={{ "lineHeight": 1.25, 'textAlign': 'left'}}>"{props.match.tagline}"</p>
        </div>


        <IconButton onClick={() => props.handleMatch(props.match.id)} color="inherit">
          <FavoriteIcon />
        </IconButton>


        <IconButton onClick={() => props.handlePass(props.match.id, props.iterator)}>
          <BlockTwoToneIcon />
        </IconButton>
        </div>
        {/* </div> */}
        {/* </div> */}
      </Paper>
      </Collapse>
      </div>
     </>
  )


}
