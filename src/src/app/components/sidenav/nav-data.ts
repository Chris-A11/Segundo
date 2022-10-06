import { INavbarData } from "./helper";

export const navbarData: INavbarData[] = [
    {
        routeLink: 'dashboard',
        icon: 'fal fa-home',
        label: 'Dashboard'
    },
    {
        routeLink: 'agregar',
        icon: 'fal fa-plus',
        label: 'Reportar'
    },
    {
        routeLink: 'statistics',
        icon: 'fal fa-chart-bar',
        label: 'Statistics'
    },
    {
        routeLink: 'coupens',
        icon: 'fal fa-tags',
        label: 'Coupens',
        items: [
            {
                routeLink: 'coupens/list',
                label: 'Prueba 1'
            },
            {
                routeLink: 'coupens/create',
                label: 'Prueba 2'
            }

        ]
    },
    {
        routeLink: 'pages',
        icon: 'fal fa-file',
        label: 'Pages'
    },
    {
        routeLink: 'media',
        icon: 'fal fa-camera',
        label: 'Media'
    },
    {
        routeLink: 'settings',
        icon: 'fal fa-cog',
        label: 'Settings',
        expanded: true,
        items: [
            {
                routeLink: 'settings/tipo',
                label: 'Tipo Hallazgo'
            },
            {
                routeLink: 'settings/severidad',
                label: 'Severidad'
            }
        ]
    },
];