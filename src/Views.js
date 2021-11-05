import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from './views/Home';

const Views = () => {
    return (
        <Routes>
            <Route exact path='/' element={<Home />} />
        </Routes >
    );
}

export default Views;