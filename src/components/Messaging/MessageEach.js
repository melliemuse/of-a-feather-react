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
        maxWidth: 445,
        display: 'flex',
        '& > *': {
            margin: theme.spacing(.5),
        },
        media: {
            height: 140,
        },
    },
}));



export default function MessageEach(props) {
    let display = ''
    let path = props.message.match
    if (path.dater.url) {
        if (props.message.logged_in_user_id === parseInt(path.dater.url.split('/')[path.dater.url.split('/').length - 1])) {
            display = path.dater
        }
        else {
            display = path.matched_with
        }
    console.log(display.user.first_name)
    console.log(display.profile_pic)
    }

    const classes = useStyles();
    const [showText, setShowText] = useState(false);


    return (
        <>
            <div className={classes.root}>

                <Card className={classes.root} className="message">
                    <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            image={display.profile_pic}
                            title="sender"
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
                      
        {!showText && <Button size="medium" color="primary" onClick={() => setShowText(!showText)}>Edit</Button>}
                           

                    {showText && <Button size="medium" color="primary" onClick={() => setShowText(!showText)}>Cancel</Button>}
                            
       
                    {showText && <EditMessage {...props} />}
                    <Button size="medium" color="primary" onClick={() => props.deleteMessage(props.message.id)}>Delete</Button>
                    </CardActions>



                    {/* <div> */}
                    

                    {/* </div> */}
                </Card>
            </div>
        </>
    )
}
