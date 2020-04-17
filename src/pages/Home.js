import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import { HeaderLinks } from "../components";
import { ScrollOnClick } from "../utils";

import { AboutContent } from "./_about";
import { SocialLinks } from "./_social";

const LogoName = "Jeff Zhao";

const PicStyle = {
	borderRadius: "9999px",
	marginTop: "1rem",
	marginBottom: "0",
	height: "4rem",
	boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
};

const Home = () => {
	useEffect(() => {
		const img = new Image();
		img.src = "https://raw.githubusercontent.com/kamiyaa/kamiyaa.github.io/master/img/profile.jpg";
	})

	return (
<div className="home-content">
	<div className="home-content-section">
	<img
		style={PicStyle}
		alt="profile"
		src="https://raw.githubusercontent.com/kamiyaa/kamiyaa.github.io/master/img/profile.jpg"
	/>
	</div>
	<div className="home-content-section">
		<Link className="home-logo-link" to="/">{LogoName}</Link>
		<br/>
		<SocialLinks/>
		<ul>
		{ HeaderLinks.map((link, index) => (
			<li><Link
				className="home-link"
				key={`home-${index}`}
				onClick={ScrollOnClick}
				to={link.Url}>> {link.Name}</Link>
			</li>
		)) }
		</ul>
		<AboutContent/>
	</div>
</div>
	);
};

export default Home;
export { Home };
