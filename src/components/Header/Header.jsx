import React from 'react';
import { Navbar, NavbarBrand } from 'reactstrap'
import Logo from '../../main/img/cirrus_logo.png';

export default props =>(
  <Navbar>
    <NavbarBrand>
        <img src={Logo} alt="logo" className="logo" />
    </NavbarBrand>
  </Navbar>
)