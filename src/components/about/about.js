import React, { Fragment } from 'react';
import './about.css'


var name = "Þorgils";
var text = `
	${name} is a 31-year-old software developer currently finishing a BS.c degree in Computer Science at Reykjavik University. He has a passion for both back-end development and the creative freedom of front-end development, as well as a long-standing interest in computers and computer security that began in his early years. 

Before pursuing a career in software development, ${name} worked as an electrician and a sales person at an electronics store. He is also a musician, reflecting his creative side and love for the arts. 

${name} is proficient in multiple programming languages including Golang, Python, JavaScript, and C++, as well as frameworks such as React and Qt. He typically works on Arch-based Linux distros, but also has experience working on Windows and macOS.

In addition to his work, ${name} is also a devoted father to his 5-year-old son.
`
const About = () => {
	return (
			
		<div className="about-container">
		<div className="title">
			<h1>Who am I?</h1>
		</div>
		<div className="description">
			<div className="text">
		      <span>
			    {text}
			  </span>
			</div>
		</div>
		</div>
	)
}

export default About;
