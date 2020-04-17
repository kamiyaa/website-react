import React from "react";

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

export default ExtracurricularDetails;
export { ExtracurricularDetails };
