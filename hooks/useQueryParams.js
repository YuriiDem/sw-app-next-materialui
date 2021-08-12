// import { useLocation } from 'react-router-dom';
import { useRouter } from 'next/router';


export const useQueryParams = () => {
    return new URLSearchParams(useRouter().search);
};