


/**
 * Sends a fetch request. Отправляет Fetch запрос
 * @param {String} url - url for request. url для запроса
 * @returns {props} - props with request result. Props с результатом запроса
 */

 export async function getStaticProps(url) {
  const res = await fetch(url);
  const data = await res.json();

  if (!data) {
      return {
        notFound: true,
      }
    }

  return {
      props: {data}, // will be passed to the page component as props
  }
}







// export const getApiResources = async (url) => {
//     try {
//         const res = await fetch(url);

//         if (!res.ok) {
//             console.error('Aaaaah! Could not fetch.', res.status);
//             return false;
//         }

//         return await res.json();
//     } catch (error) {
//         console.error('Could not fetch.', error.message);
//         return false;
//     }
// }

// async function getServerSideProps(context) {
//     const res = await fetch(url);
//     const data = await res.json();

//     return {
//         props: {data}, // will be passed to the page component as props
//     }
// }


