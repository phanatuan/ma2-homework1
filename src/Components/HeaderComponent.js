import React, {Component} from 'react';

import {
    Navbar, NavbarBrand,
    } from 'reactstrap';

export default class Header extends Component { 

   render() {
		return (
			<div className = 'container my-3'>
				<Navbar color="light" light expand="md">
					<NavbarBrand href="/">The Movie DB</NavbarBrand>
				</Navbar>
			</div>
		);
		}
    }