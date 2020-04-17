import React from "react";

const flexGroupStyle = {
	display: "flex",
}

const MenuStrip = ({ children }) => (
	<div className="article-topbar">
		<div style={flexGroupStyle}>
		{children}
		</div>
	</div>
);

export { MenuStrip };
export default MenuStrip;
