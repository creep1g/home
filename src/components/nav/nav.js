import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../static/logo.ico';
import './nav.css';

const Nav = () => {
	return (
		<nav className="navbar">
			<div className="navContainer">
			  <div className="logo">
				<NavLink to="/home">
					<img src={logo} alt="logo" />
				</NavLink>
			  </div>	
			  <div className="nav-elements">
				  <ul>
				    <li>
					  <NavLink to="/home">Home</NavLink>
				    </li>
				    <li>
			          <NavLink to="/projects">Projects</NavLink>
			        </li>
			        <li>
			     	  <NavLink to="/about">About me!</NavLink>
			        </li>
				  </ul>
			  </div>
			</div>
		</nav>
	)
}

export default Nav;
