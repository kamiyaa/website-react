import React from 'react';

function ExperienceHeader(props) {
	const { experience } = props;
	return (
<div>

	<h2 id={experience.title}>{experience.title}</h2>
	<h4><a
		target="_blank"
		rel="noopener noreferrer"
		href={experience.companyUrl}>{experience.company}</a></h4>
	<h6>{experience.startDate} - {experience.endDate}</h6>
	{ experience.tags ? (
	<ul id="tag-list">
		{ experience.tags.map((tag, index) => (
			<li key={`tag-${index}`}>{tag}</li>
		)) }
	</ul>
	) : null }
</div>
	);

}

export { ExperienceHeader };
export default ExperienceHeader;
