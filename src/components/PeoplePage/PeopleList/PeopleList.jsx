import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import CardMedia from '@material-ui/core/CardMedia';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Container from "@material-ui/core/Container";
import { Link } from 'react-router-dom';


const useStyles = makeStyles({
  card: {
   borderRadius: 18,
  }
 });

function PeopleList({ data, link }) {
  const classes = useStyles();

  return (
    <Grid container spacing={4} >
      {data.map(({ id, name, img }) =>
        <Grid item key={id} xs={12} sm={6} md={4} >
          <Link to={`/${link}/${id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
            <Card elevation={5} classes={{ root: classes.card }} >
              <CardMedia
                height="260"
                component="img"
                src={img}
                title={name}
              />
              <CardContent>
                <Typography variant="h6"><strong>{name}</strong></Typography>
              </CardContent>
            </Card>
          </Link>
        </Grid>
      )}
    </Grid>
  );
}

PeopleList.propTypes = {
  data: PropTypes.array,
  link: PropTypes.string,
}

export default PeopleList;

