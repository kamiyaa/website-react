import React from 'react';
import { Link, useParams } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import { Footer, Header, MenuStrip, ScrollToTop } from '../components';
import { ProjectsDetails } from '../components/Projects';

const marginLeft = {
	display: "inline",
	marginLeft: "0.5rem",
};

function ProjectDetail() {
	let { id } = useParams();

	if (id >= ProjectsDetails.length) {
		return null;
	}

	const Content = ProjectsDetails[id].Component;

	const bookmarks =
		<Link
			alt="back"
			className="article-topbar-link"
			to="/projects">
		<FontAwesomeIcon
			icon={faArrowLeft}/>
		<div style={marginLeft}>
		Projects
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

export { ProjectDetail };

export default ProjectDetail;
