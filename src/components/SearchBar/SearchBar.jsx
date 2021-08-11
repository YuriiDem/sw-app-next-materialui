import PropTypes from 'prop-types';
import { alpha, makeStyles } from '@material-ui/core/styles';
import { useState, useEffect, useRef } from 'react';
import { getApiResources } from '@utils/network';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import { withErrorApi } from '@hoc-helpers/withErrorApi';
import SearchInfo from '@components/SearchInfo';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    search: {
        margin: theme.spacing(1),
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        margin: '10px',
        marginBottom: '30px',
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '50ch',
            '&:focus': {
                width: '50ch',
            },
        },
    },
}));


function SearchBar({ url, getId, getImg, link, setApiError }) {
    const classes = useStyles();

    const [display, setDisplay] = useState(false);
    const [inputSearchValue, setInputSearchValue] = useState('');
    const [data, setData] = useState([]);
    const wrapperRef = useRef(null);


    const getResponse = async params => {
        const res = await getApiResources(url + params);

        if (res) {
            const dataList = res.results.map(({ name, url }) => {
                const id = getId(url);
                const img = getImg(id);

                return {
                    id,
                    name,
                    img
                }
            });

            setData(dataList);
            setApiError(false);
        } else {
            setApiError(true);
        }
    }

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleClickOutside = event => {
        const { current: wrap } = wrapperRef;
        if (wrap && !wrap.contains(event.target)) {
            setDisplay(false);
        }
    }



    const handleInputChange = (event) => {
        const value = event.target.value

        setInputSearchValue(value);
        getResponse(value);
    }

    return (
        <>

            <div className={classes.search} ref={wrapperRef}>
                <div className={classes.searchIcon}>
                    <SearchIcon />
                </div>
                <InputBase
                    placeholder="Search…"
                    classes={{
                        root: classes.inputRoot,
                        input: classes.inputInput,
                    }}
                    inputProps={{ 'aria-label': 'search' }}

                    value={inputSearchValue}
                    onChange={handleInputChange}
                    onClick={() => setDisplay(!display)}
                    tabIndex="0"
                />

                {display && (
                    <SearchInfo data={data} link={link} />
                )}
            </div>
        </>
    );
}

SearchBar.propTypes = {
    setApiError: PropTypes.func,
    getId: PropTypes.func,
    getImg: PropTypes.func,
    data: PropTypes.array,
    url: PropTypes.string,
    link: PropTypes.string,
}

export default withErrorApi(SearchBar);