
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import CardMedia from '@material-ui/core/CardMedia';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Container from "@material-ui/core/Container";
import { Link } from 'react-router-dom';
import Characters from './img/characters.jpg';
import Species from './img/species.jpg';
import Planets from './img/planets.png';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  card: {
    borderRadius: 18,
  },
  background: {
    height: '200%',
  },
});

function HomePage() {
  const classes = useStyles();
  return (
    <>
        <h2>Сategories</h2>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={4}>
            <Link to="/people/?page=1" style={{ textDecoration: 'none', color: 'inherit' }}>
              <Card elevation={5} classes={{ root: classes.card }}>
                <CardMedia
                  height="340"
                  component="img"
                  src={Characters}
                  title="Characters"
                />
                <CardContent>
                  <Typography variant="h6"><strong>Characters</strong></Typography>
                </CardContent>
              </Card>
            </Link>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Link to="/planets/?page=1" style={{ textDecoration: 'none', color: 'inherit' }}>
              <Card elevation={5} classes={{ root: classes.card }}>
                <CardMedia
                  height="340"
                  component="img"
                  src={Planets}
                  title="Planets"
                />
                <CardContent>
                  <Typography variant="h6"><strong>Planets</strong></Typography>
                </CardContent>
              </Card>
            </Link>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Link to="/species/?page=1" style={{ textDecoration: 'none', color: 'inherit' }}>
              <Card elevation={5} classes={{ root: classes.card }}>
                <CardMedia
                  height="340"
                  component="img"
                  src={Species}
                  title="Species"
                />
                <CardContent>
                  <Typography variant="h6"><strong>Species</strong></Typography>
                </CardContent>
              </Card>
            </Link>
          </Grid>
        </Grid>
    </>
  );
}


export default HomePage;