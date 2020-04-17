import React from 'react';
import { Link } from "react-router-dom";

const baseUrl = "projects";
const ProjectCard = ({ project, index}) => (
<div className="flex_card">
        <Link
                to={`/${baseUrl}/${index}`}>
        <div>
             	<img
                        alt={project.name}
                        src={project.previewImgUrl}/>
        </div>
	<div className="flex_card_info">
                <h3>{project.name}</h3>
                <h5>{project.language}</h5>
                <p>{project.description}</p>
        </div>
	</Link>
</div>
);

export default ProjectCard;
export { ProjectCard };
