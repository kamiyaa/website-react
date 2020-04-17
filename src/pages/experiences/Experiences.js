import React from 'react';

import { Footer, Header, MenuStrip } from "../../components";
import { ExperienceListComponent } from "../../components/Experiences";

import { ExtracurricularDetails } from "./_extracurriculars";

const Extracurriculars = () => (
	ExtracurricularDetails.map((extra, index) => {
		let Name;
		if (extra.Url) {
			Name = <a href={extra.Url}><h4>{extra.Name}</h4></a>;
		} else {
			Name = <h4>{extra.Name}</h4>;
		}

		return (
			<div>
			{Name}
			<h6><b>{extra.Title}</b></h6>
			{extra.StartDate}

			{extra.Component}
			</div>
		);
	})
);

function Experiences() {
	const bookmarks = [ "Experiences", "Extracurricular" ];
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
			<h1 id="Experiences">Experiences</h1>
			<ExperienceListComponent/>
		</div>
		<div>
			<h1 id="Extracurricular">Extracurricular</h1>
			<Extracurriculars/>
		</div>
	</div>
</div>
<Footer/>
</div>
	);
}

export { Experiences };

export default Experiences;
