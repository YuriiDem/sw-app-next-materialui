import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';



function Copyright() {

  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'© '}
      <Link color="inherit" href="https://github.com/YuriiDem">
        Сreated with love by Yurii Demchuk
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}


export default Copyright;

