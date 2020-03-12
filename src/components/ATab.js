import React from 'react';

function ATab(props) {
	return (
	<a
		target="_blank"
		rel="noopener noreferrer"
		href={props.href}>{props.children}</a>
	);
}

export { ATab };
export default ATab;
