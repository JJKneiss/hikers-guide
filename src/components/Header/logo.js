import React from 'react';
import { NavLink } from 'react-router-dom';

import LogoImage from '../../images/hikersGuide.png';

const Logo = (props, children) => {
    return (
        <NavLink to="logo"><img src={LogoImage} /></NavLink>
    );
}

export default Logo;