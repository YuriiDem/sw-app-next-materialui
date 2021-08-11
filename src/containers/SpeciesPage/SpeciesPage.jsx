import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { getApiResources } from '@utils/network';

import { API_SPECIES } from '@constants/api';
import { getSpeciesId, getSpeciesImg, getPageId } from '@services/getPeopleData';
import PeopleList from '@components/PeoplePage/PeopleList';
import PeopleNav from '@components/PeoplePage/PeopleNav';
import { withErrorApi } from '@hoc-helpers/withErrorApi';
import { useQueryParams } from '@hooks/useQueryParams';
import { API_SPECIES_SEARCH } from '@constants/api';
import SearchBar from '@components/SearchBar';
import CircularProgress from '@material-ui/core/CircularProgress';
import Box from '@material-ui/core/Box';


function SpeciesPage({ setApiError }) {
  const [loading, setLoading] = useState(true);
  const [species, setSpecies] = useState(null);

  const [prev, setPrev] = useState(null);
  const [next, setNext] = useState(null);

  const [counterPage, setCounterPage] = useState(1);

  const query = useQueryParams();
  const queryPage = query.get('page');


  async function getResources(url) {
    const res = await getApiResources(url);

    if (res) {
      const speciesList = res.results.map(({ name, url }) => {
        const id = getSpeciesId(url);
        const img = getSpeciesImg(id);

        return {
          id,
          name,
          img
        }
      });

      setSpecies(speciesList);
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
    getResources(API_SPECIES + queryPage);
  }, []);

  return (
    <>
      <h2>Species</h2>
      <PeopleNav
        resource={'species'}
        getResources={getResources}
        prev={prev}
        next={next}
        counterPage={counterPage}
      />

      <SearchBar url={API_SPECIES_SEARCH} getId={getSpeciesId} getImg={getSpeciesImg} link={'species'} />

      {loading ? (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <CircularProgress color="inherit" />
        </Box>
      ) : species && (
        <PeopleList data={species} link={'species'} />
      )}
    </>
  );
}

SpeciesPage.propTypes = {
  setApiError: PropTypes.func,
  getId: PropTypes.func,
  getImg: PropTypes.func,
  data: PropTypes.array,
  resource: PropTypes.string,
  url: PropTypes.string,
  link: PropTypes.string,
}

export default withErrorApi(SpeciesPage);