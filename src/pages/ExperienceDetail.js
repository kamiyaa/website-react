import React from 'react';
import { Link, useParams } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import { Footer, Header, MenuStrip, ScrollToTop } from '../components';
import { ExperienceDetails } from '../components/Experiences';

const marginLeft = {
	display: "inline",
	marginLeft: "0.5rem",
};

function ExperienceDetail() {
	let { id } = useParams();

	if (id >= ExperienceDetails.length) {
		return null;
	}

	const Content = ExperienceDetails[id].Component;

	const bookmarks =
		<Link
			alt="back"
			className="article-topbar-link"
			to="/experiences">
		<FontAwesomeIcon
			icon={faArrowLeft}/>
		<div style={marginLeft}>
		Experiences
		</div>
		</Link>;

	return (
<div>
<Header/>
<div className="article">
	<MenuStrip bookmarks={bookmarks}/>
	<div className="article-content">
	<Content/>
	</div>
</div>
<Footer/>
<ScrollToTop/>
</div>
	);
}

export { ExperienceDetail };

export default ExperienceDetail;
