import React, { useEffect } from "react";

import { ProjectCard } from ".";
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

const ProjectList = [
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

const ProjectListComponent = () => (
<div className="flex_card_list">
	{ ProjectList.map((exp, index) => (
		<ProjectCard project={exp} index={index}/>
	)) }
</div>
);

export { ProjectList, ProjectListComponent };
export default ProjectList;
