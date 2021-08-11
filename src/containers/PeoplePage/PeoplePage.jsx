import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { getApiResources } from '@utils/network';
import { API_PEOPLE } from '@constants/api';
import { API_PERSON_SEARCH } from '@constants/api';
import { getPeopleId, getPeopleImg, getPageId } from '@services/getPeopleData';
import PeopleList from '@components/PeoplePage/PeopleList';
import PeopleNav from '@components/PeoplePage/PeopleNav';
import SearchBar from '@components/SearchBar';
import { withErrorApi } from '@hoc-helpers/withErrorApi';
import { useQueryParams } from '@hooks/useQueryParams';
import CircularProgress from '@material-ui/core/CircularProgress';
import Box from '@material-ui/core/Box';


function PeoplePage({ setApiError }) {
  const [loading, setLoading] = useState(true);
  const [people, setPeople] = useState(null);

  // prev && next page 
  const [prev, setPrev] = useState(null);
  const [next, setNext] = useState(null);

  const [counterPage, setCounterPage] = useState(1);

  const query = useQueryParams();
  const queryPage = query.get('page');



  async function getResources(url) {
    const res = await getApiResources(url);

    if (res) {
      const peopleList = res.results.map(({ name, url }) => {
        const id = getPeopleId(url);
        const img = getPeopleImg(id);

        return {
          id,
          name,
          img
        }
      });

      setPeople(peopleList);
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
    getResources(API_PEOPLE + queryPage);
  }, []);

  return (
    <>
      <h2>Characters</h2>
      <PeopleNav
        resource={'people'}
        getResources={getResources}
        prev={prev}
        next={next}
        counterPage={counterPage}
      />

      <SearchBar url={API_PERSON_SEARCH} getId={getPeopleId} getImg={getPeopleImg} link={'people'} />

      {loading ? (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <CircularProgress color="inherit" />
        </Box>
      ) : people && (
        <PeopleList data={people} link={'people'} />
      )}




      {/* {people && (
        <PeopleList data={people} link={'people'} />
      )} */}
    </>
  );
}

PeoplePage.propTypes = {
  setApiError: PropTypes.func,
  getId: PropTypes.func,
  getImg: PropTypes.func,
  data: PropTypes.array,
  resource: PropTypes.string,
  url: PropTypes.string,
  link: PropTypes.string,
}

export default withErrorApi(PeoplePage);



