import React from 'react';

import '../css/footer.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faFileAlt } from '@fortawesome/free-solid-svg-icons';

const greyStyle = {
	color: "#647789",
}

const resumeLink = "/res/Resume-Jeff-Zhao.pdf";
const githubLink = "https://github.com/kamiyaa/";
const linkedInLink = "https://www.linkedin.com/in/jiayii-zhao/";

function Footer(props) {
	return (
<footer className="footer">
	<div className="flex_group">
		<ul>
		<li>
		<a
			className="footer-icon"
			target="_blank"
			rel="noopener noreferrer"
			href={linkedInLink}
		>
			<FontAwesomeIcon icon={faLinkedin}/>
		</a>
		<a
			className="footer-icon"
			target="_blank"
			rel="noopener noreferrer"
			href={githubLink}
		>
			<FontAwesomeIcon icon={faGithub}/>
		</a>
		<a
			className="footer-icon"
			href="mailto:jeff.no.zhao@gmail.com"
		>
			<FontAwesomeIcon icon={faEnvelope}/>
		</a>
		<a
			className="footer-icon"
			href={resumeLink}
		>
			<FontAwesomeIcon icon={faFileAlt}/>
		</a>
		</li>
		<a href="/#"><li className="footer-link" >Blog</li></a>
		</ul>
	</div>
	<div className="flex_group">
	<p style={greyStyle}>Built with React.js</p>
	</div>
</footer>
	);
}

export { Footer };
