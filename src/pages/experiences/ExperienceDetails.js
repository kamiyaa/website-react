import React from 'react';
import { Link, useParams } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import { Footer, Header, MenuStrip, ScrollToTop } from "../../components";
import { ExperienceList as List } from "../../components/Experiences";

const marginLeft = {
	display: "inline",
	marginLeft: "0.5rem",
};

const backName = "Experiences";
const backUrl = "/experiences";

const ExperienceDetails = () => {
	let { id } = useParams();

	if (id >= List.length) {
		return null;
	}

	const Content = List[id].Component;

	const bookmarks =
		<Link
			alt="back"
			className="article-topbar-link"
			to={backUrl}>
		<FontAwesomeIcon
			icon={faArrowLeft}/>
		<div style={marginLeft}>
		{backName}
		</div>
		</Link>;

	return (
<div>
<Header/>
<div className="article">
	<MenuStrip>{bookmarks}</MenuStrip>
	<div className="article-content">
	<Content/>
	</div>
</div>
<Footer/>
<ScrollToTop/>
</div>
	);
}

export { ExperienceDetails };

export default ExperienceDetails;
