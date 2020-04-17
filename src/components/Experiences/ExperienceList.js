import React from "react";

import { ExperienceCard } from "./ExperienceCard";
import {
	IBMExperience,
	IBMExperienceComponent,
	TAExperience,
	TAExperienceComponent,
	OPSExperience,
	OPSExperienceComponent,
} from ".";

const ExperienceList = [
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

const ExperienceListComponent = () => (
<div className="flex_card_list">
	{ ExperienceList.map((exp, index) => (
		<ExperienceCard experience={exp} index={index}/>
	)) }
</div>
);

export { ExperienceList, ExperienceListComponent };

export default ExperienceList;
