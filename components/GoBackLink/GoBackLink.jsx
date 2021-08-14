// import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import IconButton from '@material-ui/core/IconButton';
import { useRouter } from 'next/router';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

function GoBackLink({ page }) {
  const classes = useStyles();
  // const history = useHistory();
  const router = useRouter();




  function handleGoBack(e) {
    e.preventDefault();
    router.push(`/${page}/?page=1`);
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