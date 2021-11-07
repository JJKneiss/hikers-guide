import React from 'react';

import Logo from './logo';
import Nav from './nav';
import LocationPagination from './locationPagination';

const Header = (props, children) => {
    return (
        <header>
            <Logo />
            <Nav />
            <LocationPagination />
        </header>
    );
}

export default Header;