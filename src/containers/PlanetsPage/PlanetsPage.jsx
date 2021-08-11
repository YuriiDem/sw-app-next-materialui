import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { getApiResources } from '@utils/network';
import { API_PLANETS } from '@constants/api';
import { API_PLANET_SEARCH } from '@constants/api';
import { getPlanetsId, getPlanetsImg, getPageId } from '@services/getPeopleData';
import PeopleList from '@components/PeoplePage/PeopleList';
import PeopleNav from '@components/PeoplePage/PeopleNav';
import { withErrorApi } from '@hoc-helpers/withErrorApi';
import { useQueryParams } from '@hooks/useQueryParams';
import SearchBar from '@components/SearchBar';
import CircularProgress from '@material-ui/core/CircularProgress';
import Box from '@material-ui/core/Box';



function PlanetsPage({ setApiError }) {
  const [loading, setLoading] = useState(true);
  const [planets, setPlanets] = useState(null);

  // prev && next page 
  const [prev, setPrev] = useState(null);
  const [next, setNext] = useState(null);

  const [counterPage, setCounterPage] = useState(1);

  const query = useQueryParams();
  const queryPage = query.get('page');

  async function getResources(url) {
    const res = await getApiResources(url);

    if (res) {
      const planetsList = res.results.map(({ name, url }) => {
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

      setPrev(res.previous);
      setNext(res.next);
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
        resource={'planets'}
        getResources={getResources}
        prev={prev}
        next={next}
        counterPage={counterPage}
      />

      <SearchBar url={API_PLANET_SEARCH} getId={getPlanetsId} getImg={getPlanetsImg} link={'planets'} />

      {loading ? (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <CircularProgress color="inherit" />
        </Box>
      ) : planets && (
        <PeopleList data={planets} link={'planets'} />
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