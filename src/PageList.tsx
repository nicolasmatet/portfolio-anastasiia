import * as React from 'react';
import { Animations } from './pages/Animations';
import { DesignGraphique } from './pages/DesignGraphique';
import { DesignMobile } from './pages/DesignMobile';
import { DesignWeb } from './pages/DesignWeb';
import { Dessins } from './pages/Dessins';
import { Logos } from './pages/Logos';
import { Photos } from './pages/Photos';
import { Videos } from './pages/Videos';

export const PageList = [
    {
        route: { path: '/web', element: <DesignWeb /> },
        data: { image: '/portfolio_elements/page_portfolio_nav/1 web.png', title: 'WEB Design' }
    },
    {
        route: { path: '/mobile', element: <DesignMobile /> },
        data: { image: '/portfolio_elements/page_portfolio_nav/2 mobile.png', title: 'Mobile Design' }
    },
    {
        route: { path: '/graphique', element: <DesignGraphique /> },
        data: { image: '/portfolio_elements/page_portfolio_nav/3 graph.png', title: 'Graphique' }
    },
    {
        route: { path: '/logos', element: <Logos /> },
        data: { image: '/portfolio_elements/page_portfolio_nav/4 logo.png', title: 'Logos' }
    },
    {
        route: { path: '/animations', element: <Animations /> },
        data: { image: '/portfolio_elements/page_portfolio_nav/5 animation.png', title: 'Animations' }
    },
    {
        route: { path: '/videos', element: <Videos /> },
        data: { image: '/portfolio_elements/page_portfolio_nav/7 video.png', title: 'Videos' }
    },
    {
        route: { path: '/photos', element: <Photos /> },
        data: { image: '/portfolio_elements/page_portfolio_nav/6 photo.png', title: 'Photos' }
    },
    {
        route: { path: '/dessins', element: <Dessins /> },
        data: { image: '/portfolio_elements/page_portfolio_nav/8 dessin.png', title: 'Dessins' }
    },
]