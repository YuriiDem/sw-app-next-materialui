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

function PlanetInfo({ planetInfo }) {
  const classes = useStyles();


  return (
    <>
      <ul className={classes.ul} style={{ 'list-style-type': 'none' }}>
        {planetInfo.map(({ title, data }) => (
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

PlanetInfo.propTypes = {
  planetInfo: PropTypes.array
}

export default PlanetInfo;