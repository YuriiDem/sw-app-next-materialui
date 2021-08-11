import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
    img: {
        width: '100%',
        height: '100%',
    },
});

function PersonImage({ personImage, personName }) {
    const classes = useStyles();

    return (
        <>
            <div >
                <img className={classes.img} src={personImage} alt={personName} />
            </div>
        </>
    );
}

PersonImage.propTypes = {
    personImage: PropTypes.string,
    personName: PropTypes.string,
}

export default PersonImage;