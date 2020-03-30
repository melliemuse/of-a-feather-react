import React from 'react';
import { Link, useHistory } from 'react-router-dom'
import { logout, isAuthenticated } from '../helpers/simpleAuth'
import './Nav.css'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import Fab from '@material-ui/core/Fab';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Avatar from '@material-ui/core/Avatar';
import HomeTwoToneIcon from '@material-ui/icons/HomeTwoTone';
import AddIcon from '@material-ui/icons/Add';
import GradeTwoToneIcon from '@material-ui/icons/GradeTwoTone';
import AccountCircleTwoToneIcon from '@material-ui/icons/AccountCircleTwoTone';
import AssignmentTwoToneIcon from '@material-ui/icons/AssignmentTwoTone';
import LaunchTwoToneIcon from '@material-ui/icons/LaunchTwoTone';
import InputTwoToneIcon from '@material-ui/icons/InputTwoTone'; 
import FavoriteIcon from '@material-ui/icons/Favorite';

export default function Nav() {


    const useStyles = makeStyles(theme => ({
        text: {
            padding: theme.spacing(2, 2, 2),
        },
        paper: {
            // paddingBottom: 50,
            paddingTop: 50,
        },
        list: {
            // marginBottom: theme.spacing(2),
        },
        subheader: {
            backgroundColor: theme.palette.background.paper,
        },
        appBar: {
            bottom: 'auto',
            top: 0,
        },
        grow: {
            flexGrow: 1,
        },
        fabButton: {
            position: 'absolute',
            zIndex: 1,
            top: 3,
            left: 0,
            right: 0,
            margin: '0 auto'
        },
    }));


    const classes = useStyles();

    const history = useHistory()

    const handleLogout = () => {
        logout()
        history.push('/')
    }

    return (
        <>
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>

                    <Link to="/">
                        <IconButton edge="start" color="inherit" aria-label="open drawer">
                            <HomeTwoToneIcon />
                        </IconButton>
                    </Link>

                    <Link to='/mymatches'>
                    {/* <Fab color="secondary" aria-label="add" className={classes.fabButton}>
                        <FavoriteIcon />
                        <AddIcon />
                    </Fab> */}
                    </Link>

                    <div className={classes.grow} />

                    <Link to='/mymatches'>
                        <IconButton color="inherit">
                            <GradeTwoToneIcon />
                        </IconButton>
                    </Link>

                    <Link to='/userprofile'>
                        <IconButton edge="end" color="inherit">
                            <AccountCircleTwoToneIcon />
                        </IconButton>
                    </Link>


                    {isAuthenticated() ?
                        <Link to='/' onClick={handleLogout} >
                        <IconButton edge="end" color="inherit">
                            <InputTwoToneIcon />
                        </IconButton>
                    </Link>
                        :
                        <>
                            <Link to='/register'>
                                <IconButton edge="end" color="inherit">
                                    <AssignmentTwoToneIcon />
                                </IconButton>
                            </Link>


                            <Link to='/login'>
                                <IconButton edge="end" color="inherit">
                                    <LaunchTwoToneIcon />
                                </IconButton>
                            </Link>

                        </>}
                </Toolbar>
            </AppBar>


        </>
    )


}

