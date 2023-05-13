import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../static/logo.ico';
import Styles from "./styles.module.css";

const Nav = () => {
	return (
		<nav className={Styles.navbar}>
			<div className={Styles.navContainer}>
			  <div className={Styles.logo}>
				<NavLink to="/info/home">
					<img src={logo} alt="logo" className={Styles.img} />
				</NavLink>
			  </div>	
			  <div className={Styles.navelements}>
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
				  <div className={Styles.menu}>
					<div className={Styles.menuitems}>
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
