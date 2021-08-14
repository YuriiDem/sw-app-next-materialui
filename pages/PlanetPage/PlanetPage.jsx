import { useState, useEffect } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { getStaticProps } from '../../utils/network';
import { API_PLANET } from '../../constants/api';
import { withErrorApi } from '../../hoc-helpers/withErrorApi';
import { data } from 'browserslist';
import { getPlanetsImg } from '../../services/getPeopleData';
import PlanetImage from '../../components/PlanetsPage/PlanetImage';
import PlanetInfo from '../../components/PlanetsPage/PlanetInfo';
import GoBackLink from '../../components/GoBackLink';

import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { useRouter } from 'next/router';

const useStyles = makeStyles({
    card: {
        borderRadius: 18,
    }
});

function PlanetPage({ setApiError }) {
    const router = useRouter();
    const classes = useStyles();
    const [planetInfo, setPlanetInfo] = useState(null);
    const [planetName, setPlanetName] = useState(null);
    const [planetImage, setPlanetImage] = useState(null);

    useEffect(() => {
        (async () => {
            const id = router.query.id;
            const res = await getStaticProps(`${API_PLANET}/${id}/`);

            if (res) {
                setPlanetInfo([
                    { title: 'Climate', data: res.props.data.climate },
                    { title: 'Terrain', data: res.props.data.terrain },
                    { title: 'Rotation period', data: res.props.data.rotation_period },
                    { title: 'Orbital period', data: res.props.data.orbital_period },
                    { title: 'Diameter', data: res.props.data.diameter },
                    { title: 'Surface water', data: res.props.data.surface_water },
                    { title: 'Population', data: res.props.data.population },
                ]);


                setPlanetName(res.props.data.name);
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
            <GoBackLink page={'PlanetsPage'} />
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