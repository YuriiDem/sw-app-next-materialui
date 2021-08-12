import SadStormtrooper from './img/sadstormtrooper.png';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    img: {

        width: '100%',
        height: '100%',
        padding: theme.spacing(4),
    },
}));

function ErrorMessage() {
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
                    <h1 >Something went wrong. <br />
                        We cannot display data.
                    </h1>
                </Grid>
                <Grid item xs>
                    <img className={classes.img} src={SadStormtrooper} alt="Sad stormtrooper" />
                </Grid>

            </Grid>
        </>
    );
}

export default ErrorMessage;