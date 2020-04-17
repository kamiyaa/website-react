import React, { useState, useEffect } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faStar, faCodeBranch, faCircleNotch } from '@fortawesome/free-solid-svg-icons';

const githubSectionStyle = {
	marginTop: "0.4rem",
	marginLeft: "0.4rem",
};

const inline = {
	display: "inline",
}

const ProjectErrorEnum = {
	Loading: 0,
	LimitReached: 1,
	FetchError: 2,
};

function ProjectHeader(props) {
	const { project } = props;
	const [ projectStars, setProjectStars ] = useState(0);
	const [ projectForks, setProjectForks ] = useState(0);
	const [ projectReady, setProjectReady ] = useState(false);
	const [ projectError, setProjectError ] = useState(ProjectErrorEnum.Loading);

	useEffect(() => {
		if (typeof(project.githubStats.stargazers_count) !== "undefined"
			&& typeof(project.githubStats.forks_count) !== "undefined") {
			setProjectStars(project.githubStats.stargazers_count);
			setProjectForks(project.githubStats.forks_count);
			setProjectReady(true);
			return;
		}


		const apiUrl = `https://api.github.com/repos/${project.owner}/${project.repoName}`;

		fetch(apiUrl, {})
		.then(resp => resp.json())
		.then(json => {
			if (typeof(json.stargazers_count) === "undefined"
					|| typeof(json.forks_count) === "undefined") {
				setProjectError(ProjectErrorEnum.LimitReached);
				return;
			}
			project.githubStats.stargazers_count = json.stargazers_count;
			project.githubStats.forks_count = json.forks_count;

			setProjectStars(project.githubStats.stargazers_count);
			setProjectForks(project.githubStats.forks_count);
			setProjectReady(true);
		})
		.catch(err => {
			setProjectError(ProjectErrorEnum.FetchError);
			console.log(err);
		});

	}, [project.githubStats.stargazers_count
		, project.githubStats.forks_count
		, project.owner
		, project.repoName]);

	let githubMetrics;
	if (projectReady) {
		githubMetrics = 
		<div style={inline}>
			<FontAwesomeIcon
				className="project-icon-small"
				icon={faStar}/>{projectStars}
			<FontAwesomeIcon
				className="project-icon-small"
				icon={faCodeBranch}/>{projectForks}
		</div>;
	} else {
		switch (projectError) {
		case ProjectErrorEnum.FetchError:
			githubMetrics = <div className="project-load-error">
				Failed to fetch Github metrics</div>;
			break;
		case ProjectErrorEnum.LimitReached:
			githubMetrics = <div className="project-load-error">
				API rate limit reached. Too many visitors.</div>;
			break;
		case ProjectErrorEnum.Loading:
		default:
			githubMetrics = 
			<div style={inline}>
				<FontAwesomeIcon
					className="project-icon-small"
					icon={faCircleNotch}
					spin
					/>
			</div>;
			break;
		}
	}


	return (
<div>
	<h3 id={project.name}>{project.name}</h3>
	<h6>{project.description}, {project.language}</h6>

	<div style={githubSectionStyle}>
	<a
	href={project.url}
	target="_blank"
	rel="noopener noreferrer"
	>
		<FontAwesomeIcon className="project-icon-medium" icon={faGithub}/>
	</a>
	{githubMetrics}
	</div>

	{ project.tags ? (
	<ul id="tag-list">
		{ project.tags.map((tag, index) => (<li key={`tag-{index}`}>{tag}</li>)) }
	</ul>
	) : null }
	<a
	href={project.previewImgUrl}
	rel="noopener noreferrer"
	target="_blank">
		<img className="project-image"
			alt={project.name}
			src={project.previewThumbnailUrl}
		/>
	</a>
</div>
	);

}

export { ProjectHeader };
export default ProjectHeader;
