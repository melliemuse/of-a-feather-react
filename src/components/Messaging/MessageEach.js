import React from 'react'
import EditMessage from './EditMessage'
import { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import './Messaging.css'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
    root: {
        maxWidth: 700,
        display: 'flex',
        justifyContent: 'center',
        alignContent: "space-between",
        padding: '20px 40px 20px',
        width: '300px',
        height: '200px',
        margin: '20px',
        'border-radius': '10px',
        '& > *': {
            margin: theme.spacing(2)
        },
        media: {
            height: 140,
        },
    },
    active: {
        "background-color": "lightBlue",
        padding: '20px 40px 20px',
        width: '300px',
        height: ' 200px',
        margin: '20px',
        'border-radius': '10px',
    }
}));



export default function MessageEach(props) {
    let display = ''
    let pic = ''
    let displayActive = ''
    let activePath = props.currentUser
    let path = props.message.match
    if (path.dater.id) {
        if (props.message.logged_in_user_id === path.dater.id) {
            display = path.dater
        }
        else {
            display = path.matched_with
        }
        if (activePath[0]) {
            if (display.id === activePath[0].id) {
                displayActive = true
            }
            else {
                displayActive = false
            }
            console.log(displayActive)
        }
        pic = display.profile_pic
        console.log(display.user.first_name)
        console.log(display.profile_pic)
    }

    const classes = useStyles();
    const [showText, setShowText] = useState(false);


    return (
        <>
            <div className={classes.root} >

                <Card className={
                    displayActive ?
                        classes.active :
                        classes.root
                } >
                    <CardActionArea>
                        <CardMedia
                            image={pic}
                            title="sender"
                            style={classes.media}
                        />
                        <Avatar src={display.profile_pic} alt="avatar" id="avatar" />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                {display.user.first_name}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {!showText && props.message.message_body}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>

                        {!showText && displayActive && <Button size="medium" color="primary" onClick={() => setShowText(!showText)}>Edit</Button>}

                        {showText && <Button size="medium" color="primary" onClick={() => setShowText(!showText)}>Cancel</Button>}

                        {showText && <EditMessage {...props} />}

                        {displayActive && <Button size="medium" color="primary" onClick={() => props.deleteMessage(props.message.id)}>Delete</Button>}
                    </CardActions>



                    {/* <div> */}


                    {/* </div> */}
                </Card>
            </div>
        </>
    )
}
