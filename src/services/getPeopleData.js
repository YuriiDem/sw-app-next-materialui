import { 
    SWAPI_ROOT, SWAPI_PEOPLE, 
    SWAPI_PLANETS, SWAPI_SPECIES,
    URL_IMG_PLANETS, VGUIDE_IMG_EXTENSION, 
    URL_IMG_PERSON, URL_IMG_SPECIES,
    SWAPI_PARAMS_PAGE } from '@constants/api';


export function getPageId(url) {
    const position = url.lastIndexOf(SWAPI_PARAMS_PAGE);
    const id = url.slice(position+SWAPI_PARAMS_PAGE.length, url.length);

    return Number(id);
    
}



function getId(url, category) {
    const id = url
      .replace(SWAPI_ROOT+category, '')
      .replace(/\//g, '')

    return id;
}


export function getPeopleId(url) {
    return getId(url, SWAPI_PEOPLE);
}

export function getPeopleImg(id) {
    return `${URL_IMG_PERSON}/${id+VGUIDE_IMG_EXTENSION}`;
}



export function getPlanetsId(url) {
    return getId(url, SWAPI_PLANETS);
}

export function getPlanetsImg(id) {
    return `${URL_IMG_PLANETS}/${id+VGUIDE_IMG_EXTENSION}`;
}



export function getSpeciesId(url) {
    return getId(url, SWAPI_SPECIES);
}

export function getSpeciesImg(id) {
    return `${URL_IMG_SPECIES}/${id+VGUIDE_IMG_EXTENSION}`;
}