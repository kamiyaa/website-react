import React from 'react';
import { Link } from "react-router-dom";

import {
	IBMExperience,
	IBMExperienceComponent,
	TAExperience,
	TAExperienceComponent,
	OPSExperience,
	OPSExperienceComponent,
} from ".";

const ExperienceDetails = [
{
	...IBMExperience,
	Component: IBMExperienceComponent,
},
{
	...TAExperience,
	Component: TAExperienceComponent,
},
{
	...OPSExperience,
	Component: OPSExperienceComponent,
}
];

function ExperienceList() {
	return (
<div className="flex_card_list">
	{ ExperienceDetails.map(function(exp, index) {
		return (
		<div className="flex_card">
			<Link
				to={`/experiences/${index}`}>
			<div>
				<img
					alt={exp.Company}
					src={exp.PreviewThumbnailUrl}/>
			</div>
			<div className="flex_card_info">
				<h4>{exp.Title}</h4>
				<h6>{exp.Company}</h6>
				<p>{exp.StartDate} - {exp.EndDate}</p>
			</div>
			</Link>
		</div>
		);
	})
	}
</div>
	);
}

export { ExperienceList, ExperienceDetails };

export default ExperienceList;
