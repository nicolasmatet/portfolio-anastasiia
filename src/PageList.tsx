import * as React from 'react';
import { Animations } from './pages/Animations';
import { DesignGraphique } from './pages/DesignGraphique';
import { DesignMobile } from './pages/DesignMobile';
import { DesignWeb } from './pages/DesignWeb';
import { Dessins } from './pages/Dessins';
import { Logos } from './pages/Logos';
import { Photos } from './pages/Photos';
import { Videos } from './pages/Videos';
import i1 from "../public/portfolio_elements/page_portfolio_nav/1 web.png"
import i2 from "../public/portfolio_elements/page_portfolio_nav/2 mobile.png"
import i3 from "../public/portfolio_elements/page_portfolio_nav/3 graph.png"
import i4 from "../public/portfolio_elements/page_portfolio_nav/4 logo.png"
import i5 from "../public/portfolio_elements/page_portfolio_nav/5 animation.png"
import i6 from "../public/portfolio_elements/page_portfolio_nav/6 photo.png"
import i7 from "../public/portfolio_elements/page_portfolio_nav/7 video.png"
import i8 from "../public/portfolio_elements/page_portfolio_nav/8 dessin.png"

export const PageList = [
    {
        route: { path: '/web', element: <DesignWeb /> },
        data: { image: i1, title: 'WEB Design' }
    },
    {
        route: { path: '/mobile', element: <DesignMobile /> },
        data: { image: i2, title: 'Mobile Design' }
    },
    {
        route: { path: '/graphique', element: <DesignGraphique /> },
        data: { image: i3, title: 'Graphique' }
    },
    {
        route: { path: '/logos', element: <Logos /> },
        data: { image: i4, title: 'Logos' }
    },
    {
        route: { path: '/animations', element: <Animations /> },
        data: { image: i5, title: 'Animations' }
    },
    {
        route: { path: '/videos', element: <Videos /> },
        data: { image: i7, title: 'Videos' }
    },
    {
        route: { path: '/photos', element: <Photos /> },
        data: { image: i6, title: 'Photos' }
    },

    {
        route: { path: '/dessins', element: <Dessins /> },
        data: { image: i8, title: 'Dessins' }
    },
]