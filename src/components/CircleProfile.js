import React from 'react';

export { CircleProfile };

const ProfileStyle = {
	borderRadius: "50%",
	marginTop: "1rem",
	marginBottom: "0",
	boxShadow: "0 0 16px -8px grey",
};

function CircleProfile(props) {
	return (
	<a href={props.href}>
	<img
		src={props.src}
		alt={props.alt}
		style={ProfileStyle}
		height={props.height}
	/>
	</a>
	);
}
