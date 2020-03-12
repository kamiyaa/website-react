import React from 'react';

import { Footer, Header, MenuStrip } from '../components';
import { ProjectList } from "../components/Projects";
import { ContributionList } from "../components/Contributions";

function Projects() {
	const bookmarks = [ "Projects", "Contributions" ];
	const bookmarksComponent = bookmarks.map((bookmark) => {
		return (
		<a className="article-topbar-link" href={`#${bookmark}`}>{bookmark}</a>
		)
	});

	return (
<div>
<Header/>
<div className="article">
	<MenuStrip bookmarks={bookmarksComponent}/>

	<div className="article-content">
<div>
	<h1 id="Projects">Projects</h1>
	<ProjectList/>
</div>
	<h1 id="Contributions">Contributions</h1>
	<ContributionList/>
	</div>
</div>
<Footer/>
</div>
	);
}

export { Projects };

export default Projects;
