import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';


const useStyles = makeStyles({
  typography: {
    padding: '5px',
    marginBottom: '7px',
  },
  ul: {
    padding: '0',
  },
});



function SpeciesInfo({ speciesInfo }) {
  const classes = useStyles();

  return (
    <>
      <ul className={classes.ul} style={{ 'list-style-type': 'none' }}>
        {speciesInfo.map(({ title, data }) => (
          data && (
            <li className={classes.typography} key={title}>
              <span>{title}: {data}</span>
              <Divider />
            </li>
          )
        ))}
      </ul>
    </>
  );
}

SpeciesInfo.propTypes = {
  speciesInfo: PropTypes.array
}

export default SpeciesInfo;