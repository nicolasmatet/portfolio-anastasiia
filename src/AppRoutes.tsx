import * as React from 'react';
import { Route, Routes } from 'react-router-dom';
import { PageList } from './PageList';
import { LandingPage } from './pages/LandingPage';
import { PortfolioNav } from './pages/PortfolioNav';
import { PresentationPage } from './pages/PresentationPage';
import { BottomBar } from './ui/BottomBar';


export function AppRoutes() {
    const sections = PageList.map(entry => {
        return <Route key={entry.route.path} path={entry.route.path} element={<>{entry.route.element} <BottomBar /></>} />
    })
    return <Routes>
        <Route path={'/landing'} element={<LandingPage />} />
        <Route path={'/presentation'} element={<><PresentationPage /> <BottomBar /></>} />
        <Route path={'/portfolio'} element={<PortfolioNav />} />
        {...sections}
        <Route path="/*" element={<LandingPage />} />
    </Routes>

}