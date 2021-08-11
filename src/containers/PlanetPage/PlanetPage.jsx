import { useState, useEffect } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { getApiResources } from '@utils/network';
import { API_PLANET } from '@constants/api';
import { withErrorApi } from '@hoc-helpers/withErrorApi';
import { data } from 'browserslist';
import { getPlanetsImg } from '@services/getPeopleData';
import PlanetImage from '@components/PlanetsPage/PlanetImage';
import PlanetInfo from '@components/PlanetsPage/PlanetInfo';
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

function PlanetPage({ match, setApiError }) {
  const classes = useStyles();
  const [planetInfo, setPlanetInfo] = useState(null);
  const [planetName, setPlanetName] = useState(null);
  const [planetImage, setPlanetImage] = useState(null);

  useEffect(() => {
    (async () => {
      const id = match.params.id;
      const res = await getApiResources(`${API_PLANET}/${id}/`);

      if (res) {
        setPlanetInfo([
          { title: 'Climate', data: res.climate },
          { title: 'Terrain', data: res.terrain },
          { title: 'Rotation period', data: res.rotation_period },
          { title: 'Orbital period', data: res.orbital_period },
          { title: 'Diameter', data: res.diameter },
          { title: 'Surface water', data: res.surface_water },
          { title: 'Population', data: res.population },
        ]);

        
        setPlanetName(res.name);
        setPlanetImage(getPlanetsImg(id));
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
                  <PlanetImage planetImage={planetImage} planetName={planetName} />
                </Box>
              </Grid>

              <Grid item >
                <Box >
                  <Typography variant="h4"><strong>{planetName}</strong></Typography>
                  {planetInfo && <PlanetInfo planetInfo={planetInfo} />}
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Paper>
      </Box>
    </>
  );
}

PlanetPage.propTypes = {
  setApiError: PropTypes.func,
  match: PropTypes.object,
}

export default withErrorApi(PlanetPage);