import HomePage from "@containers/HomePage";

import PeoplePage from "@containers/PeoplePage";
import PersonPage from "@containers/PersonPage";

import PlanetsPage from "@containers/PlanetsPage";
import PlanetPage from "@containers/PlanetPage";

import SpeciesPage from "@containers/SpeciesPage";
import SpeciesInfoPage from "@containers/SpeciesInfoPage";


import NotFoundPage from "@containers/NotFoundPage";


const routesConfig = [
    {
        path: '/',
        exact: true,
        component: HomePage
    },
    {
        path: '/people',
        exact: true,
        component: PeoplePage
    },
    {
        path: '/people/:id',
        exact: true,
        component: PersonPage
    },
    {
        path: '/planets',
        exact: true,
        component: PlanetsPage
    },
    {
        path: '/planets/:id',
        exact: true,
        component: PlanetPage
    },
    {
        path: '/species',
        exact: true,
        component: SpeciesPage
    },
    {
        path: '/species/:id',
        exact: true,
        component: SpeciesInfoPage
    },
    {
        path: '*',
        exact: false,
        component: NotFoundPage
    },
];

export default routesConfig;