import SadStormtrooper from './img/sadstormtrooper.png';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Image from 'next/image';


const useStyles = makeStyles((theme) => ({
    img: {

        
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
                    
                    <Image
                    className={classes.img}
                    src={SadStormtrooper}
                    alt="Sad stormtrooper"
                    />
                </Grid>

            </Grid>
        </>
    );
}

export default ErrorMessage;