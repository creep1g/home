import './front.css';
import React from 'react';
import me from '../../static/he.jpg';
var email = "thorgilshjalmarsson@gmail.com";
var mailto = `mailto:${email}`;
var phone = "+3548664540";
var call = `tel:${phone}`;
const Front = () => {
	return (
		<div className="container">
		  <img src={me} alt="Me!"/ >
		  <h1>
			Þorgils Árni Hjálmarsson
		  </h1>
		<div className="info">
		  <p>Email:<br/><a href={mailto}>{email}</a></p> 
		  <p>Phone:<br/><a href={call}>{phone}</a></p>
		</div>

		</div>
	)
}

export default Front;
