import { useState, useEffect } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { getApiResources } from '@utils/network';
import { API_SPECIES_INFO } from '@constants/api';
import { withErrorApi } from '@hoc-helpers/withErrorApi';
import { getSpeciesImg } from '@services/getPeopleData';
import SpeciesImage from '@components/SpeciesPage/SpeciesImage';
import SpeciesInfo from '@components/SpeciesPage/SpeciesInfo';
import GoBackLink from '@components/GoBackLink';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
  card: {
   borderRadius: 18,
  }
 });

function SpeciesInfoPage({ match, setApiError }) {
  const classes = useStyles();
  const [speciesInfo, setSpeciesInfo] = useState(null);
  const [speciesName, setSpeciesName] = useState(null);
  const [speciesImage, setSpeciesImage] = useState(null);

  useEffect(() => {
    (async () => {
      const id = match.params.id;
      const res = await getApiResources(`${API_SPECIES_INFO}/${id}/`);

      if (res) {
        setSpeciesInfo([
          { title: 'Classification', data: res.classification },
          { title: 'Designation', data: res.designation },
          { title: 'Average height', data: res.average_height },
          { title: 'Skin colors', data: res.skin_colors },
          { title: 'Hair Colors', data: res.hair_colors },
          { title: 'Eye colors', data: res.eye_colors },
          { title: 'Average lifespan', data: res.average_lifespan },
          { title: 'Language', data: res.language },
        ]);

        setSpeciesName(res.name);
        setSpeciesImage(getSpeciesImg(id));
        // res.films

        setApiError(false);
      } else {
        setApiError(true);
      }
    })();
  }, []);



  return (
    <>
    <GoBackLink />
      <Box mt={5} >
        <Paper elevation={5} classes={{ root: classes.card }} >
          <Box component="div" display="flex" p={1} m={1} overflow="hidden" >
            <Grid container spacing={5} alignItems="center">
              <Grid item>
                <Box >
                  <SpeciesImage speciesImage={speciesImage} speciesName={speciesName} />
                </Box>
              </Grid>

              <Grid item >
                <Box >
                  <Typography variant="h4"><strong>{speciesName}</strong></Typography>
                  {speciesInfo && <SpeciesInfo speciesInfo={speciesInfo} />}
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Paper>
      </Box>
    </>
  );
}

SpeciesInfoPage.propTypes = {
  setApiError: PropTypes.func,
  match: PropTypes.object,
}

export default withErrorApi(SpeciesInfoPage);