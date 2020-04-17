import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faFileAlt } from '@fortawesome/free-solid-svg-icons';

import { SocialLinks } from "./SocialLinks";

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
		<SocialLinks/>
	</div>
	<div className="flex_group">
	<p style={greyStyle}>Built with React.js</p>
	</div>
</footer>
	);
}

export { Footer };
