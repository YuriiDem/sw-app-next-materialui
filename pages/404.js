import Pic from '../public/404.png';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from "@material-ui/core/Container";
import Image from 'next/image';

const useStyles = makeStyles((theme) => ({
    img: {

        padding: theme.spacing(4),
     
    },
}));

function NotFound() {
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

                    <Image
                        className={classes.img}
                        src={Pic}
                        alt="404"
                    />

                </Grid>

            </Grid>


        </>
    );
}


export default NotFound;