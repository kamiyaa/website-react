import React from 'react';
import { Link } from "react-router-dom";

const baseUrl = "experiences";
const ExperienceCard = ({ experience, index}) => (
<div className="flex_card">
	<Link
		to={`/${baseUrl}/${index}`}>
	<div>
		<img
			alt={experience.company}
			src={experience.previewThumbnailUrl}/>
	</div>
	<div className="flex_card_info">
		<h4>{experience.title}</h4>
		<h6>{experience.company}</h6>
		<p>{experience.startDate} - {experience.endDate}</p>
	</div>
	</Link>
</div>
);

export default ExperienceCard;
export { ExperienceCard };

