import React from 'react';

import { ExperienceHeader } from ".";

const OPSExperience = {
	title: "Application Programmer",
	company: "Ontario Public Service",
	companyUrl: "https://www.ontario.ca/",
	startDate: "May 2018",
	endDate: "August 2018",
	previewImgUrl: "https://github.com/kamiyaa/kamiyaa.github.io/raw/master/img/OPS_002.png",
	previewThumbnailUrl: "https://github.com/kamiyaa/kamiyaa.github.io/raw/master/img/OPS_002.png",
	tags: [ "Java", "JasperReports", "Vbscript", "HP Quality Center",
		"HP UFT"],
}

function OPSExperienceComponent() {
	return (
<div>
	<ExperienceHeader experience={OPSExperience}/>
<p>
At Ontario Public Service (OPS), I was working on the Case and Grant Management Systems team.
This team is responsible for managing investigation cases by the government as
well as grants for public services.
</p>

<p>
I worked on updating their test suites to correspond with new releases.
</p>

<h5>JasperReports Proof-of-Concept</h5>
<p>
One of the key components of the grants management system is the dynamic
generation of PDF documents. Currently, OPS uses Adobe LiveCycle to create
workflows for generating contracts, reports and other important documents.
</p>
<p>
I was tasked to explore alternatives for replacing this component.
I created a JasperReports proof-of-concept to replace Adobe LiveCycle's
PDF generation.
</p>
</div>
	);
}

export { OPSExperience, OPSExperienceComponent };

export default OPSExperience;
