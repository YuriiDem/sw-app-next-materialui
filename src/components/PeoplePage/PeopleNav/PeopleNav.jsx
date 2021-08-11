import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    button: {
        margin: '10px',
    },
  }));

function PeopleNav({ getResources, prev, next, counterPage, resource }) {
    const classes = useStyles();

    const handleChangePrev = () => getResources(prev);
    const handleChangeNext = () => getResources(next);

  return (
    <div className={classes.root}>
        <Link to={`/${resource}/?page=${counterPage-1}`} style={ {textDecoration: 'none', color: 'inherit'} }>
        <Button className={classes.button} onClick={handleChangePrev}   disabled={!prev}>Previous</Button>
        </Link>

        <Link to={`/${resource}/?page=${counterPage+1}`} style={ {textDecoration: 'none', color: 'inherit'} }>
        <Button className={classes.button} onClick={handleChangeNext}  disabled={!next}>Next</Button>
        </Link>

    </div>
  );
}
 
PeopleNav.propTypes = {
    getResources: PropTypes.func,
    prev: PropTypes.string,
    next: PropTypes.string,
    resource: PropTypes.string,
    counterPage: PropTypes.number,
}
 
export default PeopleNav;