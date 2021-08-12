


/**
 * Sends a fetch request. Отправляет Fetch запрос
 * @param {String} url - url for request. url для запроса
 * @returns {Promise} - Promise with request result. Promise с результатом запроса
 */
export const getApiResources = async (url) => {
    try {
        const res = await fetch(url);

        if (!res.ok) {
            console.error('Aaaaah! Could not fetch.', res.status);
            return false;
        }

        return await res.json();
    } catch (error) {
        console.error('Could not fetch.', error.message);
        return false;
    }
}

// getApiResources(SWAPI_ROOT+SWAPI_PEOPLE)
// .then(body => console.log(body))


// (async () => {
//     const body = await getApiResources(SWAPI_ROOT+SWAPI_PEOPLE);
//     console.log(body);
// })();




