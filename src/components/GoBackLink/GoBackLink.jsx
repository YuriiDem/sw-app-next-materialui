import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import IconButton from '@material-ui/core/IconButton';


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

function GoBackLink() {
  const classes = useStyles();
  const history = useHistory();

  function handleGoBack(e) {
    e.preventDefault();
    history.goBack();
  }

  return (
    <>
      <IconButton
        className={classes.root}
        color="inherit"
        aria-label="go back"
        onClick={handleGoBack}
      >
        <ArrowBackIosIcon />
      </IconButton>
    </>
  );
}



export default GoBackLink;