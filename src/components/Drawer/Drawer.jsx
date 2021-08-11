import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';
import { makeStyles } from '@material-ui/core/styles';
import Logo from './img/Logo.svg';
import Characters from './img/charasters.svg';
import Planets from './img/planets.svg';
import Species from './img/spacies.svg';
import Home from './img/Home.svg';
import Copyright from '@components/Copyright';
import HomeIcon from '@material-ui/icons/Home';
import PeopleIcon from '@material-ui/icons/People';
import LanguageIcon from '@material-ui/icons/Language';
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';


const useStyles = makeStyles((theme) => ({
    list: {
        width: 250,
    },
    text: {
        paddingLeft: theme.spacing(1),
    },
    LogoIcon: {
        width: '50px',
        height: '50px',
    },
    Icons: {
        width: '24px',
        height: '24px',
    },
    footer: {
        padding: theme.spacing(2),
    },
}));


function Drawer() {
    const classes = useStyles();
    const [open, setOpen] = useState(false);

    return (
        <>
            <IconButton
                edge="start"
                color="inherit"
                aria-label="open drawer"
                onClick={() => setOpen(true)}
            >
                <MenuIcon />
            </IconButton>

            <SwipeableDrawer
                anchor="left"
                open={open}
                onClose={() => setOpen(false)}
                onOpen={() => setOpen(true)}>
                <div className={classes.list}>
                    <Box textAlign="center" p={2}>
                        <Box >
                            {/* <img src={Logo} alt="AppLogo" className={classes.LogoIcon} /> */}
                            <Typography variant="h6" noWrap >
                                <strong>SW WIKI</strong>
                            </Typography>
                        </Box>
                    </Box>
                    <Divider />
                    <List>
                        <NavLink to="/" exact style={{ textDecoration: 'none', color: 'inherit' }}>
                            <ListItem button onClick={() => { }}>
                                {/* <img src={Home} alt="Home" className={classes.Icons} /> */}
                                <HomeIcon />
                                <ListItemText className={classes.text} primary={'Home'}> </ListItemText>
                            </ListItem>
                        </NavLink>

                        <NavLink to="/people/?page=1" style={{ textDecoration: 'none', color: 'inherit' }}>
                            <ListItem button onClick={() => { }}>
                                {/* <img src={Characters} alt="Characters" className={classes.Icons} /> */}
                                <PeopleIcon />
                                <ListItemText className={classes.text} primary={'Characters'}> </ListItemText>
                            </ListItem>
                        </NavLink>

                        <NavLink to="/planets/?page=1" style={{ textDecoration: 'none', color: 'inherit' }}>
                            <ListItem button onClick={() => { }}>
                                {/* <img src={Planets} alt="Planets" className={classes.Icons} /> */}
                                <LanguageIcon />
                                <ListItemText className={classes.text} primary={'Planets'}> </ListItemText>
                            </ListItem>
                        </NavLink>

                        <NavLink to="/species/?page=1" style={{ textDecoration: 'none', color: 'inherit' }}>
                            <ListItem button onClick={() => { }}>
                                {/* <img src={Species} alt="Species" className={classes.Icons} /> */}
                                <SentimentVerySatisfiedIcon />
                                <ListItemText className={classes.text} primary={'Species'}> </ListItemText>
                            </ListItem>
                        </NavLink>
                    </List>
                    <Divider />
                    <footer className={classes.footer}>
                        <Copyright />
                    </footer>
                </div>
            </SwipeableDrawer>
        </>
    );
}


export default Drawer;