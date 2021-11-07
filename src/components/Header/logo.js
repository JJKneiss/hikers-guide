import React from 'react';
import { NavLink } from 'react-router-dom';

import LogoImage from '../../images/hikersGuide.png';

const Logo = (props, children) => {
    return (
        <NavLink to="/"><img src={LogoImage} alt="logo" /></NavLink>
    );
}

export default Logo;