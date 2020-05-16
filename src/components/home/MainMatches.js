import React, { Component, useState } from 'react'
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
      height: '885px',
      width: '380px',
      display: 'flex',
      justifyContent: 'center',
      alignContent: 'space-around'
    },
  }));

  const [myClassName, setMyClassName] = useState([])

  const classes = useStyles();

  const [checked, setChecked] = React.useState(true);

  const assignClass = ({ target }) => {
    let width = target.naturalWidth
    let height = target.naturalHeight
    console.log("WIDTH", width, "HEIGHT", height)
    width > height ?
      setMyClassName('img-wd')
      : setMyClassName('img-lg')
  }

  const handleChange = () => {
    setChecked(prev => !prev);
  };

  // debugger

  return (
    < >
      <div className={classes.root}>
        <FormControlLabel
          control={<Switch checked={checked} onChange={handleChange} />}
          label="Show"
        />
        <Collapse in={checked} collapsedHeight={545}>
          <Paper elevation={8} className={classes.paper}>
            <div style={{ 'margin': '20px' }}>
              <div id="profile_pic">
                <img
                  className={myClassName && myClassName}
                  src={props.match.profile_pic}
                  onLoad={assignClass}
                />
              </div>
              <div className="profile-info">
                <h3>{props.match.user.first_name}</h3>
                <p>{props.match.age}</p>
                {props.match.smoker && <p>Smoker</p>}
                {props.match.kids && <p>Has kids</p>}
                <h4>Lives in </h4>
                <p>{props.match.location}</p>
                <h4>Looking for</h4>
                <p> {props.match.looking_for}</p>
                <h4>Tagline</h4>

                <p className='tagline'>"{props.match.tagline}"</p>



                <IconButton onClick={() => props.handleMatch(props.match.id)} color="inherit">
                  <FavoriteIcon />
                </IconButton>


                <IconButton onClick={() => props.handlePass(props.match.id, props.iterator)}>
                  <BlockTwoToneIcon />
                </IconButton>
              </div>
            </div>
          </Paper>
        </Collapse>
      </div>
    </>
  )


}
