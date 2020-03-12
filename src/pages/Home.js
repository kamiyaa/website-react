import React from 'react';
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faMedium } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faFileAlt } from '@fortawesome/free-solid-svg-icons';

import { CircleProfile, HeaderLinks } from '../components';
import { ScrollOnClick } from "../utils";

const AboutContent = () => (
<div>
<p>
Hi, my name is Jiayi Zhao (<b>Jeff</b>).
<br/>
I'm currently a 4th year student studying Computer Science at
the <b>University of Toronto</b>.
<br/>
I enjoy working with open source software, learning new technologies
<br/>
and coming up with innovative ways to solve problems.
<br/>
</p>

<p>
Feel free to look around!
</p>

</div>
);

const LogoName = "Jeff Zhao";
const resumeLink = "https://github.com/kamiyaa/kamiyaa.github.io/releases/download/1.0.0/Resume-Jeff-Zhao.pdf";

const SocialLinks = (
	<div>
		<ul>
		<li>
		<a
			className="home-icon"
			target="_blank"
			rel="noopener noreferrer"
			href="https://github.com/kamiyaa/">
			<FontAwesomeIcon icon={faGithub}/>
		</a>
		<a
			className="home-icon"
			target="_blank"
			rel="noopener noreferrer"
			href="https://www.linkedin.com/in/jiayii-zhao/">
			<FontAwesomeIcon icon={faLinkedin}/>
		</a>
		<a
			className="home-icon"
			target="_blank"
			rel="noopener noreferrer"
			href="https://medium.com/@jeff.no.zhao">
			<FontAwesomeIcon icon={faMedium}/>
		</a>
		<a
			className="home-icon"
			href="mailto:jeff.no.zhao@gmail.com">
			<FontAwesomeIcon icon={faEnvelope}/>
		</a>
		<a
			className="home-icon"
			href={resumeLink}>
			<FontAwesomeIcon icon={faFileAlt}/>
		</a>
		</li>
		</ul>
	</div>
);

function Home() {
	return (
<div className="home-content">
	<div className="home-content-section">
	<CircleProfile
		height="200px"
		src="https://raw.githubusercontent.com/kamiyaa/kamiyaa.github.io/master/img/profile.jpg"
	/>
	</div>
	<div className="home-content-section">
		<Link className="home-logo-link" to="/">{LogoName}</Link>
		<br/>
		{SocialLinks}
		<ul>
		{
			HeaderLinks.map(function(link, index) {
				return (
				<li><Link
					className="home-link"
					key={index}
					onClick={ScrollOnClick}
					to={link.Url}>> {link.Name}</Link>
				</li>
				);
			})
		}
		</ul>
		<AboutContent/>
	</div>
</div>
	);
}

export { Home };

export default Home;
