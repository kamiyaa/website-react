import React from 'react';
import { Link } from "react-router-dom";

import {
	JoshutoProject,
	JoshutoProjectComponent,
	GameOfLifeProject,
	GameOfLifeProjectComponent,
	WebsiteProject,
	WebsiteProjectComponent,
	RuijiProject,
	RuijiProjectComponent,
	SpaceFarmerBotProject,
	SpaceFarmerBotProjectComponent,
} from ".";

const ProjectsDetails = [
{
	...JoshutoProject,
	Component: JoshutoProjectComponent,
},
{
	...GameOfLifeProject,
	Component: GameOfLifeProjectComponent,
},
{
	...WebsiteProject,
	Component: WebsiteProjectComponent,
},
{
	...RuijiProject,
	Component: RuijiProjectComponent,
},
{
	...SpaceFarmerBotProject,
	Component: SpaceFarmerBotProjectComponent,
},
];

function ProjectList() {
	return (
<div className="flex_card_list">
	{ ProjectsDetails.map(function(exp, index) {
		return (
<div className="flex_card">
	<Link
		to={`/projects/${index}`}>
	<div>
		<img
			alt={exp.Name}
			src={exp.PreviewImgUrl}/>
	</div>
	<div className="flex_card_info">
		<h3>{exp.Name}</h3>
		<h5>{exp.Language}</h5>
		<p>{exp.Description}</p>
	</div>
	</Link>
</div>
		);
	})
	}
</div>
	);
}

export { ProjectList, ProjectsDetails };

export default ProjectList;
