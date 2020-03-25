import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Reactstone from './components/Reactstone'
import { BrowserRouter as Router } from 'react-router-dom'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
const theme = createMuiTheme({
    palette: {
        // type: 'dark',
        // common: {
        //     black: "#000", white: "#fff"
        // },
        // secondary: {
        //     light: "rgba(108, 89, 244, 1)",
        //     main: "rgba(163, 59, 255, 1)",
        //     dark: "rgba(84, 29, 133, 1)",
        //     contrastText: "rgba(255,255,255, 1)"
        // },
        // primary: {
        //     light: "rgba(89, 244, 230, 1)",
        //     main: "rgb(22, 174, 235)",
        //     dark: "rgba(14, 119, 161, 1)",
        //     contrastText: "rgba(255, 255, 255, 1)"
        // },
        // error: {
        //     light: "#e57373",
        //     main: "rgba(235, 28, 33, 1)",
        //     dark: "#d32f2f",
        //     contrastText: "#fff"
        // },
        // text: {
        //     primary: "rgba(0, 0, 0, 0.87)",
        //     secondary: "rgba(0, 0, 0, 0.54)",
        //     disabled: "rgba(0, 0, 0, 0.38)",
        //     hint: "rgba(0, 0, 0, 0.38)"
        // },
        background: {paper: 'rgba(255, 255, 255 , 1)'}
    },
});



ReactDOM.render(
    <MuiThemeProvider theme = { theme }>
    <Router>
<Reactstone />
    </Router>
    </MuiThemeProvider>, 

document.getElementById('root'));

