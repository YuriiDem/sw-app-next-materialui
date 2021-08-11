import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
  img: {
      width: '100%',
      height: '100%',
  },
});

function SpeciesImage({ speciesImage, speciesName }) {
  const classes = useStyles();

  return (
    <>
      <div>
        <img className={classes.img} src={speciesImage} alt={speciesName} />
      </div>
    </>
  );
}

SpeciesImage.propTypes = {
  speciesImage: PropTypes.string,
  speciesName: PropTypes.string,
}

export default SpeciesImage;