import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faMedium } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faFileAlt } from "@fortawesome/free-solid-svg-icons";

const resumeLink = "https://github.com/kamiyaa/kamiyaa.github.io/releases/download/1.0.0/Resume-Jeff-Zhao.pdf";

const socialLinksLiStyle = {
	display: "inline",
};

const SocialLinks = () => (
<div>
<ul>
	<li style={socialLinksLiStyle}>
	<a
		className="home-icon" target="_blank" rel="noopener noreferrer"
		href="https://github.com/kamiyaa/"><FontAwesomeIcon icon={faGithub}/>
	</a>
	</li>

	<li style={socialLinksLiStyle}>
	<a
		className="home-icon" target="_blank" rel="noopener noreferrer"
		href="https://www.linkedin.com/in/jiayii-zhao/"><FontAwesomeIcon icon={faLinkedin}/>
	</a>
	</li>

	<li style={socialLinksLiStyle}>
	<a
		className="home-icon" target="_blank" rel="noopener noreferrer"
		href="https://medium.com/@jeff.no.zhao"><FontAwesomeIcon icon={faMedium}/>
	</a>
	</li>

	<li style={socialLinksLiStyle}>
	<a
		className="home-icon"
		href="mailto:jeff.no.zhao@gmail.com">
		<FontAwesomeIcon icon={faEnvelope}/>
	</a>
	</li>

	<li style={socialLinksLiStyle}>
	<a
		className="home-icon"
		href={resumeLink}>
		<FontAwesomeIcon icon={faFileAlt}/>
	</a>
	</li>
</ul>
</div>
);

export default SocialLinks;
export { SocialLinks };
