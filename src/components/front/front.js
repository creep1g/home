import './front.css';
import React from 'react';
import me from '../../static/he.jpg';
var email = "thorgilshjalmarsson@gmail.com";
var phone = "+3548664540";
const Front = () => {
	return (
		<div className="container">
		  <img src={me} alt="Me!"/ >
		  <h1>
			Þorgils Árni Hjálmarsson
		  </h1>
		  Email:   <a href={email}>{email}</a> 
		  Phone:   <a href={phone}>{phone}</a> 
		</div>
	)
}

export default Front;
