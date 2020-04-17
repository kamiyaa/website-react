import React from 'react';

const ATab = (props) => (
<a
	target="_blank"
	rel="noopener noreferrer"
	href={props.href}>{props.children}</a>
);

export { ATab };
export default ATab;
