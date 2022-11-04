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
        routeLink: 'listaUbicacion',
        icon: 'fal fa-check',
        label: 'Ubicación (CRUD)'
    },
    {
        routeLink: 'coupens',
        icon: 'fal fa-tags',
        label: 'Coupens'
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
        expanded: false,
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