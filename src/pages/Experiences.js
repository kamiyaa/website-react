import React from 'react';

import { Footer, Header, MenuStrip } from '../components';
import { ExperienceList } from "../components/Experiences";

const ExtracurricularDetails = [
{
	Name: "Developer Student Club",
	Title: "VP Marketing",
	Url: "https://utsc.developerstudentclubs.ca/",
	StartDate: "August 2019 - Present",
	Component: (
<div>
<p>
Developer Student Clubs are university based community groups for students
interested in Google developer technologies.
<br/>
As the VP of Marketing, I was responsible for writing and promoting events.
Promoting includes writing emails, Facebook posts and other forms of copy.
</p>
</div>
	),
},
{
	Name: "UofT Hacks",
	Title: "Participant",
	StartDate: "January 2018",
	Component: (
<p>
Participated in a group of two with a grad student.
We created a Django web app that aggregates large, existing open datasets and
tries to do predictions on illnesses and diseases.
</p>
	),
},
{
	Name: "Microsoft msft Coding Challenge",
	Title: "1st Place",
	StartDate: "January 2017",
	Component: (
<p>
Working in a team of three with two other first years,
we tackled a series of coding problems presented by Microsoft.
</p>
	),
},
{
	Name: "Chinese Lion Dancing",
	Title: "Performer and student",
	Url: "http://www.sammychengtorontoliondance.com/",
	StartDate: "2012 - Present",
	Component: (
<div>
<p>
Worked together in teams to deliver spectacular performances for many events
such as parades, weddings, grand openings, new years, etc.
</p>
<p>
Some of the roles I've performed are lion head/tail, dragon head,
and various martial arts.
<br/>
</p>
</div>
	),
}
];

function Extracurriculars() {
	return (
		ExtracurricularDetails.map(function(extra, index) {
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
}

function Experiences() {
	const bookmarks = [ "Experiences", "Extracurricular" ];
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
			<h1 id="Experiences">Experiences</h1>
			<ExperienceList/>
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
