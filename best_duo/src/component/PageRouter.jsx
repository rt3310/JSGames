import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Map1Page from '../route/Map1Page';

const PageRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Map1Page />} />
            </Routes>
        </Router>
    );
};

export default PageRouter;