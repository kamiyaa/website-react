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
		if (typeof(project.GithubStats.stargazers_count) !== "undefined"
			&& typeof(project.GithubStats.forks_count) !== "undefined") {
			setProjectStars(project.GithubStats.stargazers_count);
			setProjectForks(project.GithubStats.forks_count);
			setProjectReady(true);
			return;
		}


		const apiUrl = `https://api.github.com/repos/${project.Owner}/${project.RepoName}`;

		fetch(apiUrl, {})
		.then(resp => resp.json())
		.then(json => {
			if (typeof(json.stargazers_count) === "undefined"
					|| typeof(json.forks_count) === "undefined") {
				setProjectError(ProjectErrorEnum.LimitReached);
				return;
			}
			project.GithubStats.stargazers_count = json.stargazers_count;
			project.GithubStats.forks_count = json.forks_count;

			setProjectStars(project.GithubStats.stargazers_count);
			setProjectForks(project.GithubStats.forks_count);
			setProjectReady(true);
		})
		.catch(err => {
			setProjectError(ProjectErrorEnum.FetchError);
			console.log(err);
		});

	}, [project.GithubStats.stargazers_count
		, project.GithubStats.forks_count
		, project.Owner
		, project.RepoName]);

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
	<h3 id={project.Name}>{project.Name}</h3>
	<h6>{project.Description}, {project.Language}</h6>

	<div style={githubSectionStyle}>
	<a
	href={project.Url}
	target="_blank"
	rel="noopener noreferrer"
	>
		<FontAwesomeIcon className="project-icon-medium" icon={faGithub}/>
	</a>
	{githubMetrics}
	</div>

	{ project.Tags ? (
	<ul id="tag-list">
		{ project.Tags.map(tag => {
				return <li>{tag}</li>;
			})
		}
	</ul>
	) : null }
	<a
	href={project.PreviewImgUrl}
	rel="noopener noreferrer"
	target="_blank">
		<img className="project-image"
			alt={project.Name}
			src={project.PreviewThumbnailUrl}
		/>
	</a>
</div>
	);

}

export { ProjectHeader };
export default ProjectHeader;
