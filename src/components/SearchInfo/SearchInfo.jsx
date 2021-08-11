import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import { Link } from 'react-router-dom';
import ListItem from '@material-ui/core/ListItem';

const useStyles = makeStyles({

    search: {
        display: 'block',
        position: 'absolute',
        top: '100%',
        // bottom: '10%',
        zIndex: '100',
    },
    typography: {
        padding: '2px',
        marginBottom: '7px',
    },
    ul: {
        padding: '0',
        margin: '25px',
        
    },
    card: {
        borderRadius: 18,
    }
});

function SearchInfo({ data, link }) {
    const classes = useStyles();

    return (
        <>
            {data.length
                ? (
                    <Box className={classes.search}>
                        <Paper elevation={5} classes={{ root: classes.card }} >
                            <Box component="div" display="flex" m={3} >
                                <ul className={classes.ul} style={{ 'list-style-type': 'none' }}>
                                    {data.map(({ id, name }) =>
                                        <Link to={`/${link}/${id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                                            <li key={id} className={classes.typography}>
                                                <span>{name}</span>
                                                <Divider />
                                            </li>
                                        </Link>
                                    )}
                                </ul>
                            </Box>
                        </Paper>
                    </Box>
                )
                :
                <Box className={classes.search}>
                    <Paper elevation={2} classes={{ root: classes.card }} >
                        <Box component="div" display="flex" m={3} >
                            <span className={classes.ul}>No results</span>
                        </Box>
                    </Paper>
                </Box>

            }
        </>
    );
}

SearchInfo.propTypes = {
    data: PropTypes.array,
    link: PropTypes.string,
  }

export default SearchInfo;