import React from 'react';

function ExperienceHeader(props) {
	const { experience } = props;
	return (
<div>

	<h2 id={experience.Title}>{experience.Title}</h2>
	<h4><a
		target="_blank"
		rel="noopener noreferrer"
		href={experience.CompanyUrl}>{experience.Company}</a></h4>
	<h6>{experience.StartDate} - {experience.EndDate}</h6>
	{ experience.Tags ? (
	<ul id="tag-list">
		{ experience.Tags.map(tag => {
				return <li>{tag}</li>;
			})
		}
	</ul>
	) : null }
</div>
	);

}

export { ExperienceHeader };
export default ExperienceHeader;
