import * as React from 'react';
import { Route, Routes } from 'react-router-dom';
import { EntryOptionPlugin } from 'webpack';
import { PageList } from './PageList';
import { DesignGraphique } from './pages/DesignGraphique';
import { DesignMobile } from './pages/DesignMobile';
import { DesignWeb } from './pages/DesignWeb';
import { LandingPage } from './pages/LandingPage';
import { PortfolioNav } from './pages/PortfolioNav';
import { PresentationPage } from './pages/PresentationPage';


export function AppRoutes() {
    const sections = PageList.map(entry => {
        return <Route key={entry.route.path} {...entry.route} />
    })
    return <Routes>
        <Route path={'/landing'} element={<LandingPage />} />
        <Route path={'/presentation'} element={<PresentationPage />} />
        <Route path={'/portfolio'} element={<PortfolioNav />} />
        {...sections}
        <Route path="/*" element={<LandingPage />} />
    </Routes>

}