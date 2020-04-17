import React from 'react';

import { Footer, Header, MenuStrip } from "../../components";
import { ProjectListComponent } from "../../components/Projects";
import { ContributionList } from "../../components/Contributions";

function Projects() {
	const bookmarks = [ "Projects", "Contributions" ];
	const bookmarksComponent = bookmarks.map((bookmark) => (
		<a className="article-topbar-link" href={`#${bookmark}`}>{bookmark}</a>
	));

	return (
<div>
<Header/>
<div className="article">
	<MenuStrip>{bookmarksComponent}</MenuStrip>

	<div className="article-content">
<div>
	<h1 id="Projects">Projects</h1>
	<ProjectListComponent/>
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
