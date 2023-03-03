import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../static/logo.ico';
import './nav.css';

const Nav = () => {
	return (
		<nav className="navbar">
			<div className="navContainer">
			  <div className="logo">
				<NavLink to="/info/home">
					<img src={logo} alt="logo" />
				</NavLink>
			  </div>	
			  <div className="nav-elements">
				  <ul>
				    <li>
					  <NavLink to="/info/home">Home</NavLink>
				    </li>
				    <li>
			          <NavLink to="/info/projects">Projects</NavLink>
			        </li>
			        <li>
			     	  <NavLink to="/info/about">About me!</NavLink>
			        </li>
				  </ul>
			  </div>
				  <div id="menu">
					<div className="menu-items">
				    <ul>
				      <li>
					    <NavLink to="/info/home">Home</NavLink>
				      </li>
				      <li>
			            <NavLink to="/info/projects">Projects</NavLink>
			          </li>
			          <li>
			     	    <NavLink to="/info/about">About me!</NavLink>
			          </li>
				    </ul>
					</div>
				  </div>	  
			</div>
		</nav>
	)
}

export default Nav;
