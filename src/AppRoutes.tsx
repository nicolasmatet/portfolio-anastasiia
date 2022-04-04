import * as React from 'react';
import { Route, Routes } from 'react-router-dom';
import { DesignWeb } from './pages/DesignWeb';
import { LandingPage } from './pages/LandingPage';
import { PresentationPage } from './pages/PresentationPage';


export function AppRoutes() {
    return <Routes>
        <Route path={'/landing'} element={<LandingPage />} />
        <Route path={'/presentation'} element={<PresentationPage />} />
        <Route path={'/web'} element={<DesignWeb />} />

        <Route path="/*" element={<LandingPage />} />
    </Routes>

}