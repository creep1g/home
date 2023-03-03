import React from 'react';
import { SocialIcon } from 'react-social-icons';
import './socials.css';

const Socials = () => {
	return (
		<div className="s-container" id="container">
			<SocialIcon className="icon" url="https://github.com/creep1g" />
			<SocialIcon className="icon" url="https://instagram.com/reddish_ant" />
			<SocialIcon className="icon" url="https://www.linkedin.com/in/thorgilshjalmarsson/" />
			<SocialIcon className="icon" url="https://soundcloud.com/reddishant" />
		    <SocialIcon className="icon" url="https://open.spotify.com/artist/7xtRZO7VTwgK7mhq4aNvJ5" />
		</div>
	) 
}

export default Socials;
