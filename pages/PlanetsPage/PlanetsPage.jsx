import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { getStaticProps } from '../../utils/network';
import { API_PLANETS } from '../../constants/api';
import { API_PLANET_SEARCH } from '../../constants/api';
import { getPlanetsId, getPlanetsImg, getPageId } from '../../services/getPeopleData';
import PeopleList from '../../components/PeoplePage/PeopleList';
import PeopleNav from '../../components/PeoplePage/PeopleNav';
import { withErrorApi } from '../../hoc-helpers/withErrorApi';
import { useQueryParams } from '../../hooks/useQueryParams';
import SearchBar from '../../components/SearchBar';
import CircularProgress from '@material-ui/core/CircularProgress';
import Box from '@material-ui/core/Box';
import { useRouter } from 'next/router';


function PlanetsPage({ setApiError }) {
  const [loading, setLoading] = useState(true);
  const [planets, setPlanets] = useState(null);

  // prev && next page 
  const [prev, setPrev] = useState(null);
  const [next, setNext] = useState(null);

  const [counterPage, setCounterPage] = useState(1);

  const router = useRouter();
  const queryPage = router.query.page;

  async function getResources(url) {
    const res = await getStaticProps(url);

    if (res.props.data.results) {
      const planetsList = res.props.data.results.map(({ name, url }) => {
        const id = getPlanetsId(url);
        const img = getPlanetsImg(id);

        return {
          id,
          name,
          img
        }
      });

      setPlanets(planetsList);
      setLoading(false);

      setPrev(res.props.data.previous);
      setNext(res.props.data.next);
      setCounterPage(getPageId(url));
      setApiError(false);
    } else {
      setApiError(true);
    }
  }

  useEffect(() => {
    getResources(API_PLANETS + queryPage);
  }, []);


  return (
    <>
      <h2>Planets</h2>
      <PeopleNav
        resource={'PlanetsPage'}
        getResources={getResources}
        prev={prev}
        next={next}
        counterPage={counterPage}
      />

      <SearchBar url={API_PLANET_SEARCH} getId={getPlanetsId} getImg={getPlanetsImg} link={'PlanetPage'} />

      {loading ? (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <CircularProgress color="inherit" />
        </Box>
      ) : planets && (
        <PeopleList data={planets} link={'PlanetPage'} />
      )}

    </>
  );
}

PlanetsPage.propTypes = {
  setApiError: PropTypes.func,
  getId: PropTypes.func,
  getImg: PropTypes.func,
  data: PropTypes.array,
  resource: PropTypes.string,
  url: PropTypes.string,
  link: PropTypes.string,

}

export default withErrorApi(PlanetsPage);