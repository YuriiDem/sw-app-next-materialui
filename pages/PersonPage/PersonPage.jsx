import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { getStaticProps } from '../../utils/network';
import { API_PERSON } from '../../constants/api';
import { withErrorApi } from '../../hoc-helpers/withErrorApi';
import { getPeopleImg } from '../../services/getPeopleData';
import PersonImage from '../../components/PeoplePage/PersonImage';
import PersonInfo from '../../components/PeoplePage/PersonInfo';
import GoBackLink from '../../components/GoBackLink';

import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { useRouter } from 'next/router';


const useStyles = makeStyles({
  card: {
    borderRadius: 18,
  },
});

function PersonPage({ setApiError }) {
  const router = useRouter();
  const classes = useStyles();
  const [personInfo, setPersonInfo] = useState(null);
  const [personName, setPersonName] = useState(null);
  const [personImage, setPersonImage] = useState(null);


  useEffect(() => {
    (async () => {
      // const id = match.params.id;
      const id = router.query.id;
      const res = await getStaticProps(`${API_PERSON}/${id}/`);
      
      // console.log(res);

      if (res) {
        setPersonInfo([
          { title: 'Height', data: res.props.data.height },
          { title: 'Mass', data: res.props.data.mass },
          { title: 'Gender', data: res.props.data.gender },
          { title: 'Hair color', data: res.props.data.hair_color },
          { title: 'Eye color', data: res.props.data.eye_color },
          { title: 'Skin color', data: res.props.data.skin_color },
          { title: 'Birth year', data: res.props.data.birth_year },
        ]);

        setPersonName(res.props.data.name);
        setPersonImage(getPeopleImg(id));
        // res.films

        setApiError(false);
      } else {
        setApiError(true);
      }
    })();
  }, []);


  return (
    <>
      <GoBackLink page={'PeoplePage'} />
      <Box mt={10} mb={10}  >
        <Paper elevation={5} classes={{ root: classes.card }} >
          <Box component="div" display="flex" p={1} m={1} overflow="hidden" >
            <Grid container spacing={5} alignItems="center">
              <Grid item >
                <Box >
                  <PersonImage personImage={personImage} personName={personName} />
                </Box>
              </Grid>

              <Grid item >
                <Box >
                  <Typography variant="h4"><strong>{personName}</strong></Typography>
                  {personInfo && <PersonInfo personInfo={personInfo} />}
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Paper>
      </Box>


    </>
  );
}

PersonPage.propTypes = {
  setApiError: PropTypes.func,
  match: PropTypes.object,
}

export default withErrorApi(PersonPage);