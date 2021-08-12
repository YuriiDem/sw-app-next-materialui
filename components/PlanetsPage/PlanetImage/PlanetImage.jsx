import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
  img: {
      width: '100%',
      height: '100%',
  },
});

function PlanetImage({ planetImage, planetName }) {
  const classes = useStyles();

  return (
    <>
      <div>
        <img className={classes.img} src={planetImage} alt={planetName} />
      </div>
    </>
  );
}

PlanetImage.propTypes = {
  planetImage: PropTypes.string,
  planetName: PropTypes.string,
}

export default PlanetImage;