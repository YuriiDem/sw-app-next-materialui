import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import { useState } from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { alpha, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import Drawer from '@components/Drawer';
import Logo from './img/Logo.svg';
import Box from '@material-ui/core/Box';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginBottom: '10px',
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        display: 'flex',
        alignItems: 'center',
    },
    LogoIcon: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: '40px',
        height: '40px',
    },
    brightness4Icon: {
        marginLeft: theme.spacing(2),
    },
}));


function Header({ theme, setTheme }) {
    const classes = useStyles();
    const icon = !theme ? <Brightness7Icon /> : <Brightness4Icon />;


    return (
        <div className={classes.root}>
            <AppBar color="white" position="fixed" elevation={0}>
                <Toolbar>
                    <Drawer className={classes.menuButton} />

                    <Box className={classes.title}>
                        {/* <img src={Logo} alt="AppLogo" className={classes.LogoIcon} /> */}
                        <Typography variant="h6" noWrap >
                            <strong>SW WIKI</strong>
                        </Typography>
                    </Box>


                    <IconButton
                        edge="end"
                        color="inherit"
                        aria-label="Theme"
                        onClick={() => setTheme(!theme)}

                    >
                        {icon}
                    </IconButton>
                </Toolbar>
            </AppBar>
        </div>
    );
}


export default Header;