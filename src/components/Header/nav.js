import React from 'react';

import { NavLink } from 'react-router-dom';

const Nav = (props, children) => {
    return (
        <nav>
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/">Blog</NavLink></li>
                <li><NavLink to="/">Events</NavLink></li>
                <li><NavLink to="/">Contact</NavLink></li>
            </ul>
        </nav >
    );
}

export default Nav;