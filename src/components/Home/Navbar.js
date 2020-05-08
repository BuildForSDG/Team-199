import React, { Component } from 'react';
import './css/navbar.css';

class NavBar extends Component {
	render() {
		return (
			<nav className="navbar navbar-expand-sm navbar-dark navbar-background">
				<a className="navbar-brand" href="/">
					Where You are
				</a>
			</nav>
		);
	}
}

export default NavBar;
