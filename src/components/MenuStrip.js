import React from 'react';

const flexGroupStyle = {
	display: "flex",
}

function MenuStrip(props) {
	const { bookmarks } = props;

	return (
	<div className="article-topbar">
		<div style={flexGroupStyle}>
		{bookmarks}
		</div>
	</div>
	);
}

export { MenuStrip };
export default MenuStrip;
