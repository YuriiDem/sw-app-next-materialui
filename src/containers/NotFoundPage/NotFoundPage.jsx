import Pic from './img/404.jpg';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
  img: {

    padding: theme.spacing(4),
    width: '100%',
    height: '100%',
  },
}));

function NotFoundPage() {
  const classes = useStyles();

  return (
    <>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"

      >

        <Grid item xs>
          <h1>404 Not Found. <br />
            You lost your own way my son.
          </h1>
        </Grid>
        <Grid item xs>
       
            <img className={classes.img} src={Pic} alt="404" />

        </Grid>

      </Grid>


    </>
  );
}


export default NotFoundPage;