import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { getStaticProps } from '../../utils/network';

import { API_SPECIES } from '../../constants/api';
import { getSpeciesId, getSpeciesImg, getPageId } from '../../services/getPeopleData';
import PeopleList from '../../components/PeoplePage/PeopleList';
import PeopleNav from '../../components/PeoplePage/PeopleNav';
import { withErrorApi } from '../../hoc-helpers/withErrorApi';
// import { useQueryParams } from '../../hooks/useQueryParams';
import { API_SPECIES_SEARCH } from '../../constants/api';
import SearchBar from '../../components/SearchBar';
import CircularProgress from '@material-ui/core/CircularProgress';
import Box from '@material-ui/core/Box';
import { useRouter } from 'next/router';

function SpeciesPage({ setApiError }) {
  const [loading, setLoading] = useState(true);
  const [species, setSpecies] = useState(null);

  const [prev, setPrev] = useState(null);
  const [next, setNext] = useState(null);

  const [counterPage, setCounterPage] = useState(1);

  const router = useRouter();
  const queryPage = router.query.page;


  async function getResources(url) {
    const res = await getStaticProps(url);

    if (res.props.data.results) {
      const speciesList = res.props.data.results.map(({ name, url }) => {
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

      setPrev(res.props.data.previous);
      setNext(res.props.data.next);
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
        resource={'SpeciesPage'}
        getResources={getResources}
        prev={prev}
        next={next}
        counterPage={counterPage}
      />

      <SearchBar url={API_SPECIES_SEARCH} getId={getSpeciesId} getImg={getSpeciesImg} link={'SpeciesInfoPage'} />

      {loading ? (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <CircularProgress color="inherit" />
        </Box>
      ) : species && (
        <PeopleList data={species} link={'SpeciesInfoPage'} />
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