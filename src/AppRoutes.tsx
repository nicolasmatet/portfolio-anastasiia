import * as React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { PageList } from './PageList';
import { LandingPage } from './pages/LandingPage';
import { PortfolioNav } from './pages/PortfolioNav';
import { PresentationPage } from './pages/PresentationPage';
import { BottomBar } from './ui/BottomBar';

import { useEffect } from "react";

function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}


export function AppRoutes() {
    const sections = PageList.map(entry => {
        return <Route
            key={entry.route.path}
            path={entry.route.path}
            element={<>
                <ScrollToTop />
                {entry.route.element}
                <BottomBar />
            </>} />
    });
    const landing = <>
        <ScrollToTop />
        <LandingPage />
    </>
    const presentation = <>
        <ScrollToTop />
        <PresentationPage />
    </>
    const portfolionav = <>
        <PortfolioNav />
        <BottomBar />
    </>
    return <Routes>
        <Route path={'/landing'} element={landing} />
        <Route path={'/presentation'} element={presentation} />
        <Route path={'/portfolio'} element={portfolionav} />
        {...sections}
        <Route path="/*" element={landing} />
    </Routes>

}